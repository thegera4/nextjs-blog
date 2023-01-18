import Head from 'next/head'
import '@/styles/globals.css'
import Layout from '@/components/layout/layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Gerardo's Blog</title>
        <meta name="viewport" content="idth=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
