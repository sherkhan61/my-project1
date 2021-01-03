import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import samurai from "../../assets/images/samurai.png";



const Header: React.FC<MapStatePropsType & DispatchPropsType> = (props) => {
  return (
    <header className={s.header}>
      <img
        className="logo"
        src={samurai}
        alt="logo"
      />
      <div className={s.loginBlock}>
          { props.isAuth
              ? <div>{props.login} <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  );
};

export default Header;


// types start
export type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
export type DispatchPropsType = {
    logout: () => void
}
// types end


