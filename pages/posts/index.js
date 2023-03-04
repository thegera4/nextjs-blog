import Head from "next/head";
import AllPosts from "@/components/Posts/AllPosts";
import { getAllPosts } from "../../lib/posts-util";

export default function AllPostsPage(props) {
  const { posts } = props
  return (
    <>
      <Head>
        <title>Todos los Posts</title>
        <meta
          name="description"
          content="Una lista de todos los posts de este sitio!"
        />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1515388210457824"
          crossorigin="anonymous"
        >
        </script>
      </Head>
      <AllPosts posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts
    }
  }
}
