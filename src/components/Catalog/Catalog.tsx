import React, {ChangeEvent, FC, useState} from 'react';
import clsx from "clsx";

import Tags from "../Tags/Tags";
import Electives from "../Electives/Electives";
import Pagination from "../Pagination/Pagination.jsx";

import ThemeContext from "../../contexts/ThemeProvider";
import {arrayBetweenIndexes} from "../../utils/functions/functions";
import {IElective, ITag} from "../../types/types";

import {CatalogProps} from "./Catalog.props";

import styles from './Catalog.module.css'


const Catalog:FC<CatalogProps> = ({tags, electives}) => {
    const [currentTag, setCurrentTag] = useState('все')
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')

    const limit = 12
    const totalPages = Math.ceil(electives.length / limit)

    const handleChangeTag = (value: string) => {
        setCurrentTag(value)
        setCurrentPage(1)
    }

    const handleChangePage = (value: number) => {
        setCurrentPage(value)
    }

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value)
    }

    const filterArray = (electives: IElective[]) => {
        switch (currentTag) {
            default: return electives;
            case 'все': return electives;
            case currentTag: return electives.filter(el => {
                return el.tags?.find((tag: ITag) => tag.title?.toLowerCase() === currentTag.toLowerCase());
            })
        }
    }

    const searchElectives = (electives: IElective[]) => {
        if(searchValue) {
            return electives.filter(elective => {
                return elective.title?.toLowerCase().includes(searchValue.toLowerCase()) ||
                    elective.full_description?.toLowerCase().includes(searchValue.toLowerCase());
            })
        }

        return electives;
    }

    const filteredElectives = filterArray(electives)

    const searchedElectives = searchElectives(filteredElectives)

    const currentElectives = arrayBetweenIndexes(searchedElectives, currentPage, limit)

    return <ThemeContext.Consumer>{contextValue =>
        <div className={styles.elective__catalog}>
            <div>
                <div className={styles.elective__title}>список элективов</div>

                <div className={styles.catalog__header}>
                    <span className={styles.elective__direction}>направление</span>

                    <div className={styles['catalog__header-search']}>
                        <span>поиск</span>
                        <input className={clsx(styles['catalog__header-search-input'], contextValue.isDarkTheme && styles.dark)} onChange={handleSearch} />
                    </div>
                </div>
            </div>

            <Tags tags={tags} currentTag={currentTag} onChangeTag={handleChangeTag}/>

            <Electives electives={currentElectives} currentTag={currentTag} onChangeTag={handleChangeTag} />

            {
                searchedElectives.length > 0
                ? <Pagination currentPage={currentPage} totalPages={totalPages} onChangePage={handleChangePage} />
                : <></>
            }
        </div>
    }</ThemeContext.Consumer>
};

export default Catalog;
