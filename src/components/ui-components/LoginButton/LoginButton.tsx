import React, {FC} from 'react';
import clsx from "clsx";

import ThemeContext from "../../../contexts/ThemeProvider";

import LoginButtonProps from "./LoginButton.props";

import styles from './LoginButton.module.css'


const LoginButton: FC<LoginButtonProps> = ({title}) => {
    return <ThemeContext.Consumer>{contextValue =>
        <button
            className={clsx(styles.button, contextValue.isDarkTheme && styles.dark)}
        >
            {title}
        </button>
    }</ThemeContext.Consumer>
};

export default LoginButton;
