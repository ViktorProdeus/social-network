import React, { ChangeEvent, useState } from 'react';
import s from './ProfileInfo.module.css';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatus = (props: PropsType) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }


    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={s.status}>
            {!editMode &&
            <div onDoubleClick={activateEditMode}>
                <b>status: </b><span>{props.status || ' -empty-'}</span>
            </div>
            }

            {editMode &&
            <div>
                <input
                    onChange={onStatusChange}
                    onBlur={deactivateEditMode}
                    autoFocus
                    value={status}
                />
            </div>
            }

        </div>
    );
}

export default ProfileStatus;