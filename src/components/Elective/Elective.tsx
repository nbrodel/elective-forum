import React, {FC} from 'react';
import styles from './Elective.module.css'
import Link from 'next/link'
import Tag from '../Tag/Tag';
import ThemeContext from "../../contexts/ThemeProvider";
import clsx from "clsx";
import {ElectiveProps} from "./Elective.props";


const Elective:FC<ElectiveProps> = ({electiveId, authors, short_description, tags, title, minor_title, onChangeTag}) => {
    const sortedTags = tags.sort((a: string, b: string) => {
        if (a.length > b.length) {
            return -1;
        }
        if (a.length < b.length) {
            return 1;
        }
        return 0;
    })

    const author = authors.map((el: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
        return <div className={styles.card__author} key={Math.random()}>
            <span className={styles['card__author-name']}>{el.name}</span>
            <span className={styles['card__author-description']}>{el.description}</span>
        </div>
    })

    const handleChangeTag = (value: string) => {
        onChangeTag(value)
    }

    return <ThemeContext.Consumer>{contextValue =>
        <div className={clsx(styles.card, contextValue.isDarkTheme && styles.dark)}>
            <div className={styles.card__inner} key={electiveId}>
                <div className={clsx(styles.card__description, contextValue.isDarkTheme && styles.dark)}>
                    <Link href={`/electives/${electiveId}`}>
                        <span className={styles['card__description-title']}>
                            <a>{title.toLowerCase()}</a>
                        </span>
                    </Link>

                    <p className={styles['card__description-text']}>{short_description}</p>
                </div>

                <div className={styles.card__tags}>
                    {sortedTags.map((tag: { title: string; }) => {
                        // @ts-ignore
                        return <Tag key={Math.random()} currentTag={''} title={tag.title.toLowerCase()} onClickTag={handleChangeTag} />
                    })}
                </div>

                <div key={Math.random()} className={styles.card__authors}>
                    <span className={styles['card__authors-title']}>авторы курса: </span>
                    {author}
                </div>

                {minor_title
                    ? <div className={clsx(styles.card__minor, contextValue.isDarkTheme && styles.dark)}>
                    <span>minor:</span> {minor_title}
                </div> : <></>}

            </div>
        </div>
    }</ThemeContext.Consumer>
};

export default Elective;
