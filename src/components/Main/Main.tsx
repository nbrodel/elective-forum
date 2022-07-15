import React from 'react';
import Image from "next/image";
import {useRouter} from "next/router";

import ConfusedManSvg from "../svg-components/ManSvg/ConfusedManSvg/ConfusedManSvg";
import SadManSvg from "../svg-components/ManSvg/SadManSvg/SadManSvg";
import SmillingManSvg from "../svg-components/ManSvg/SmillingManSvg/SmillingManSvg";

import ThemeContext from "../../contexts/ThemeProvider";
import {getThemeColor} from "../../utils/functions/functions";
import {ROUTES} from "../../utils/constants/constants";

import BlackLookingGif from "../../../public/gifs/looking-ahead-black.gif";
import WhiteLookingGif from "../../../public/gifs/looking-ahead-white.gif";
import BlackEscadaGif from '../../../public/gifs/escada-black.gif'
import WhiteEscadaGif from '../../../public/gifs/escada-white.gif'
import styles from './Main.module.css'

const Main = () => {
    const router = useRouter()

    return <ThemeContext.Consumer>{contextValue =>
        <div className={styles.main}>
            <div className={styles.main__heading}>
                <h1 className={styles['main__heading-title']}>Форум элективов</h1>

                <div className={styles['main__heading-img']}>
                    <Image src={contextValue.isDarkTheme ? WhiteLookingGif : BlackLookingGif} />
                </div>
            </div>

            <div className={styles.main__descriptions}>
                <p className={styles.main__description}>
                    стандартное описание получаемых навыков при выборе того или иного электива зачастую не позволяет понять полную картину подачи и атмосферы электива. мы читаем многообещающие описания с непонятными терминами и все равно не можем определиться с выбором.
                </p>

                <ConfusedManSvg color={getThemeColor(contextValue.isDarkTheme)} />

                <SadManSvg color={getThemeColor(contextValue.isDarkTheme)} />

                <p className={styles.main__description}>
                    так, как сделать максимально полезный выбор и не почувствовать себя разочарованным после посещения курса электива? нам остается лично расспросить у других студентов, но рискуем получить поверхностный и односложный ответ.
                </p>

                <p className={styles.main__description}>
                    таким образом возникла идея создать платформу форума элективов, которая решит дилемму выбора при помощи живых отзывов заинтересованных студентов
                </p>

                <SmillingManSvg color={getThemeColor(contextValue.isDarkTheme)} />
            </div>

            <div className={styles.main__footer}>
                <div className={styles['main__footer-image']}>
                    <Image src={contextValue.isDarkTheme ? WhiteEscadaGif : BlackEscadaGif} />
                </div>

                <button className={`${styles['main__footer-button']} ${styles.dark}`} onClick={() => router.push(ROUTES.ELECTIVES)}>перейти к элективам</button>

                <div className={`${styles['main__footer-image']} ${styles.revert}`}>
                    <Image src={contextValue.isDarkTheme ? WhiteEscadaGif : BlackEscadaGif} />
                </div>
            </div>
        </div>
    }</ThemeContext.Consumer>
};

export default Main;
