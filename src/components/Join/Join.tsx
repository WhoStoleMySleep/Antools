import Button from '../Button/Button';
import './Join.scss'

const Join = () => {
  return (
    <section className='join'>
      <h2 className="join__headed">Become a contributor?</h2>
      <p className="join__additional">Join us and get tips & tricks to become a great Designer and Developer</p>
      <label className='join__label'>
        <input type='text' className='join__input' placeholder='Enter your email...' />
        <Button padding='12px 35.81px' text='Join Us' />
      </label>
    </section>
  );
}

export default Join;
