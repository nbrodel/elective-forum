import type {AppProps} from 'next/app'
import {Provider} from "mobx-react";

import {ThemeProvider} from "../contexts/ThemeProvider";
import AuthStore from "../store/AuthStore";
import TagStore from "../store/TagStore";

import '../../public/styles/normalize.css'
import '../../public/styles/globals.css'

function MyApp({Component, pageProps}: AppProps) {
    const stores = {
        AuthStore,
        TagStore
    }

    return (
        <Provider {...stores}>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    )
}

export default MyApp
