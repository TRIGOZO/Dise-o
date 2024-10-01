import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { t } from "i18next";

import styled from "styled-components";
import styles from "./Navbar.module.css";
import {ImPinterest2,ImFacebook ,ImWhatsapp} from "react-icons/im";

import { BsTelegram, BsInstagram } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import DarkMood from "../../common/DarkMood";

import favIcon from "../../assets/icons/favicon.ico";

const Navbar = ({ handleOnclick, location }) => {
  const [open, setOpen] = useState(false);

  const openMenu1 = {
    transform: open ? " rotate(45deg)" : " rotate(0)",
  };
  const openMenu2 = {
    transform: open ? "translateX(-100%)" : "translateX(0)",
    opacity: open ? 0 : 1,
  };
  const openMenu3 = {
    transform: open ? " rotate(-45deg)" : " rotate(0)",
  };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 993px)",
  });

  return (
    <>
      <div className={`menuTM ${styles.menuTM}`}>
        <img src={favIcon} alt="logo" />
        <ul onClick={() => setOpen(!open)}>
          <li style={openMenu1}></li>
          <li style={openMenu2}></li>
          <li style={openMenu3}></li>
        </ul>
      </div>

      <Show open={open}>
        {isDesktopOrLaptop ? (
          <nav
            open={open}
            location={location.pathname}
            className={`nav ${styles.nav} ${
              location.pathname === "/" ? styles.cssRight : styles.cssLeft
            }`}
          >
            <button className={styles.theme}>
              <DarkMood />
            </button>

            <figure className={styles.profile}>
              <img
                src="https://z-p3-scontent.flim4-2.fna.fbcdn.net/v/t39.30808-6/305278550_3250517231887618_4186015003750690835_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFCo9hKaTBmeEcikR-0PfiHd9xI92pe_Dx33Ej3al78PKVh4HEF3-M960rTgBTNlyCRhsJasgG7JwkAVF-Sg74E&_nc_ohc=C6FD5CwR7_oQ7kNvgE0V4qR&_nc_zt=23&_nc_ht=z-p3-scontent.flim4-2.fna&_nc_gid=A-QxXVW72m0_DPaXVPbzmX7&oh=00_AYCjfEsqANQmrQqhsUkrN7sqRxf0Jbuh79skitRKgiQMNQ&oe=66F940E5"
                alt="profile"
              />
            </figure>
            <h2>{t("name")}</h2>

            <ul className={styles.socials}>
              <li>
                <a href="https://t.me/trigozodev" target="_blank" rel="noreferrer">
                  <BsTelegram />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/trigozodev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram />
                </a>
              </li>

              <li>
                <a
                  href="https://www.pinterest.com/trigozodev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImPinterest2 />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/trigozo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImWhatsapp />
                </a>
              </li>

              <li>
                <a
                  href="https://web.facebook.com/TRIGOZODEV"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImFacebook />
                </a>
              </li>
            </ul>

            <ul className={styles.menu}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutme"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("aboutme")}
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/resume"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("resume")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolios"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("portfolios")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("contact")}
                </NavLink>
              </li>
            </ul>

            <div className={styles.btns}>
              <button value="qh" onClick={handleOnclick} />
              <button value="en" onClick={handleOnclick} />
              <button value="es" onClick={handleOnclick} />
            </div>
          </nav>
        ) : (
          <nav
            open={open}
            location={location.pathname}
            className={`nav ${styles.nav}`}
          >
            <button className={styles.theme}>
              <DarkMood />
            </button>

            <figure className={styles.profile}>
              <img
                src="https://z-p3-scontent.flim4-2.fna.fbcdn.net/v/t39.30808-6/305278550_3250517231887618_4186015003750690835_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFCo9hKaTBmeEcikR-0PfiHd9xI92pe_Dx33Ej3al78PKVh4HEF3-M960rTgBTNlyCRhsJasgG7JwkAVF-Sg74E&_nc_ohc=C6FD5CwR7_oQ7kNvgE0V4qR&_nc_zt=23&_nc_ht=z-p3-scontent.flim4-2.fna&_nc_gid=A-QxXVW72m0_DPaXVPbzmX7&oh=00_AYCjfEsqANQmrQqhsUkrN7sqRxf0Jbuh79skitRKgiQMNQ&oe=66F940E5"
                alt="profile"
              />
            </figure>
            <h2>{t("name")}</h2>

            <ul className={styles.socials}>
              <li>
                <a href="https://t.me/trigozodev" target="_blank" rel="noreferrer">
                  <BsTelegram />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/trigozodev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram />
                </a>
              </li>

              <li>
                <a
                  href="https://www.pinterest.com/trigozodev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImPinterest2 />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/trigozo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImWhatsapp />
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io//"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImFacebook />
                </a>
              </li>
            </ul>

            <ul className={styles.menu}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutme"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("aboutme")}
                </NavLink>
              </li>

              <li>
                <Link
                  to="/resume"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("resume")}
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolios"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("portfolios")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={({ isActive }) => (isActive ? styles.active : "")}
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>

            <div className={styles.btns}>
              <button value="qh" onClick={handleOnclick}></button>
              <button value="en" onClick={handleOnclick}></button>
              <button value="es" onClick={handleOnclick}></button>
            </div>
          </nav>
        )}
      </Show>
    </>
  );
};

export default Navbar;

const Show = styled.div`
  @media (max-width: 768px) {
    nav {
      right: ${(props) => (props.open ? "0" : "-305px")};
    }
  }
`;
