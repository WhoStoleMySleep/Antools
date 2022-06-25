import './Logo.scss'

import logoImg from '../../img/logo.svg'

const Logo = () => {
  return (
    <img src={logoImg} alt='Logo' className='logo' />
  );
}

export default Logo;
