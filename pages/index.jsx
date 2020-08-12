import React from 'react'
import Head from 'next/head'

import { Button } from 'antd'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
  return (
    <React.StrictMode>
      <Layout>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="content-language" content="en" />
          <title>Forms</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" src="https://fonts.googleapis.com/css?family=Roboto" />
        </Head>
        <Header />
        <section className="slogan">
          <h1>Online Digital Forms</h1>
          <div className="slogan-text">
            Upload and configure your digital form fields online, see result in live view, fill forms out and get the outcome.
          </div>
          <Button type="primary" size="large">Start</Button>
        </section>
        <Footer />
      </Layout>
    </React.StrictMode>
  )
}
