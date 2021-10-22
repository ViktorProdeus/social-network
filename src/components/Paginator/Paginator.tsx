import React from 'react';
import s from './Paginator.module.css'

type PropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

const Paginator = (props: PropsType) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (

        <div className={s.paginator}>
            {pages.map((p, index) => {
                    return (
                        <span
                            key={index}
                            className={(props.currentPage === p) ? `${s.current} ${s.page}` : s.page}
                            onClick={() => {props.onPageChanged(p)}}
                        >
                            {p}
                        </span>
                    )
                }
            )}
        </div>
    )
}


export default Paginator;