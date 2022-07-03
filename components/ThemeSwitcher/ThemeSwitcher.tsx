import {FC, useState} from 'react';

import {THEME_MODE} from "../../utils/consts/consts";

import ThemeSwitcherProps from "./ThemeSwitcher.props";

import styles from './ThemeSwitcher.module.css'

const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
    const [activeTheme, setActiveTheme] = useState<string>(THEME_MODE.LIGHT_MODE);

    const toggleTheme = () => {
        activeTheme === THEME_MODE.LIGHT_MODE ? setActiveTheme(THEME_MODE.DARK_MODE) : setActiveTheme(THEME_MODE.LIGHT_MODE);
        window.localStorage.setItem('theme-mode', activeTheme);
    }

    return (
        <div className={styles['theme-switchers']}>
            <button className={activeTheme === THEME_MODE.DARK_MODE
                ? `${styles['theme-switcher']} ${styles['active-theme-switcher']}`
                : styles['theme-switcher']} onClick={toggleTheme
            }>
                <span className={styles.light}/>
            </button>

            <button className={activeTheme === THEME_MODE.LIGHT_MODE
                ? `${styles['theme-switcher']} ${styles['active-theme-switcher']}`
                : styles['theme-switcher']} onClick={toggleTheme
            }>
                <span className={styles.dark}/>
            </button>
        </div>
    )
};

export default ThemeSwitcher;
