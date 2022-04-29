import { Outlet } from "react-router-dom";

export default function Search({ query }: { query?: string }) {
  return (
    <>
      <Outlet />
    </>
  );
}
