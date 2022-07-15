import React from 'react';
import Link from "next/link";

import UserSvg from "../svg-components/UserSvg/UserSvg";
import LogoutSvg from "../svg-components/LogoutSvg/LogoutSvg";

import ThemeContext from "../../contexts/ThemeProvider";
import {getThemeColor} from "../../utils/functions/functions";
import {ROUTES} from "../../utils/constants/constants";

import styles from './Profile.module.css'

const Profile = () => {
    return <ThemeContext.Consumer>{contextValue =>
        <div className={styles.profile}>
            <Link href={ROUTES.PROFILE}>
                <a>
                    <UserSvg color={getThemeColor(contextValue.isDarkTheme)} />
                </a>
            </Link>

            <Link href={ROUTES.LOGOUT}>
                <a>
                    <LogoutSvg color={getThemeColor(contextValue.isDarkTheme)} />
                </a>
            </Link>
        </div>
    }</ThemeContext.Consumer>
};

export default Profile;
