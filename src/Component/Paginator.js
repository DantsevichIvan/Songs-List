import React from "react";
import styles from "../style/paginator.module.css";
import cn from 'classnames'
import ReactPaginate from 'react-paginate';

export const Paginator = ({pages, currentPage, changeCurrentPage}) => {
    return (
        <div className={styles.container}>
            {
                pages.map((el) => {
                    return (
                        <span className={
                            cn({[styles.selectedPage]: currentPage === el}, styles.page)}
                              key={el}
                              onClick={e => changeCurrentPage(el)}
                        >{el}</span>
                    )
                })}
        </div>
    )
};