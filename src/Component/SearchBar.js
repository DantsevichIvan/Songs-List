import React from "react";
import styles from "../style/searchBar.module.css"


export const SearchBar = ({data, term, update}) => {

    const dataSearch = e => {
        const value = e.target.value.toLowerCase();

        const filter = data.filter(song => {
            return song[term].toLowerCase().includes(value)
        });
        update({
            data: filter,
            term: value
        })
    };


    return (
        <div className={styles.container}>
            <input type="text"
                   placeholder={`Search ${term}`}
                   onChange={dataSearch}
            />
        </div>
    )
};