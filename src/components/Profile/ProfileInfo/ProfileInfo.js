import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import userPhoto from '../../../assets/images/user.png';
import lookforajob from '../../../assets/images/lookforajob.png'
import looknotforajob from '../../../assets/images/looknotforajob.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return (
            <Preloader/>
        )
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.avatar}>
                    <img src={profile.photos.large ? profile.photos.large : userPhoto} className={s.avatarImage}/>
                </div>

                <p></p>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <p></p>

                <div className={s.avatarBlock}>
                    <div className={s.title}>Имя:</div>
                    <div className={s.text}>{profile.fullName}</div>
                </div>
                <div className={s.avatarBlock}>
                    <div className={s.title}>ID:</div>
                    <div className={s.text}>{profile.userId}</div>
                </div>
                <div className={s.avatarBlock}>
                    <div className={s.title}>Обо мне:</div>
                    <div className={s.text}>{profile.aboutMe}</div>
                </div>
                <div className={s.avatarBlock}>
                    <div className={s.title}>Ищу работу:</div>
                    <img src={profile.lookingForAJob ? lookforajob : looknotforajob} className={s.lookForAJob}/>
                </div>
                <div className={s.avatarBlock}>
                    <div className={s.title}>Описание поиска работы:</div>
                    <div className={s.text}>{profile.lookingForAJobDescription}</div>
                </div>

            </div>
        </div>
    );
}

export default ProfileInfo;