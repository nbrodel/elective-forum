import React from 'react';
import Link from "next/link";
import Image from "next/image";

import ThemeContext from "../../../contexts/ThemeProvider";

import White404Gif from "../../../../public/gifs/404-white.gif";
import Black404Gif from "../../../../public/gifs/404-black.gif";

import styles from './Custom404.module.css'

const Custom404 = () => {
    return <ThemeContext.Consumer>{contextValue =>
        <div className={styles['error-gif']}>
            <Link href='/'>
                <Image src={contextValue.isDarkTheme ? White404Gif : Black404Gif} />
            </Link>
        </div>
    }</ThemeContext.Consumer>
};

export default Custom404;
