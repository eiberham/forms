import Head from 'next/head'

import styles from '../styles/Home.module.scss'

import Layout from '../components/layout'

import { Button } from 'antd'

export default function Home() {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="content-language" content="en" />
        <title>Forms</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" src="https://fonts.googleapis.com/css?family=Roboto" />
      </Head>

      <main>
        <h1>Online Digital Forms</h1>
        <div>
        Upload and configure your digital form fields online, see result in live view, fill forms out and get the outcome.
        </div>
        <Button type="primary" size="large">Start</Button>
      </main>

      <footer className={styles.footer}>
        @Forms 2020
      </footer>
    </Layout>
  )
}
