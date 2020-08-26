import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    if (props.my) {
        return (
            <div className={s.messageBlock1}>
                <div className={s.icon}>
                    <img className={s.avatar}
                        src='https://cdn0.iconfinder.com/data/icons/ringtone-music-instruments/512/message-comment-dialog-speach-text-blue-round-512.png'/>
                </div>
                <div className={s.message}>
                    {props.message}
                </div>
            </div>
        );
    } else {
        return (
            <div className={s.messageBlock2}>
                <div className={s.message}>
                    {props.message}
                </div>
                <div className={s.icon}>
                    <img className={s.avatar}
//                         src='https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-round-2/254000/103-512.png'/>
                           src='https://lh3.googleusercontent.com/-W4_-RfoF-Gj1Heb6ZePq4SbNThOn8cPb9NCOiV0HuBrzSU-V2YHkTO4rz6wUOO1tY0'/>
                </div>
            </div>
        );
    }
}

export default Message;