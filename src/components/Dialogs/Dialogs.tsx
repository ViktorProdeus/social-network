import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <ul className={s.dialogsItems + ' ' + s.listReset}>
                <li className={s.dialog + ' ' + s.active}>Dimych</li>
                <li className={s.dialog}>Andrey</li>
                <li className={s.dialog}>Sveta</li>
                <li className={s.dialog}>Sasha</li>
                <li className={s.dialog}>Viktor</li>
                <li className={s.dialog}>Valera</li>
            </ul>

            <ul className={s.messages + ' ' + s.listReset}>
                <li className={s.message}>Hi!</li>
                <li className={s.message}>How is your it-camasutra?</li>
                <li className={s.message}>Yo</li>
            </ul>
        </div>
    )
}

export default Dialogs;
