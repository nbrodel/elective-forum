import React from 'react';
import Image from "next/image";
import Link from 'next/link'

import ThemeContext from "../../../contexts/ThemeProvider";

import BlackLogoGif from '../../../../public/gifs/cubo-black.gif';
import WhiteLogoGif from '../../../../public/gifs/cubo-white.gif';

import styles from './Logo.module.css';

const Logo = () => {
    return <ThemeContext.Consumer>{contextValue =>
        <div className={styles.logo}>
            <Link href='/'>
                <Image src={contextValue.isDarkTheme ? WhiteLogoGif : BlackLogoGif} />
            </Link>
        </div>
    }</ThemeContext.Consumer>
};

export default Logo;
