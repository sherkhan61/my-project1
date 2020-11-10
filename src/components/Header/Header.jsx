import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
        alt="logo"
      />
      <div className={s.loginBlock}>
          { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  );
};

export default Header;