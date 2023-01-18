import AllPosts from "@/components/Posts/AllPosts";
import { getAllPosts } from "../../lib/posts-util";

export default function AllPostsPage(props) {
  const { posts } = props
  return (
    <AllPosts posts={posts} />
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
