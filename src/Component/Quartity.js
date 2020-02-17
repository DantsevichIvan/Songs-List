import React from "react";
import styles from "../style/quartity.module.css";
import cn from "classnames";

export const Quartity =({quartity,currentAmount,changeQuartityPage}) =>{
    return(
        <div className={styles.container}>
            {
                quartity.map((el) => {
                    return (
                        <span
                            className={cn({[styles.selectedAmount]:currentAmount === el},
                                styles.quartity)}
                            key={el}
                        onClick={event => changeQuartityPage(el) }>
                            {el}</span>
                    )
                })}
        </div>
    )
};