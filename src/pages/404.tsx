import React from 'react';
import Link from "next/link";

import MainLayout from "../layouts/MainLayout";
import Custom404 from "../components/ui-components/Custom404/Custom404";

import {ROUTES} from "../utils/constants/constants";

import styles from '../../public/styles/pages/404.module.css'

const Page404 = () => {
    return (
        <MainLayout>
            <Custom404 />

            <div className={styles['error-block']}>
                <div className={styles['error-message']}>кажется, ты пришел куда-то не туда</div>
                <Link href={ROUTES.HOME}>
                    <a>
                        <button className={styles['to-back-button']}>переходи на главную</button>
                    </a>
                </Link>
            </div>
        </MainLayout>
    );
};

export default Page404;
