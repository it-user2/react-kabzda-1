import React, {useEffect, useState} from "react";
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

/*
    let sateWithSetState = useState(false);
    let editMode = sateWithSetState[0];
    let setEditMode = sateWithSetState[1];

    Вместо этого напишем через ДЕСТРУКТУРИРОВАННОЕ ПРИСВАИВАНИЕ:
*/
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    // функция, переданная в хук useEffect будет вызвана,
    // когда компонента отрисуется (аналог вызова метода componentDidUpdate)
    //=======
    // функция, переданная в хук useEffect будет вызвана, когда что-то изменится
    // указанное в массиве, прописанном после функции: [props.status]

    useEffect( () => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChanged = (event) => {
        setStatus(event.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>
                        {props.status || '------------'}
                    </span>
                </div>
            }

            {editMode &&
            <div>
                <input onChange={onStatusChanged}
                       autoFocus={true}
                       onBlur={deactivateEditMode}
                       value={status}
                />
            </div>
            }

        </div>
    )
}

export default ProfileStatusWithHooks;