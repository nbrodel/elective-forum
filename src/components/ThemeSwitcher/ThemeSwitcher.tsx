import {FC} from 'react';

import ThemeContext from "../../contexts/ThemeProvider";

import ThemeSwitcherProps from "./ThemeSwitcher.props";

import styles from './ThemeSwitcher.module.css'
import clsx from "clsx";


const ThemeSwitcher: FC<ThemeSwitcherProps> = ({onThemeChange}) => {
    return <ThemeContext.Consumer>{contextValue =>
        <div className={styles['theme-switchers']}>
            <button
                className={clsx(styles['theme-switcher'], !contextValue.isDarkTheme && styles['active-theme-switcher'], contextValue.isDarkTheme && styles.dark)}
                onClick={onThemeChange}
            >
                <span className={clsx(styles['light-theme'], contextValue.isDarkTheme && styles.dark)} />
            </button>

            <button
                className={clsx(styles['theme-switcher'], contextValue.isDarkTheme && [styles['active-theme-switcher'], styles.dark])}
                onClick={onThemeChange}
            >
                <span className={clsx(styles['dark-theme'], contextValue.isDarkTheme && styles.dark)} />
            </button>
        </div>
    }</ThemeContext.Consumer>
};

export default ThemeSwitcher;
