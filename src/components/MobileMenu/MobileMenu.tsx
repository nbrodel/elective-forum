import React, {FC} from 'react';

import Navigation from "../Navigation/Navigation";
import CancelSvg from "../svg-components/CancelSvg/CancelSvg";
import Profile from '../Profile/Profile'

import useWindowSize from "../../hooks/useWindowSize";
import {DEVICE} from "../../utils/constants/constants";
import {detectDevice, getThemeColor} from "../../utils/functions/functions";
import ThemeContext from "../../contexts/ThemeProvider";

import {MobileMenuProps} from "./MobileMenu.props";

import styles from "./MobileMenu.module.css";
import LineSvg from "../svg-components/LineSvg/LineSvg";

const MobileMenu : FC<MobileMenuProps> = ({isActive, setIsActive}) => {
    const size = useWindowSize()

    const device = detectDevice(size)

    return <ThemeContext.Consumer>{contextValue =>
        <div className={isActive && device !== DEVICE.DESKTOP ? `${styles.menu} ${styles['active-menu']}` : styles.menu}>
            <CancelSvg color={getThemeColor(contextValue.isDarkTheme)} isActive={isActive} setIsActive={setIsActive} />

            <div className={styles.menu__items}>
                <Navigation />

                <LineSvg color={getThemeColor(contextValue.isDarkTheme)} />

                <Profile />

                <span>4 новых уведомлений</span>
            </div>
        </div>
    }</ThemeContext.Consumer>
};

export default MobileMenu;
