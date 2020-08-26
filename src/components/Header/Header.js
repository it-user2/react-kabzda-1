import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://dynamic.brandcrowd.com/asset/logo/544765c8-0165-422e-80f1-a228867bdfd3/logo?v=4'></img>

            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>
                        {props.login} <button onClick={props.logout}>Logout</button>
                      </div>
                    : <NavLink to={'\login'}>Login</NavLink> }
            </div>
        </header>
    );
}

export default Header;