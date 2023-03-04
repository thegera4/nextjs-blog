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
      <h1>Hola, Soy Gerardo</h1>
      <p>
        Soy un desarrollador fullstack de México. En este blog vas a encontrar artículos sobre
        diferentes tecnologías que encuentro interesantes o que me han ayudado como programador.
      </p>
    </section>
  )
}

export default Hero