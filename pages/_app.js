import Head from 'next/head'
import Script from 'next/script'
import '@/styles/globals.css'
import Layout from '@/components/layout/layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Gera's Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*<script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1515388210457824"
          crossorigin="anonymous"
        >
        </script>*/}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1515388210457824"
          strategy="lazyOnload"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
