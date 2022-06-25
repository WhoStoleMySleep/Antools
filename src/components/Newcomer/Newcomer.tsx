import './Newcomer.scss'
import Button from "../Button/Button";
import Card from '../Card/Card';
import zeplin from '../../img/zeplin.png'
import phpstorm from '../../img/phpstorm.png'
import toolbox from '../../img/toolbox.png'
import procreate from '../../img/procreate.png'

const Newcomer = () => {
  return (
    <section className='newcomer'>
      <div className="newcomer__text-col">
        <h2 className="newcomer__headed">Newcomer Tools</h2>
        <p className="newcomer__additional">
          Wow! see the latest update of the most recommended tools from reliable designers and developers
        </p>
        <Button padding={"15.5px 40px"} text={"Explore more"} />
      </div>
      <div className="newcomer__cards">
        <Card img={zeplin} name={'Zeplin'} price={'Free & Paid'} additional={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
        <Card img={phpstorm} name={'PHPStorm'} price={'Free'} additional={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
        <Card img={toolbox} name={'Toolbox'} price={'Free'} additional={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
        <Card img={procreate} name={'Procreate'} price={'Paid'} additional={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
      </div>
    </section>
  );
}

export default Newcomer;
