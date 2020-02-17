import React, {useCallback, useEffect, useState} from 'react';
import {Container} from "./Component/Container";
import {Paginator} from "./Component/Paginator";
import {Quartity} from "./Component/Quartity";
import {SearchBar} from "./Component/SearchBar";
import './App.css';

function App() {
    const [arrSongs, setArrSongs] = useState([]);
    const [allSongs, setAllSongs] = useState([]);
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentAmount, setCurrentAmount] = useState(5);
    const [quartity] = useState([5, 10, 25, 50, 100]);


    const getSongs = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:3001/songs`);
            const data = await fetch(`http://localhost:3001/songs?_page=${currentPage}&_limit=${currentAmount}`);
            const allData = await response.json();
            countPage(allData);
            const songs = await data.json();
            await setAllSongs(allData);
            await setArrSongs(songs);
        } catch (e) {
        }
    }, [currentPage, currentAmount]);

    const countPage = (allData) => {
        const pagesCount = Math.ceil(allData.length / currentAmount);
        const sumPages = [];
        for (let i = 1; i <= pagesCount; i++) {
            sumPages.push(i)
        }
        setPages(sumPages)
    };

    useEffect(() => {
        getSongs();
    }, [getSongs]);

    const changeCurrentPage = (page) => {
        setCurrentPage(page);
        setArrSongs([])
    };
    const changeQuartityPage = (pageCount) => {
        setCurrentAmount(pageCount);
        setArrSongs([])
    };

    function initialArr(data) {
        return data.slice(0, 5);
    }

    const update = ({data, term}) => {
        if (term === '') {
            setArrSongs(initialArr(data));
            setCurrentPage(1)
        } else {
            setArrSongs(data);
        }
    };

    const updateSort = ({data, type}) => {
        if (type === 'All') {
            setArrSongs(initialArr(data));
            setCurrentPage(1)
        } else {
            setArrSongs(data);
        }
    };

    return (
        <div className="App">
            <div className="Container">
                <Container
                    arrSongs={arrSongs}
                    allSongs={allSongs}
                    updateSort={updateSort}/>
            </div>
            <div className="SearchBar">
                <SearchBar data={allSongs} term={'nameSinger'} update={update}/>
                <SearchBar data={allSongs} term={'ganre'} update={update}/>
                <SearchBar data={allSongs} term={'year'} update={update}/>
            </div>
            <div className="Navigation">
                <Paginator pages={pages} currentPage={currentPage} changeCurrentPage={changeCurrentPage}/>
                <Quartity quartity={quartity} currentAmount={currentAmount} changeQuartityPage={changeQuartityPage}/>
            </div>
        </div>
    );
}

export default App;


