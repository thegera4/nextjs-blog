import Hero from '../components/HomePage/Hero'
import FeaturedPosts from '../components/HomePage/FeaturedPosts'

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React Framework for Production - it makes building fullstack React apps a breeze and ships with built-in SSR and SSG.',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React Framework for Production - it makes building fullstack React apps a breeze and ships with built-in SSR and SSG.',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React Framework for Production - it makes building fullstack React apps a breeze and ships with built-in SSR and SSG.',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React Framework for Production - it makes building fullstack React apps a breeze and ships with built-in SSR and SSG.',
    date: '2022-02-10'
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  )
}
