import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendItem from "./FriendItem/FriendItem";


const Navbar = (props) => {
    let friendsElements =
        props.friends.map(f => <FriendItem avatar={f.avatarUrl}
                                           name={f.name} id={f.id}/>);

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.activeLink}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messgaes</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>

            <div className={s.empty}></div>
            <div className={s.nameFriends}>Friends</div>
            <div className={s.friends}>
                {friendsElements}
            </div>
        </nav>
    );
}

export default Navbar;