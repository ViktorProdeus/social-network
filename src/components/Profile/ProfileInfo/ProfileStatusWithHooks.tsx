import React, { ChangeEvent, useEffect, useState } from 'react';
import s from './ProfileInfo.module.css';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatus = (props: PropsType) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

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
            <p onDoubleClick={activateEditMode}>
                <b>status: </b><span>{props.status || ' -empty-'}</span>
            </p>
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