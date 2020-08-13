import React from 'react'
import PropTypes from 'prop-types'
import { RecoilRoot } from 'recoil'
import '../styles/styles.scss'

function MyApp({ Component, pageProps }) {
    return (
        <RecoilRoot>
            <Component {...pageProps} />
        </RecoilRoot>
    )
}

export default MyApp
