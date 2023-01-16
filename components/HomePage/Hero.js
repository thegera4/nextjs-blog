import Image from 'next/image'
import classes from './Hero.module.css'

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image 
          src="/images/site/gerardo.png" 
          alt="Picture of me" 
          width={300} 
          height={300} 
        />
      </div>
      <h1>Hi, I'm Gerardo</h1>
      <p>
        I'm a fullstack web developer from Mexico. In this blog you will find articles about
        different technologies that I use or find interesting to learn.
      </p>
    </section>
  )
}

export default Hero