import { useEffect } from 'react';
import Button from '../Button/Button';
import './Hero.scss'

const Hero = () => {

  const init = () => {
    const hero = document.querySelector('.hero')

    if (hero) {
      hero.classList.add('init')
    }
  }

  useEffect(() => init());

  return (
    <section className='hero'>
      <div className="hero__wrapper">
        <h1 className='hero__headed'>Awesome tools for Designer & Developer<span>.</span></h1>
        <p className='hero__additional'>Antool is a web collection of information on paid or free Design and Development tools</p>
        <label className='hero__label'>
          <input type='text' className='hero__input' placeholder='find more than 430+ tools...' />
          <Button padding='12px 36.12px' text='Search' />
        </label>
        <div className="hero__copyright">
          <div className='icon-facebook-f'></div>
          <div className='icon-instagram'></div>
          <div className='icon-twitter'></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
