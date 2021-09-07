import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useHistory } from "react-router-dom";
import { Results, resultsOutput, ShowError } from "./utils";

let data: null | Results[] = null,
  search = new Map<string, number[]>(),
  lastError: any;

async function fetchData(
  throwError: Dispatch<SetStateAction<string>>
): Promise<void> {
  window.addEventListener("unhandledrejection", (e: any) =>
    throwError(e.reason.message)
  );
  if (data) return;
  data = (await fetch("/models/config.json").then((res) =>
    res.json()
  )) as Results[];
}

async function filter(
  query: string | undefined,
  throwError: Dispatch<SetStateAction<string>>
): Promise<ReactElement[] | Element[]> {
  await fetchData(throwError);
  if (!query) return resultsOutput(data!);

  let res = search.get(query);
  if (!res) {
    res = (await fetch(
      `https://worker.exstd.workers.dev/search/?query=${query}`
    ).then((res) => res.json())) as number[];
    search.set(query, res);
  }
  return resultsOutput(res.map((uid: number) => data![uid]));
}

export default function Search(): ReactElement {
  const [isShown, setIsShown] = useState(false);
  const [error, setMessage] = useState("");
  function setError(message: string): void {
    console.log(message);
    setMessage(message);
    setIsShown(true);
    clearTimeout(lastError);
    lastError = setTimeout(() => setIsShown(false), 5000);
  }
  const [search, setSearch] = useState<Element | ReactElement>(
    <h2
      style={{
        textAlign: "center",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 100%)",
        fontSize: "2rem",
      }}
    >
      Loading..!
    </h2>
  );
  const [query, setQuery] = useState<string>(
    new URLSearchParams(window.location.search).get("q") || ""
  );
  const history = useHistory();

  useEffect(() => {
    if (query)
      filter(query, setError as () => void).then((res) =>
        setSearch(<>{res}</>)
      );
    else
      filter(undefined, setError as () => void).then((res) =>
        setSearch(<>{res}</>)
      );
  }, [query]);

  return (
    <div>
      <input
        className="w-3/6 p-2 text-black outline-none border-b-2 border-gray-600 h-20 text-2xl font-sans focus:border-collapse"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus
        placeholder="Search"
        onKeyUp={(e) => {
          history.push(`?q=${(e.target as HTMLInputElement).value}`);
          filter(
            (e.target as HTMLInputElement).value,
            setError as () => void
          ).then((res) => setSearch(<>{res}</>));
        }}
      />
      <ShowError isShown={isShown} message={error} setIsShown={setIsShown} />
      <div className="grid gap-3 mb-6 md:grid-cols-2 lg:grid-cols-4 justify-center container">
        {search}
      </div>
    </div>
  );
}
