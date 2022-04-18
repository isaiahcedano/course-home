import HeaderSection from '../../Components/HeaderSection/HeaderSection';
import logo from './icons/logo.png';
import arrowBottom from './icons/arrowBottom.png';
import {connect} from 'react-redux';
import globalActions from '../../Redux/actions/global';
import {useEffect} from 'react';
import Cart from '../Cart/Cart';
import './Header.css';
import {Outlet} from 'react-router-dom';
import {Link} from 'react-router-dom';

const mapStateToProps = state => ({
  cart: JSON.parse(localStorage.getItem("cart")) || state.changeCart,
});

const mapDispatchToProps = dispatch => ({
  addToCart: (item, quantity) => dispatch(globalActions.addToCart(item, quantity)),
  updateCart: (item, quantity) => dispatch(globalActions.updateCart(item, quantity)),
});



const Header = ({addToCart,
                updateCart,
                cart,
                products}) => {

  const headerLinks = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "FAQ",
      link: "/faq"
    },
    {
      title: "DMCA",
      link: "/dmca"
    },
    {
      title: "Request Course",
      link: "/request"
    }
  ]

  return (
    <>
      <header className="header">
        <div className="top_bar">
          <div className="container">
            <div className="row">
              <div className="col d-flex flex-row">
                <div className="top_bar_contact_item">
                  <div className="top_bar_icon">
                    <img
                      src="data:image/webp;base64,UklGRtAAAABXRUJQVlA4TMMAAAAvE0ADEJ8SEQzbto2cO8lOv4uPVhECzEzKPnS4680W7DLah+HPOFVKE4AIhAY00mxAjGTbtDXPtm3btvmx88/mIoWI/k9AZb7d6dxMa5LH4tBspiyP/yI66/+3ceS1NGixHu/BwQUWf2G1hIxge/BAVUpKDSmAbXVwAtFnCzD1riHAqoRXHoHwr7jQkvzJF47ndPYvpeSBpmTAbYe0dMG2OmPcf/2o+t4nM+tJ7DVEc/8TH4qUwKgRciKte2cy0zzp3NoA"
                      alt=""
                      data-pagespeed-url-hash={719524515}
                      onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);"
                    />
                  </div>
                  <a href="mailto:coursehome22@gmail.com">coursehome22@gmail.com</a>
                </div>
                <div className="top_bar_content ml-auto">
                  <div className="top_bar_user">
                    <div className="user_icon">
                      <img
                        src="./Shop_files/user.svg"
                        alt=""
                        data-pagespeed-url-hash={367127946}
                        onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </div>
                    <div>
                      <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                        Register
                      </a>
                    </div>
                    <div>
                      <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                        Sign in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_main">
          <div className="container">
            <div className="row header_search_section">
              <div className="col-lg-2 col-sm-3 col-3 order-1">
                <div className="logo_container">
                  <div className="logo">
                    <img src={logo}/>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                  <Cart/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row main_nav">
          <div className="col">
            <div className="main_nav_content d-flex flex-row">
              <div className="main_nav_menu">
                <ul className="standard_dropdown main_nav_dropdown">
                  {
                    headerLinks.map(({title, link}) => <li>
                      <Link to={link}>
                        {title} <i className="fas fa-chevron-down" />
                      </Link>
                    </li>)
                  }
                </ul>
              </div>
              <div className="menu_trigger_container ml-auto">
                <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                  <div className="menu_burger">
                    <div className="menu_trigger_text">menu</div>
                    <div className="cat_burger menu_burger_inner">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page_menu">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page_menu_content">
                  <div className="page_menu_search">
                    <form action="https://preview.colorlib.com/theme/onetech/shop.html#">
                      <input
                        type="search"
                        required=""
                        className="page_menu_search_input"
                        placeholder="Search for products..."
                      />
                    </form>
                  </div>
                  <ul className="page_menu_nav">
                    <li className="page_menu_item">
                      <Link to="home">
                        Home <i className="fa fa-angle-down" />
                      </Link>
                    </li>
                    <li className="page_menu_item">
                      <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                        FAQ <i className="fa fa-angle-down" />
                      </a>
                    </li>
                    <li className="page_menu_item">
                      <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                        DMCA <i className="fa fa-angle-down" />
                      </a>
                    </li>
                    <li className="page_menu_item">
                      <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                        Request Course <i className="fa fa-angle-down" />
                      </a>
                    </li>
                    <li className="page_menu_item">
                      <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                        Contact <i className="fa fa-angle-down" />
                      </a>
                    </li>
                  </ul>
                  <div className="menu_contact">
                    <div className="menu_contact_item">
                      <div className="menu_contact_icon">
                        <img
                          src="data:image/webp;base64,UklGRvYAAABXRUJQVlA4TOoAAAAvE0ADEJ9iIG2b+De97Tcx//PPsG3byLmT7PS7OuDLoCiEAAKAAAAwGAyCAmwcgGIALhYeBhsCAFEsiECI4gGIAPwIBmIeRQGKfAoQCH5GEQAgRCBAEWxAjGTbtDXPtm3btvmx88/mIoWI/k9AZb7d6dxMa5LH4tBspiyP/yI66/+3ceS1NGixHu/BwQUWf2G1hIxge/BAVUpKDSmAbXVwAtFnCzD1riHAqoRXHoHwr7jQkvzJF47ndPYvpeSBpmTAbYe0dMG2OmPcf/2o+t4nM+tJ7DVEc/8TH4qUwKgRciKte2cy0zzp3No="
                          alt=""
                          data-pagespeed-url-hash={734829697}
                          onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);"
                        />
                      </div>
                      <a href="mailto:coursehome22@gmail.com">coursehome22@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet/>
    </>

  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
