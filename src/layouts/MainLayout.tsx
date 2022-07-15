import React, {FC, useEffect, useState} from 'react';
import Head from "next/head";

import Header from "../components/Header/Header";
import MobileMenu from "../components/MobileMenu/MobileMenu";

import useWindowSize from "../hooks/useWindowSize";
import {DEVICE} from "../utils/constants/constants";
import {detectDevice} from "../utils/functions/functions";

import MainLayoutProps from "./MainLayout.props";

import styles from './MainLayout.module.css'

const MainLayout: FC<MainLayoutProps>
    = ({
           children,
           title,
           keywords,
           description
       }) => {
    const [menuActive, setMenuActive] = useState<boolean>(false)
    const size = useWindowSize()

    const device = detectDevice(size)

    useEffect(() => {
        if (device === DEVICE.DESKTOP) {
            setMenuActive(false)
        }
    }, [device])

    const isAuth = true

    return (
        <>
            <Head>
                <title>{title || 'Форум элективов'}</title>
                <meta name="description" content={`` + description}/>
                <meta name="robots" content="index, follow"/>
                <meta name="keywords" content={keywords || ""}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>

            <div className={styles.container}>
                {device !== DEVICE.DESKTOP && isAuth
                    ? <MobileMenu isActive={menuActive} setIsActive={setMenuActive}/>
                    : <></>
                }

                <div className={menuActive && device !== DEVICE.DESKTOP ? `${styles['main-content']} ${styles['active-main-content']}` : styles['main-content']}>
                    <Header isAuth={isAuth} isActive={menuActive} setIsActive={setMenuActive}/>

                    {children}
                </div>

            </div>
        </>
    );
};

export default MainLayout;
