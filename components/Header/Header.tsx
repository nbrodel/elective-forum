import React, {FC} from 'react';

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import Profile from "../Profile/Profile";

import useWindowSize from "../../hooks/useWindowSize";
import {detectDevice} from "../../utils/functions/functions";
import {DEVICE} from '../../utils/consts/consts'

import HeaderProps from "./Header.props";

import styles from './Header.module.css'

const Header: FC<HeaderProps> = ({isAuth, isActive, setIsActive}) => {
    const size = useWindowSize()

    const device = detectDevice(size)

    return (
        <div className={styles.header}>
            <div className={styles['header-item']}>
                {device !== DEVICE.DESKTOP
                    ? <button className={styles['burger-btn']} onClick={() => {
                        setIsActive(!isActive)
                    }}/>
                    : <></>
                }

                <Logo/>

                {device === DEVICE.DESKTOP && isAuth
                    ? <Navigation/>
                    : <></>
                }
            </div>

            {device === DEVICE.DESKTOP
                ? <div className={styles['header-item']}>
                    <ThemeSwitcher/>

                    {isAuth
                        ? <Profile/>
                        : <></>
                    }
                </div>
                : <></>
            }

        </div>
    );
};

export default Header;
