import React from 'react';

import styles from './Pagination.module.css'

const Pagination = ({currentPage, totalPages, onChangePage}) => {
    const changePage = (number) => {
        if(number !== 1 || number !== totalPages) {
            onChangePage(number)
        }
    }


    const getPageGroup = (countPages, currentPage) => {
        let pages = []

        pages.push(renderPaginationItem(1, currentPage))

        if(currentPage > 3)
            pages.push('...')

        for (let i = currentPage - 1; i <= countPages; i++) {
            if(i < 2)
                continue;

            pages.push(renderPaginationItem(i, currentPage))

            if(i >= currentPage + 1 && countPages - currentPage > 3) {
                pages.push('...')
                pages.push(renderPaginationItem(countPages, currentPage))
                break
            }
        }

        return pages
    }

    const renderPaginationItem = (page, currentPage) => {
        if (page === currentPage) {
            return page
        } else {
            return page
        }
    }

    const pageGroup = getPageGroup(totalPages, currentPage)

    const pages = pageGroup.map(page => {
        return <button
            className={currentPage === page ? styles['pagination-item-active'] : styles['pagination-item']}
            key={Math.random()}
            onClick={e => changePage(e.currentTarget.value)}
        >{page}</button>
    })

    return (
        <div className={styles.pagination}>
            <div className={styles.pagination__buttons}>
                {pages}
            </div>

            <div className={styles.pagination__arrows}>
                <button
                    className={currentPage === 1 ? styles['pagination-arrow-disabled'] : styles['pagination-arrow']}
                    onClick={changePage}
                >
                    <span className={styles['icon-arrow-previous']} />
                </button>
                <button
                    className={currentPage === totalPages ? styles['pagination-arrow-disabled'] : styles['pagination-arrow']}
                    onClick={changePage}
                >
                    <span className={styles['icon-arrow-next']} />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
