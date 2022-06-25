import './Brands.scss'
import microsoft from '../../img/microsoft-big.png';
import google from '../../img/google-big.png';
import slack from '../../img/slack-big.png';
import wordpress from '../../img/wordpress-big.png';

const Brands = () => {
  return (
    <section className='brands'>
      <h3 className="brands__text">
        Trusted more than 150+ brand
      </h3>
      <div className="brands__brand">
        <img src={microsoft} alt="" className="brands__microsoft" />
        <img src={google} alt="" className="brands__google" />
        <img src={slack} alt="" className="brands__slack" />
        <img src={wordpress} alt="" className="brands__wordpress" />
      </div>
    </section>
  );
}

export default Brands;
