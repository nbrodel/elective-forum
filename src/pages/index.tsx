import React, {useState} from "react";
import type {NextPage} from 'next'

import MainLayout from "../layouts/MainLayout";
import Main from '../components/Main/Main'

const Home: NextPage = () => {
    return (
        <MainLayout>
            <Main />
        </MainLayout>
    )
}

export default Home
