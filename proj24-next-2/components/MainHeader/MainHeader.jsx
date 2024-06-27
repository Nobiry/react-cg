import Image from "next/image";
import Link from "next/link";

import classes from "./style.module.css";

import logoImg from "@/assets/logo.png";
import MainHeaderBg from "./MainHeaderBg";
import NavLink from "./NavLink";

function MainHeader() {

  return (
    <>
      <MainHeaderBg />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="" />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
