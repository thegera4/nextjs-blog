import Hero from '../components/HomePage/Hero'
import FeaturedPosts from '../components/HomePage/FeaturedPosts'

import { getFeaturedPosts } from '../lib/posts-util'

export default function HomePage(props) {
  const { posts } = props
  return (
    <>
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