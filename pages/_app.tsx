import type {AppProps} from 'next/app'

import '../public/assets/styles/normalize.css'
import '../public/assets/styles/globals.css'

function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
