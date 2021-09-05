import { ReactElement, useState } from "react";

let data = null;

function fetchData(): any[] {
  fetch("/models/data.json").then(res => res.json()).then(res => { data = res; });
  return []
}

function filter(props: {}): ReactElement| Element {
  return <></>
}

export default function Search() {
  const [search, setSearch] = useState<Element| ReactElement>(<></>)
  return (
    <div>

      <input
        className="w-3/6 p-2 text-black outline-none border-b-2 border-gray-600 h-20 text-2xl font-sans focus:border-collapse"
        type="text"
        autoFocus
        placeholder="Search"
        onKeyUp={(e) => setSearch(filter((e.target as HTMLInputElement).value))}
      />
      <div className="container w-4/6 flex bg-black h-full">
        { search }
      </div>
        </div>
  );
}
