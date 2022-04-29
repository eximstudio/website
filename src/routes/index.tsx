import { useRoutes } from "react-router-dom";
import _404 from "../common/404";
import Home from "../home";
import Search from "../search";

export default function Route() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "search",
          element: <Search />,
          children: [
            {
              path: ":query",
              element: <Search />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <_404 />,
    },
  ]);
}
