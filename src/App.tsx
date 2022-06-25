import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Popular from './components/Popular/Popular';
import Brands from './components/Brands/Brands';
import Newcomer from './components/Newcomer/Newcomer';
import Testimonial from './components/Testimonial/Testimonial';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';

const App = () => {
  const screenHeight = window.screen.height
  
  useEffect(() => {
    if (!sessionStorage.getItem('doneAnimate')) {
      const visibled = () => {
        const containers = [
          document.querySelector('.popular'),
          document.querySelector('.newcomer'),
          document.querySelector('.join'),
        ]
        const positions = [
          [containers[0]!.getBoundingClientRect().y],
          [containers[1]!.getBoundingClientRect().y],
          [containers[2]!.getBoundingClientRect().y],
        ]
        for (let index = 0; index < containers.length; index += 1) {
          if (containers[index]) {
            if (+positions[index] - screenHeight <= -240 && !containers[index]!.classList.contains('visibled')) {
              containers[index]!.classList.add('visibled')
            }
            if (containers[index]!.classList.contains('visibled') && index === containers.length - 1) {
              window.removeEventListener('scroll', visibled)
              sessionStorage.setItem('doneAnimate', '1');
            };
          }
        }
      }
  
      window.addEventListener('scroll', visibled)
    } else {
      const containers = [
        document.querySelector('.popular'),
        document.querySelector('.newcomer'),
        document.querySelector('.join'),
      ]
      const transitionElems = [
        [
          document.querySelector('.hero__headed') as HTMLElement,
          document.querySelector('.hero__additional') as HTMLElement,
          document.querySelector('.hero__label') as HTMLElement,
        ],
        [
          document.querySelector('.popular__headed') as HTMLElement,
          document.querySelector('.popular__additional') as HTMLElement,
          document.querySelector('.popular__card-container') as HTMLElement,
        ],
        [
          document.querySelector('.newcomer__headed') as HTMLElement,
          document.querySelector('.newcomer__additional') as HTMLElement,
          document.querySelector('.newcomer__cards') as HTMLElement,
        ],
        [
          document.querySelector('.join__headed') as HTMLElement,
          document.querySelector('.join__additional') as HTMLElement,
          document.querySelector('.join__label') as HTMLElement,
        ],
      ]

      for (let index = 0; index < transitionElems.length; index += 1) {
        for (let indexArrElems = 0; indexArrElems < transitionElems[index].length; indexArrElems += 1) {
          if (transitionElems[index][indexArrElems]) {
            transitionElems[index][indexArrElems]!.style.transition = 'none';
          }
        }
      }
      
      for (let index = 0; index < containers.length; index += 1) {
        if (containers[index]) {
          containers[index]!.classList.add('visibled');
        }
      }
    }
  })
  
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Popular />
        <Brands />
        <Newcomer />
        <Testimonial />
        <Join />
      </main>
      <Footer />
    </>
  );
}

export default App;
