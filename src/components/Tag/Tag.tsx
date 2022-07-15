import React, {FC, MouseEventHandler} from 'react';
import clsx from 'clsx';

import ThemeContext from "../../contexts/ThemeProvider";

import {TagProps} from "./Tag.props";

import styles from './Tag.module.css'

const Tag:FC<TagProps> = ({currentTag, title, onClickTag}) => {
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        // @ts-ignore
        onClickTag(e.currentTarget.innerText)
    }

    return <ThemeContext.Consumer>{contextValue =>
        <button
            className={clsx(styles.tag, title === currentTag && styles.active, contextValue.isDarkTheme && styles.dark)}
            onClick={handleClick}
        >
            {title.toLowerCase()}
        </button>
    }</ThemeContext.Consumer>
};

export default Tag;
