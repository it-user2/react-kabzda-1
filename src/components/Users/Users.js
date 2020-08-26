import React from 'react';
import styles from './Users.module.css'
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged,
              users, itemsToShow, ...props}) => {
    return (
        <div>
            <Paginator totalItemsCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       itemsToShow={itemsToShow}/>

            {users.map(u =>
                <User key={u.id}
                      user={u}
                      followingInProgress={props.followingInProgress}
                      unfollow={props.unfollow}
                      follow={props.follow}/>
            )}
        </div>
    )
}

export default Users;