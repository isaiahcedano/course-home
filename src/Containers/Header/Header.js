import HeaderSection from '../../Components/HeaderSection/HeaderSection';
import logo from './icons/logo.png';
import arrowBottom from './icons/arrowBottom.png';
import {connect} from 'react-redux';
import globalActions from '../../Redux/actions/global';
import {useEffect} from 'react';
import Cart from '../Cart/Cart';
import './Header.css';

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
  console.log("Header", products);

  return (
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
                <a href="mailto:coursehome@gmail.com">coursehome@gmail.com</a>
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
          <div className="row">
            <div className="col-lg-2 col-sm-3 col-3 order-1">
              <div className="logo_container">
                <div className="logo">
                  <img src={logo}/>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
              <div className="header_search">
                <div className="header_search_content">
                  <div className="header_search_form_container">
                    <form
                      action="https://preview.colorlib.com/theme/onetech/shop.html#"
                      className="header_search_form clearfix"
                    >
                      <input
                        type="search"
                        required=""
                        className="header_search_input"
                        placeholder="Search for products..."
                      />
                      <div className="custom_dropdown">
                        <div className="custom_dropdown_list">
                          <span className="custom_dropdown_placeholder clc">
                            All Categories
                          </span>
                          <i className="fas fa-chevron-down" />
                          <ul className="custom_list clc">
                            <li>
                              <a
                                className="clc"
                                href="https://preview.colorlib.com/theme/onetech/shop.html#"
                              >
                                Social Skills
                              </a>
                            </li>
                            <li>
                              <a
                                className="clc"
                                href="https://preview.colorlib.com/theme/onetech/shop.html#"
                              >
                                Financial Literacy
                              </a>
                            </li>
                            <li>
                              <a
                                className="clc"
                                href="https://preview.colorlib.com/theme/onetech/shop.html#"
                              >
                                Fitness
                              </a>
                            </li>
                            <li>
                              <a
                                className="clc"
                                href="https://preview.colorlib.com/theme/onetech/shop.html#"
                              >
                                Self Improvement
                              </a>
                            </li>
                            <li>
                              <a
                                className="clc"
                                href="https://preview.colorlib.com/theme/onetech/shop.html#"
                              >
                                Sex Courses
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="header_search_button trans_300"
                        value="Submit"
                      >
                        <img
                          src="data:image/webp;base64,UklGRgYBAABXRUJQVlA4TPkAAAAvE8AEEC+ioG0bxvxJtzsg5n/+GbSN5Dj4yWz5CuETRw4agsNgAAqFAAAQiEHhBwDgxkAIsAgAEBcaQBQGIgjEQtz4AERQeFAYiEHAhxAXIEaybdqaZ9t+37bNyT+pc857IUT0X4HbNkph2zE8A2Bw+qJPRx1SPFN//9T9hO/8mtWgsdbLyBfeFwlYf3EnuEDPzwwRq1oJ85QED90F+DafQst7AD9JMed7gO8k8r4BvFlOoesNwKnLFE6cAzT9L8Vu+5wNLnDsYzV078NDQl7rXjdX6B+qP5NIB6rq37k6jr9o/+H783ZVZB5pAxfqaLOW6nA7scXg6xUA"
                          alt=""
                          data-pagespeed-url-hash={1234169816}
                          onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);"
                        />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
              <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                <div className="wishlist d-flex flex-row align-items-center justify-content-end">
                  <div className="wishlist_icon">
                    <img
                      src="data:image/webp;base64,UklGRnIBAABXRUJQVlA4TGYBAAAvIoAHEFejIG0DJv5l73iIQJi2bYOzk3ab2rZtGHhL5R2OqxAIQJkHLkSgtKoAoQQMpYTWkz5YwEhIEVpjxOopqqKCSgvPNzA20JoVECPZNm2tb9t8tvVt27Yx+WdweTKI6P8EyNpavXrn92lrWPaDmw+f/2/nlWY5z//ieNIuqeUAx595hzO4ivW1dY1vw+eQ+t9hZ6qnvT9xDWc2F/wGZN95xV/lg5se2Yf+uJRU469XLo+AU7ns/WNWjTAp18ecyfUENNW4k8dRebxl/o6gF8/T3H/RaaiDb6g3VAfQZKgBXhgw1MfrHmuG5jkc4cPQO2N6ZN/ILs9SN2wYWIE+SQFY920JorKGYc2nBUjJPgxrvixCUs4RWPVhHtJyG4cVT3OQk/s4rHiYh6y8xmHZ1Txk5D0Bcy5qkJOfSZh1qEFO/qZh1qYGefmdgVlJM1CU/3koqAhlmSzAKZRltgCUZLr8VpFn"
                      alt=""
                      data-pagespeed-url-hash={1440773528}
                      onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);"
                    />
                  </div>
                  <div className="wishlist_content">
                    <div className="wishlist_text">
                      <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                        Wishlist
                      </a>
                    </div>
                    <div className="wishlist_count">115</div>
                  </div>
                </div>
                <Cart/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="main_nav">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="main_nav_content d-flex flex-row">
                <div className="cat_menu_container">
                  <div className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                    <div className="cat_burger">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="cat_menu_text">categories</div>
                  </div>
                  <ul className="cat_menu">
                    <li>
                      <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                        Social Skills
                        <i className="fas fa-chevron-right ml-auto" />
                      </a>
                    </li>
                    <li className="hassubs">
                      <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                        Financial Literacy <i className="fas fa-chevron-right" />
                      </a>
                      <ul>
                        <li>
                          <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                            Real Estate <i className="fas fa-chevron-right" />
                          </a>
                        </li>
                        <li>
                          <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                            Stocks <i className="fas fa-chevron-right" />
                          </a>
                        </li>
                        <li>
                          <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                            Futures - Commodities <i className="fas fa-chevron-right" />
                          </a>
                        </li>
                        <li>
                          <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                            Options - Forex <i className="fas fa-chevron-right" />
                          </a>
                        </li>
                        <li>
                          <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                            Strategies for all markets <i className="fas fa-chevron-right" />
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                        Fitness and Healthy Lifestyle <i className="fas fa-chevron-right" />
                      </a>
                    </li>

                    <li>
                      <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                        Self Improvement
                        <i className="fas fa-chevron-right" />
                      </a>
                    </li>
                    <li>
                      <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                        Sex Courses <i className="fas fa-chevron-right" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="main_nav_menu ml-auto">
                  <ul className="standard_dropdown main_nav_dropdown">
                    <li>
                      <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                        Home <i className="fas fa-chevron-down" />
                      </a>
                    </li>
                    <li>
                      <a href="https://preview.colorlib.com/theme/onetech/blog.html">
                        FAQ <i className="fas fa-chevron-down" />
                      </a>
                    </li>
                    <li>
                      <a href="https://preview.colorlib.com/theme/onetech/contact.html">
                        DMCA <i className="fas fa-chevron-down" />
                      </a>
                    </li>
                    <li>
                      <a href="https://preview.colorlib.com/theme/onetech/contact.html">
                        Create Request <i className="fas fa-chevron-down" />
                      </a>
                    </li>
                    <li>
                      <a href="https://preview.colorlib.com/theme/onetech/contact.html">
                        Contact <i className="fas fa-chevron-down" />
                      </a>
                    </li>
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
        </div>
      </nav>
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
                    <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                      Home <i className="fa fa-angle-down" />
                    </a>
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
                      Create Request <i className="fa fa-angle-down" />
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
                    <a href="mailto:coursehome@gmail.com">coursehome@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
