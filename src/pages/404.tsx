// create a 404 page with tailwind
//
// Path: src\pages\404.tsx

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen text-gray-500">
      <div className="text-center">
        <h1 className="text-9xl">404</h1>
        <p className="text-4xl my-6 ">Page not found</p>
        <a
          href="#"
          className="hover:underline transition-all my-3 block p-0 "
          onClick={(e) => {
            e.preventDefault();
            history.back();
          }}
        >
          Go back
        </a>
        <Link to="/" className="hover:underline transition-all my-3 block p-0 ">
          Go home
        </Link>
      </div>
    </div>
  );
}
