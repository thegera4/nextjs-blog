import Head from 'next/head'
import Hero from '../components/HomePage/Hero'
import FeaturedPosts from '../components/HomePage/FeaturedPosts'

import { getFeaturedPosts } from '../lib/posts-util'

export default function HomePage(props) {
  const { posts } = props
  return (
    <>
      <Head>
        <title>Bienvenido a mi blog</title>
        <meta 
          name="description" 
          content="Posteo sobre programacion en general, desarrollo, y cosas relacionadas." 
        />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1515388210457824"
          crossorigin="anonymous"
        >
        </script>
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts
    }
  }
}