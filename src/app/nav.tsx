"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { redirect, usePathname } from "next/navigation";

import "./nav.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Backdrop from "@mui/material/Backdrop";
import { Input, InputAdornment, TextField } from "@mui/material";

export function Nav() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const toggleOpen = () => setOpen(!open);

  const keyTest = (e: { key: string }) => e.key === "Escape" && toggleOpen();

  useEffect(() => {
    window.addEventListener("keydown", keyTest, true);
    return () => window.removeEventListener("keydown", keyTest, true);
  });

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Exim Studio
          </Typography>
        </Toolbar>
      </AppBar>
      <Backdrop
        sx={{ color: "#fff" }}
        open={open}
        onClick={(e) => e.target == e.currentTarget && "child" && handleClose()}
      >
        <Lists handleClose={handleClose} />
      </Backdrop>
    </>
  );
}

function NavLink({
  children,
  href,
  handleClose,
  ...props
}: {
  children: React.ReactNode;
  href: string;
  handleClose: () => void;
}) {
  return (
    <>
      <Link href={href} onClick={handleClose} {...props}>
        {children}
      </Link>
    </>
  );
}

function Lists({ handleClose }: { handleClose: () => void }) {
  const pathname = usePathname();
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <ul
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            listStyle: "none",
          }}
        >
          <Search />
          <li>
            <NavLink handleClose={handleClose} href="/">
              <Typography className={`${pathname === "/" && "active"} nav-btn`}>
                Home
              </Typography>
            </NavLink>
          </li>
          <li>
            <NavLink handleClose={handleClose} href="/view">
              <Typography
                className={`${pathname.includes("view") && "active"} nav-btn`}
              >
                Resource
              </Typography>
            </NavLink>
          </li>
          <li>
            <NavLink handleClose={handleClose} href="/courses">
              <Typography
                className={`${
                  pathname.includes("courses") && "active"
                } nav-btn`}
              >
                Courses
              </Typography>
            </NavLink>
          </li>
          <li>
            <NavLink handleClose={handleClose} href="/about">
              <Typography
                className={`${pathname === "/about" && "active"} nav-btn`}
              >
                About
              </Typography>
            </NavLink>
          </li>
          <li>
            <NavLink handleClose={handleClose} href="/subscribe">
              <Typography
                className={`${pathname === "/subscribe" && "active"} nav-btn`}
              >
                Subscribe
              </Typography>
            </NavLink>
          </li>
        </ul>
      </Box>
    </>
  );
}

function Search() {
  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputElement.current && inputElement.current.checkVisibility())
      inputElement.current.focus();
  });

  useEffect(() => {
    const input = inputElement.current;
    input?.addEventListener("submit", handleSearch, true);
    return () =>
      input?.removeEventListener("submit", handleSearch);
  });

  return (
    <>
      <TextField
        id="standard-basic"
        placeholder="Search"
        variant="standard"
        className="nav-search"
        inputRef={inputElement}
        // endAdornment={
        //   <InputAdornment position="end">
        //     <IconButton
        //       aria-label="Submit the form"
        //     >
        //     </IconButton>
        //   </InputAdornment>
        // }
      />
    </>
  );
}

Search.displayName = "Search";

function handleSearch(e: SubmitEvent) {
  const input = e.target as HTMLInputElement;

  return void input && redirect(input.value);
}
