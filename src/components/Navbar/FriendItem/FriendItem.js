import React from 'react';
import s from './FriendItem.module.css';
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.friend}>
            <div>
                <img className={s.avatar} src={props.avatar}/>
            </div>
            <div>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default FriendItem;