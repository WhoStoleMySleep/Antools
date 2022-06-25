import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import burger from '../../img/burger.svg'
import './Header.scss';

const Header = () => {
  const openMenu = () => {
    const header: HTMLElement | null = document.querySelector('.header');

    if (header) {
      header.classList.toggle('active')
    }
  }

  return (
    <header className="header">
      <div className="header__wrapper">
        <nav className="header__menu">
          <Logo />
          <img className="header__burger" src={burger} alt="menu" onClick={openMenu}/>
          <ul className="header__link-list js-header__link-list">
            <li className="header__link">
              <a className="header__about-me" href="/mock-address/Home">Home</a>
            </li>
            <li className="header__link">
              <details className="header__select-container">
                <summary className="header__select-headed">Categories</summary>
                <ul className="header__expandable">
                  <li className="header__expandable-elem">
                    <a className="header__expandable-link" href="/mock-address/">Design</a>
                  </li>
                  <li className="header__expandable-elem">
                    <a className="header__expandable-link" href="/mock-address/">Development</a>
                  </li> 
                </ul>
              </details>
            </li>
            <li className="header__link">
              <a className="header__job-opening" href="/mock-address/My-Collections">My Collections</a>
            </li>
            <li className="header__link">
              <a className="header__news" href="/mock-address/Blog">Blog</a>
            </li> 
          </ul>
          <ul className="header__reg-login">
            <li>
              <Button padding='12px 28px' mod='login' text='Login' />
            </li>
            <li>
              <Button padding='12px 28px' mod='registration' text='Sign Up' />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;