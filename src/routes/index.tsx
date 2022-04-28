import { useRoutes } from "react-router-dom";
import _404 from "../common/404";
import Home from "../home";


export default function Route() {
    return useRoutes([
        {
            path: "/",
            element: <Home />,
            children: [{
                path: "search",
                
            }]
        },
        {
            path: "*",
            element: <_404 />
        }
    ])
}
