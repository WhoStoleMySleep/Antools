import './Card.scss'
import Button from '../Button/Button';
import add from '../../img/add.svg';

const Card = (props: {img: string, name: string, price: string, additional: string}) => {
  const checkButton = (event: any) => {
    const targetElement = event.target as HTMLElement;
    
    if (targetElement) {
      targetElement.classList.toggle('active')
    }
  }

  return (
    <div className='card'>
      <div className="card__wrapper">
        <div className='card__headed'>
          <img src={props.img} alt='' className='card__logo'/>
          <div className='card__headed-text'>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
          </div>
        </div>
        <div className='card__inform'>
          {props.additional}
        </div>
        <div className='card__buttons'>
          <button className='card__like' onClick={checkButton}>
            <div className='icon-heart'></div>
          </button>
          <button className='card__add' onClick={checkButton}>
            <img src={add} alt='' />
          </button>
          <Button padding='9px 35px' text='Visit' />
        </div>
      </div>
    </div>
  );
}

export default Card;
