import React from "react";
import styles from "../style/content.module.css"


export const Content = ({arrSongs}) => {
    return (
        <div className={styles.wrapper}>
            <table className={styles.container}>
                <tbody>
                <tr className={styles.homeTr}>
                    <th width={100}>Singer</th>
                    <th width={200}>Song</th>
                    <th width={80}>Ganre</th>
                    <th width={50}>Year</th>
                </tr>

                {
                    arrSongs.map((el) => {
                        return (
                            <tr className={styles.content} key={el.id}>
                                <td>{el.nameSinger}</td>
                                <td>{el.song}</td>
                                <td>{el.ganre}</td>
                                <td>{el.year}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>

    )
};