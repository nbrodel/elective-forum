import React, {FC} from 'react';
import Image from "next/image";
import clsx from "clsx";

import ThemeContext from "../../../contexts/ThemeProvider";

import LoginBlockProps from "./LoginBlock.props";

import BlackEyeGif from "../../../../public/gifs/eye-black.gif";
import WhiteEyeGif from "../../../../public/gifs/eye-white.gif";
import styles from './LoginBlock.module.css'

const LoginContainer: FC<LoginBlockProps> = ({children}) => {
    return <ThemeContext.Consumer>{contextValue =>
        <div className={clsx(styles.block, contextValue.isDarkTheme && styles.dark) }>
            <div className={styles.block_inner}>
                <div className={styles.logo_block}>
                    <Image src={contextValue.isDarkTheme ? WhiteEyeGif : BlackEyeGif} alt='logo'/>
                </div>

                {children}
            </div>
        </div>
    }</ThemeContext.Consumer>
};

export default LoginContainer;
