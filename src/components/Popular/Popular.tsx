import './Popular.scss'
import Card from '../Card/Card';
import figma from '../../img/figma.svg';
import sketch from '../../img/sketch.svg'
import VScode from '../../img/vs code.svg'
import notion from '../../img/notion.svg'
import slack from '../../img/slack.svg'
import invision from '../../img/invision.svg'

const Popular = () => {
  const CARDPARAM = [
    {
      img: figma,
      name: 'Figma',
      price: 'Free',
      additional: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      img: sketch,
      name: 'Sketch',
      price: 'Trial & Paid',
      additional: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      img: VScode,
      name: 'Visual Studio Code',
      price: 'Free',
      additional: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      img: notion,
      name: 'Notion',
      price: 'Free & Paid',
      additional: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      img: slack,
      name: 'Slack',
      price: 'Free & Paid',
      additional: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      img: invision,
      name: 'Invision',
      price: 'Free & Paid',
      additional: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ]

  return (
    <section className='popular'>
      <h2 className="popular__headed">
        Most Popular Tools
      </h2>
      <p className="popular__additional">
        Tools for the best Designers and Developers most popularly used in the world
      </p>
      <div className="popular__card-container">
        <Card {...CARDPARAM[0]} />
        <Card {...CARDPARAM[1]} />
        <Card {...CARDPARAM[2]} />
        <Card {...CARDPARAM[3]} />
        <Card {...CARDPARAM[4]} />
        <Card {...CARDPARAM[5]} />
      </div>
      <button className="popular__more">Load more</button>
    </section>
  );
}

export default Popular;
