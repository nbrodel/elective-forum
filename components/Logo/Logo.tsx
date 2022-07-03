import React from 'react';
import Image from "next/image";
import Link from 'next/link'

import LogoImage from '../../public/assets/gifs/cubo_black.gif';

import styles from './Logo.module.css';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link href='/'>
                <Image src={LogoImage} />
            </Link>
        </div>
    );
};

export default Logo;
