import React, {Dispatch, FC, SetStateAction} from 'react';

import useWindowSize from "../../hooks/useWindowSize";
import {DEVICE} from "../../utils/consts/consts";
import {detectDevice} from "../../utils/functions/functions";

import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Profile from '../Profile/Profile'

import styles from "./MobileMenu.module.css";
import Navigation from "../Navigation/Navigation";


interface Props {
    isActive?: boolean,
    setIsActive: Dispatch<SetStateAction<boolean>>
}

const MobileMenu : FC<Props> = ({isActive, setIsActive}) => {
    const size = useWindowSize()

    const device = detectDevice(size)

    return (
        <div className={isActive && device !== DEVICE.DESKTOP ? `${styles.menu} ${styles['active-menu']}` : styles.menu}>
            <button className={styles['cancel-icon']} onClick={() => setIsActive(!isActive)} />

            <div className={styles.menu__items}>
                <Navigation />

                <ThemeSwitcher />

                <Profile />
            </div>
        </div>
    );
};

export default MobileMenu;
