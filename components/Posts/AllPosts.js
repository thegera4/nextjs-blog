import classes from './AllPosts.module.css'
import PostsGrid from './PostsGrid'

function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>Todos los posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  )
}

export default AllPosts