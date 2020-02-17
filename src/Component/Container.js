import React, {useState} from "react";
import {Content} from "./Content";
import {Search} from "./Search";
import styles from "../style/container.module.css"


export const Container = ({arrSongs, allSongs,updateSort}) => {

    return (
        <div className={styles.container}>
            <Content arrSongs={arrSongs} />
            <Search
                allSongs={allSongs}
                updateSort={updateSort}/>
        </div>
    )
};