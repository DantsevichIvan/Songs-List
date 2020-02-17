import styles from "../style/search.module.css";
import React from "react";

export const Select = ({arr, sort}) => {
    return (
        <div className={styles.selects}>
            <span>Sort:</span>
            <select name="" id="" className={styles.select} onChange={event => sort(event)}>
                {
                    arr.map((option) => {
                        return (
                            <option value={option} key={option} onChange={() => sort(option)}>{option}</option>
                        )
                    })
                }
            </select>
        </div>
    )
};