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
      "https://worker.exstd.workers.dev/search?origin=" +
        window.location.origin +
        "&query=" +
        query,
      { headers: { "Content-type": "application/json" } }
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

/*
<section class="container px-6 py-4 mx-auto">
  <div class="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
    <!-- Card 1 -->
    <div class="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
      <div class="p-3 mr-4 bg-blue-500 text-white rounded-full">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"></path></svg>
      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-900">Projects</p>
        <p class="text-sm font-normal text-gray-800">Unlimted projects for you</p>
      </div>
    </div>
    <!-- Card 2 -->
    <div class="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
      <div class="p-3 mr-4 bg-blue-500 text-white rounded-full">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-900">Developer API</p>
        <p class="text-sm font-normal text-gray-800">Well documented developer API</p>
      </div>
    </div>
    <!-- Card 3 -->
    <div class="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
      <div class="p-3 mr-4 bg-blue-500 text-white rounded-full">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-900">Template</p>
        <p class="text-sm font-normal text-gray-800">Templates and designs for your project</p>
      </div>
    </div>
    <!-- Card 4 -->
    <div class="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
      <div class="p-3 mr-4 bg-blue-500 text-white rounded-full">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
      </div>
      <div>
        <p class="mb-2 text-sm font-medium text-gray-900">Analytics</p>
        <p class="text-sm font-normal text-gray-800">User and customer analytics</p>
      </div>
    </div>
  </div>
</section>
*/
