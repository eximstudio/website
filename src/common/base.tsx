import { Outlet } from "react-router-dom";
import Nav from "./nav";

export default function Base() {
    return <>
        <Nav />
        <div style={{ color: "#fff" }}>
            <Outlet />
        </div>
    </>
}
