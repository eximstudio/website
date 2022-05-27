import { useRoutes } from "react-router-dom";
import _404 from "../common/404";
import Base from "../common/base";
import Home from "../home";
import Chem from "../pages/chem";
import Phy from "../pages/phy";
import Search from "../search";

export default function Route() {
  return useRoutes([
    {
      path: "/",
      element: <Base />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
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
        {
          path: "chem",
          element: <Chem />
        }, {
          path: "phy",
          element: <Phy />
        }
      ],
    },
    {
      path: "*",
      element: <_404 />,
    },

  ]);
}
