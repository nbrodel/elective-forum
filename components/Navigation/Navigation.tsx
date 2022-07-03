import React, {FC} from 'react';
import Link from 'next/link'

import NavigationProps from "./Navigation.props";

import styles from './Navigation.module.css'

const Navigation : FC<NavigationProps> = () => {
    return (
        <nav className={styles.navigation}>
            <Link href='/'><a className={styles.navigation__link}>главная</a></Link>
            <Link href='/electives'><a className={styles.navigation__link}>список элективов</a></Link>
        </nav>
    );
};

export default Navigation;
