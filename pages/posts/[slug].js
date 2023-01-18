import Head from "next/head";
import PostContent from "@/components/Posts/PostDetail/PostContent";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

export default function PostDetailPage(props) {
  const { post } = props;
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  )
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData
    },
    revalidate: 600
  }
}

export async function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map(filename => filename.replace(/\.md$/, ''));

  return {
    paths: slugs.map(slug => ({ params: { slug: slug } })),
    fallback: false
  }
}
