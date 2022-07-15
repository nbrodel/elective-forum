import React, {FC} from 'react';
import Link from 'next/link'

import {ROUTES} from "../../utils/constants/constants";

import NavigationProps from "./Navigation.props";

import styles from './Navigation.module.css'

const Navigation : FC<NavigationProps> = () => {
    return (
        <nav className={styles.navigation}>
            <Link href={ROUTES.HOME}><a className={styles.navigation__link}>главная</a></Link>
            <Link href={ROUTES.ELECTIVES}><a className={styles.navigation__link}>список элективов</a></Link>
        </nav>
    );
};

export default Navigation;
