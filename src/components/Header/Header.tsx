import React, {FC, useContext } from 'react';

import Logo from "../ui-components/Logo/Logo";
import Navigation from "../Navigation/Navigation";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Profile from "../Profile/Profile";

import ThemeContext from "../../contexts/ThemeProvider";
import useWindowSize from "../../hooks/useWindowSize";
import {detectDevice, getThemeColor} from "../../utils/functions/functions";
import {DEVICE} from '../../utils/constants/constants'

import HeaderProps from "./Header.props";

import BurgerSvg from "../svg-components/BurgerSvg/BurgerSvg";
import styles from './Header.module.css'

const Header: FC<HeaderProps> = ({isAuth, isActive, setIsActive}) => {
    const size = useWindowSize()

    const device = detectDevice(size)

    const themeContext: { isDarkMode?: boolean; toggleThemeHandler: () => void } = useContext(ThemeContext);

    function toggleThemeHandler(): void {
        themeContext.toggleThemeHandler();
    }

    return <ThemeContext.Consumer>{contextValue =>
        <div className={styles.header}>
            <div className={styles['header-item']}>
                {device !== DEVICE.DESKTOP && isAuth
                    ? <BurgerSvg color={getThemeColor(contextValue.isDarkTheme)} isActive={isActive} setIsActive={setIsActive} />
                    : <></>
                }

                <Logo/>

                {device === DEVICE.DESKTOP && isAuth
                    ? <Navigation/>
                    : <></>
                }
            </div>

            {device === DEVICE.DESKTOP && isAuth
                ? <div className={styles['header-item']}>
                    <ThemeSwitcher onThemeChange={toggleThemeHandler}/>

                    {isAuth
                        ? <Profile/>
                        : <></>
                    }
                </div>
                : <ThemeSwitcher onThemeChange={toggleThemeHandler} />
            }

        </div>
    }</ThemeContext.Consumer>
};

export default Header;
