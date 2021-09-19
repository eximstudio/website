import { ReactElement } from "react";
import { Link } from "react-router-dom";

let data: Results[];

function setData(_data: Results[]) {
  data = _data;
}

async function fetchData(): Promise<Results[]> {
  const res: Results[] = await fetch("/models/config.json").then((res) =>
    res.json()
  );
  data = res;
  return data;
}

export { data, setData, fetchData };

fetch("/models/config.json")
  .then((res) => res.json())
  .then((data) => {
    setData(data);
  })
  .catch((err) => {
    console.error(err);
  });

type Results = {
  id: string;
  animate: boolean;
  title: string;
  url: string;
  description: string;
  imgUrl?: string;
};

const resultsOutput = (data: Results[]): ReactElement[] => {
  return data.map((res: Results): any => {
    return (
      <Link key={res.url} to={res.url}>
        <img src={`https://via.placeholder.com/650`} alt={res.title} />
      </Link>
    );
  });
};

function ShowError({
  message,
  isShown,
  setIsShown,
}: {
  message: string;
  isShown: boolean;
  setIsShown: (isShown: boolean) => void;
}): ReactElement {
  return (
    <>
      <div
        className={`alert flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300 w-2/3 lg:w-1/5 sm:w-1/3 h-1/12 absolute top-20 right-2`}
        style={{
          opacity: `${isShown ? 0.9 : 0}`,
          transition: "opacity 0.3s",
        }}
        onClick={() => setIsShown(false)}
      >
        <div>
          <span>
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
        <div>
          <div>Error</div>
          <div>{message}</div>
        </div>
      </div>
    </>
  );
}

async function shake(element?: HTMLElement): Promise<void> {
  if (element) {
    if (!element.classList.contains("shake")) return;
  }
  for (const i of [
    "translate(-2.5%, -2.5%)",
    "translate(2.5%, 2.5%)",
    "translate(-2.5%, 2.5%)",
    "translate(2.5%, -2.5%)",
    "translate(-2.5%, 0%)",
    "translate(0%, -2.5%)",
    "translate(2.5%, 0%)",
    "translate(0%, 2.5%)",
    "translate(-2.5%, -2.5%)",
    "translate(2.5%, 2.5%)",
    "translate(-2.5%, 2.5%)",
    "translate(2.5%, -2.5%)",
    "translate(-2.5%, 0%)",
    "translate(0%, -2.5%)",
    "translate(2.5%, 0%)",
    "translate(0%, 2.5%)",
  ]) {
    navigator.vibrate(50);
    await new Promise((resolve) => setTimeout(resolve, 30));
    document.getElementById("root")!.style.transform = i;
  }
  setTimeout(() => {
    document.getElementById("root")!.style.transform = "translate(0, 0%)";
  }, 30);
}

const events = new Map<string, boolean>();

function addEvent({
  name,
  callback,
}: {
  name: string;
  callback: (e: Event) => void;
}): void {
  if (!events.has(name)) {
    events.set(name, true);
    window.addEventListener(name, callback);
  } else return;
}

export async function resolveURL(
  id: string
): Promise<[string, boolean] | null> {
  if (!data?.length) await fetchData();
  const res = data.find((res) => res.id === id);
  if (!res) return null;
  return [res!.url, res!.animate];
}

function getThemeDark(): boolean {
  if (
    localStorage.dark === "true" ||
    (!("dark" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    return true;
  } else {
    return false;
  }
}

export function toggleTheme(): void {
  const dark = getThemeDark();
  document.documentElement.classList.toggle("dark-theme", !dark);
  localStorage.setItem("dark", !dark ? "true" : "false");
}

export type { Results };
export { resultsOutput, ShowError, shake, addEvent };
