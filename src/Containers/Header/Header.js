import classes from './Header.module.css';
import person from './icons/person.png';
import cart from './icons/cart.png';
import mail from './icons/mail.png';
import HeaderSection from '../../Components/HeaderSection/HeaderSection';
import logo from './icons/logo.png';
import arrowBottom from './icons/arrowBottom.png';
import searchIcon from './icons/searchicon.png';
import heart from './icons/heart.png';
import headerSectionClasses from '../../Components/HeaderSection/HeaderSection.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <div>
        <div className={classes.header__contact}>
          <HeaderSection imgSrc={mail} link={{
              text: "shoguncatalog30904@gmail.com",
              url: "#"
            }}/>
        </div>
        <div className={classes.header__registerContainer}>
          <p className={headerSectionClasses.headerSection__link}>English</p>
          <div className={classes.header__registerContainer__registrationLogin}>
            <div>
              <HeaderSection imgSrc={person} link={{
                  text: "Register",
                  url: "#"
                }}/>
            </div>
            <HeaderSection link={{text:"Sign in", url:"#"}}/>
          </div>
        </div>
      </div>
      <div className={classes.header__searchSectionContainer}>
        <img src={logo}/>
        <div className={classes.header__search}>
          <div>
            <input placeholder={"Search for courses..."}/>
            <span>All Categories <img src={arrowBottom} height={"15px"} width={"15px"}/></span>
          </div>
          <div>
            <img src={searchIcon} height={"20px"} width={"20px"}/>
          </div>
        </div>
        <div className={classes.header__wishlistSection}>
          <div>
            <img src={heart} height={"50px"} width={"50px"}/>
            <div>
              <a href={"#"}>Wishlist</a>
              <p>115</p>
            </div>
          </div>
          <div className={classes.header__cart}>
            <div>
              <img src={cart} height={"50px"} width={"50px"}/>
              <div className={classes.header__cartCircle}>
                <p>10</p>
              </div>
            </div>
            <div>
              <a href={"#"}>Cart</a>
              <p>$85</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
};

export default Header;
