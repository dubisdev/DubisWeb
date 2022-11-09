"use client";

import { FC, useEffect, useState } from "react";

const pagenames = ["inicio", "proyectos", "habilidades"] as const;

type MenuLinkProps = {
  href: string;
  content: string;
  active?: boolean;
  onClick?: () => void;
};

const MenuLink: FC<MenuLinkProps> = ({ href, content, active, onClick }) => {
  const activeStyle = active ? " active" : "";

  return (
    <li onClick={onClick} className="nav__menu__li">
      <a
        className={
          "nav__menu__a py-2 px-7 text-xl text-white rounded-full" + activeStyle
        }
        href={href}
      >
        {capitalizeFirstLetter(content)}
      </a>
    </li>
  );
};

const capitalizeFirstLetter = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

const getPathHash = (): typeof pagenames[number] => {
  const hash = window.location.hash;

  // @ts-ignore
  return pagenames.includes(hash.substring(1)) ? hash : "";
};

const NavBar = () => {
  const [openResponsiveMenu, setOpenResponsiveMenu] = useState(false);
  const [pathName, setPathName] = useState("");

  useEffect(() => {
    setPathName(getPathHash());
  }, []);

  const handleClickResponsive = () => {
    setOpenResponsiveMenu(!openResponsiveMenu);
  };

  return (
    <nav
      id="navbar"
      className="nav first-letter:fixed top-0 left-0 w-full flex items-center justify-between py-9 px-20 transition z-50"
    >
      <a href="/" className="inline-flex items-center gap-5">
        <img
          src="https://avatars.githubusercontent.com/u/77246331"
          alt="Imagen de perfil de David Jiménez"
          className="hidden sm:block h-14 object-cover rounded-full"
        />
        <span className="text-white font-bold text-xl sm:text-4xl">
          DUBISDEV
        </span>
      </a>
      <ul
        className={`nav__menu flex items-center justify-center gap-12 + ${
          openResponsiveMenu ? " menuResponsive" : ""
        }`}
      >
        {pagenames.map((pagename) => {
          const url = pagename === "inicio" ? "/" : `#${pagename}`;
          return (
            <MenuLink
              key={pagename}
              active={pagename.toLowerCase() === pathName}
              href={url}
              content={pagename}
              onClick={() => {
                setPathName(pagename.toLowerCase() as typeof pagenames[number]);
                setOpenResponsiveMenu(false);
              }}
            />
          );
        })}
      </ul>
      <div onClick={handleClickResponsive} className="btn-responsive">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default NavBar;
