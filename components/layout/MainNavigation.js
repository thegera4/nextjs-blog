import Link from 'next/link'
import Logo from './logo'
import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/'> <Logo /> </Link>
      <nav>
        <ul>
          <li>
            <Link href='/posts'>All Posts</Link>
          </li>
          <li>
            <Link href='/contact'>Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation