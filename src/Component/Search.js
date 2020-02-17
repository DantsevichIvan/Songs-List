import React, {useEffect, useState} from "react";
import styles from "../style/search.module.css"
import {Select} from "./Select";


export const Search = ({allSongs, updateSort}) => {
    const [sortArr, setSortArr] = useState(['All', 'nameSinger', 'song', 'ganre', 'year']);
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(allSongs)
    }, [allSongs]);

    const sort = (event) => {
        const type = event.target.value;


        const sorted = [].slice.call(data).sort((a, b) => {

            if (a[type] < b[type]) {
                return -1
            }
            if (a[type] > b[type]) {
                return 1
            }
            return 0
        });

        updateSort({
            data: sorted,
            type
        })
    };


    return (
        <div className={styles.container}>
            <Select arr={sortArr} sort={sort}/>
        </div>
    )
};