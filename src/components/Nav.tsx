import { useEffect, useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { shake } from "./utils";

export default function Nav() {
  const location = useLocation();
  const history = useHistory();
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
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 bg-gray-600">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
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
          className={`${
            search ? "hidden " : ""
          }absolute top-30 right-10 outline-none`}
        />
      </form>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <NavLink
            onClick={() => shake()}
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            activeClassName="text-white"
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="text-white"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-white"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 "
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
