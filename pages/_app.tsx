import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Head from "next/head"
import Layout from '../components/Layout'

import { Global, css } from '@emotion/react'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/fvz2tlb.css" />
      </Head>
      <Layout>
          <Global
          styles={css`
            .font-serif {
              font-family: parisine-std-narrow, sans-serif;
              font-weight: 700;
              font-style: normal;
            }
            .font-serif-italic {
              font-family: parisine-std-clair, sans-serif;
              font-weight: 400;
              font-style: italic;
            }
            .font-cochin {
              font-family: ltc-nicholas-cochin-pro, sans-serif;
              font-weight: 400;
              font-style: normal;
            }
          `}
        />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
