import { ReactElement } from "react";
import { Link } from "react-router-dom";

type Results = {
  uid: number;
  title: string;
  url: string;
  description: string;
  imgUrl?: string;
};

const resultsOutput = (data: Results[]): ReactElement[] => {
  return data.map((res: Results): any => {
    return (
      <Link
        key={res.url}
        to={res.url}
        className="w-10/12 sm:w-1/2 md:w-1/3 flex flex-col p-3 align-middle"
      >
        <img
          src={`https://via.placeholder.com/650`}
          alt={res.title}
          className="w-full h-full items-center"
        />
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
        <div className="alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
          <span className="text-red-500">
            <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
        <div className="alert-content ml-4">
          <div className="alert-title font-semibold text-lg text-red-800">
            Error
          </div>
          <div className="alert-description text-sm text-red-600">
            {message}
          </div>
        </div>
      </div>
    </>
  );
}

async function shake(element?: HTMLElement): Promise<void> {
  if (element) {
    if (!element.classList.contains("shake")) return;
  }
  for (let i of [
    "translate(-2.5%, -2.5%)",
    "translate(2.5%, 2.5%)",
    "translate(-2.5%, 2.5%)",
    "translate(2.5%, -2.5%)",
    "translate(-2.5%, 0%)",
    "translate(0%, -2.5%)",
    "translate(2.5%, 0%)",
    "translate(0%, 2.5%)",
  ]) {
    await new Promise((resolve) => setTimeout(resolve, 50));
    document.getElementById("root")!.style.transform = i;
  }
  setTimeout(() => {
    document.getElementById("root")!.style.transform = "translate(0, 0%)";
  }, 50);
}

export type { Results };
export { resultsOutput, ShowError, shake };
