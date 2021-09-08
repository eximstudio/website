import { useEffect, useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { shake } from "./utils";

export default function Nav() {
  const location = useLocation();
  const history = useHistory();
  const [active, setActive] = useState<boolean>(true);
  const [value, setValue] = useState<string>("");
  const [search, setSearch] = useState<boolean>(
    location.pathname === "/search"
  );
  useEffect(() => {
    if (location.pathname === "/search") {
      setSearch(true);
    } else {
      setSearch(false);
    }
  }, [location.pathname]);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          history.push(
            "/search?q=" +
              (
                (e.target as HTMLFormElement).getElementsByTagName(
                  "input"
                )[0] as HTMLInputElement
              ).value
          );
        }}
      >
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
          rel="stylesheet"
        />
        <div className="w-screen flex flex-row items-center p-1 justify-between bg-white shadow-xs">
          <div
            className="ml-8 text-lg text-gray-700 hidden md:flex cursor-pointer"
            onClick={() => history.push("/")}
          >
            Exim Studio
          </div>
          <span className="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
            <input
              type="search"
              name="serch"
              placeholder="Search"
              disabled={search}
              value={search ? "" : value}
              autoComplete="off"
              onChange={(e) => setValue(e.target.value)}
              className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
            />
            <i
              className={`fas fa-search m-3 mr-5 text-lg ${
                search ? "cursor-not-allowed" : "cursor-pointer"
              } text-gray-700 w-4 h-4`}
              onClick={() => {
                if (!search) history.push("/search?q=" + value);
              }}
            ></i>
          </span>
          <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
            <i className="fas fa-bars" onClick={(e) => setActive(!active)}></i>
          </div>
          <div
            id="nav"
            className={`flex-row-reverse mr-8 ${
              active ? "hidden" : ""
            } md:flex`}
          >
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Button
            </div>
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
              Link
            </div>
          </div>
        </div>
      </form>
    </>

    /*
    <nav classNameName="flex items-center justify-between flex-wrap bg-teal-500 p-6 bg-gray-600">
      <div classNameName="flex items-center flex-shrink-0 text-white mr-6">
        <span classNameName="font-semibold text-xl tracking-tight">
          Exim Studio
        </span>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          history.push(
            "/search?q=" +
              ((e.target as HTMLFormElement).children[0] as HTMLInputElement)
                .value
          );
        }}
      >
        <input
          type="text"
          formAction="/search"
          formMethod="get"
          classNameName={`${
            search ? "hidden " : ""
          }absolute top-30 right-10 outline-none`}
        />
      </form>
      <div classNameName="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div classNameName="text-sm lg:flex-grow">
          <NavLink
            onClick={(e) => shake(e.target as HTMLElement)}
            to="/"
            classNameName="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            activeClassNameName="text-white shake"
            exact
          >
            Home
          </NavLink>
          <NavLink
            onClick={(e) => shake(e.target as HTMLElement)}
            to="/contact"
            activeClassNameName="text-white shake"
            classNameName="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Contact
          </NavLink>
          <NavLink
            onClick={(e) => shake(e.target as HTMLElement)}
            to="/about"
            activeClassNameName="text-white shake"
            classNameName="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 "
          >
            About
          </NavLink>
        </div>
      </div>
        </nav>*/
  );
}
