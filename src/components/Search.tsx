import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Results, resultsOutput, ShowError } from "./utils";

let data: null | Results[] = null,
  lastError: number;
const search = new Map<string, number[]>();

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
  const location = useLocation();
  const [isShown, setIsShown] = useState(false);
  const [error, setMessage] = useState("");
  function setError(message: string): void {
    console.log(message);
    setMessage(message);
    setIsShown(true);
    clearTimeout(lastError);
    lastError = setTimeout(() => setIsShown(false), 5000) as unknown as number;
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
  }, [query, location.search]);

  return (
    <div>
      <input
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
      <div>{search}</div>
    </div>
  );
}
