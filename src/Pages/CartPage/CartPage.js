import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import globalActions from '../../Redux/actions/global';
import {changeRoute} from '../../Redux/actions/SingleProduct/actions';
import {useState, useEffect} from 'react';

const mapDispatchToProps = dispatch => ({
  eliminateAll: () => dispatch(globalActions.eliminateAllItems()),
  setRoute: route => dispatch(changeRoute(route)),
  setLogin: credentials => dispatch(globalActions.changeLogin(credentials)),
});

const mapStateToProps = state => ({
  cart: state.changeCart,
  products: state.changeProducts,
  loggedIn: state.changeLogin,
});

const getInfo = (db, item) => {
  let productInfo = Object.entries(db).reduce((curr, [category, courses]) => [
    ...curr,
    courses.filter((product) => {
      if (item===product.title) {
        return {
          category,
          ...product,
        }
      }
    })[0],
  ], []).filter(item => typeof(item)!=="undefined");

  if (typeof(productInfo) === 'undefined') {
    productInfo = {
      title: item,
      price: 0,
      description: "",
      salesPage: "",
      category: "",
    }
  }
  return productInfo;
}

const getPrice = (quantity, price) => {
  const digit = price*quantity;
  return Number((Math.round(digit*100)/100).toFixed(2));
}

const CartPage = ({cart, products, eliminateAll, setRoute, loggedIn}) => {

  const [checkoutLink, setCheckoutLink] = useState("");

  useEffect(() => {
    if (loggedIn[0]) {
      fetch(`https://house-of-courses-api.herokuapp.com/user?token=${loggedIn[1]}`)
      .then(resp => resp.json())
      .then(user => {
        const [username, email] = user;
        fetch("https://house-of-courses-api.herokuapp.com/purchase", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            cart: cart[0]
          })
        }).then(resp => resp.json())
        .then(link => {
          setCheckoutLink(link);
        })
      })
    }

  }, [loggedIn, cart]);

  return (
    <>
      <div className="cart_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="cart_container">
                <div className="cart_title">Shopping Cart</div>
                <div className="cart_items">
                  <ul className="cart_list">
                    {
                      cart[0].map(({item, quantity}) => {
                        const productInfo = getInfo(products, item)[0];
                        return <li className="cart_item clearfix">
                          <div className="cart_item_image">
                            <img
                              src={productInfo.imgSrc}
                              alt=""

                              data-pagespeed-url-hash={3506732625}
                              onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                            />
                          </div>
                          <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                            <div className="cart_item_name cart_info_col">
                              <div className="cart_item_title">Name</div>
                              <Link to={"/course"} onClick={() => {
                                setRoute(item);
                              }} className="cart_item_text">{item}</Link>
                            </div>
                            <div className="cart_item_quantity cart_info_col">
                              <div className="cart_item_title">Quantity</div>
                              <div className="cart_item_text">{quantity}</div>
                            </div>
                            <div className="cart_item_price cart_info_col">
                              <div className="cart_item_title">Price</div>
                              <div className="cart_item_text">{`$${Number(productInfo.price)}`}</div>
                            </div>
                            <div className="cart_item_total cart_info_col">
                              <div className="cart_item_title">Total</div>
                              <div className="cart_item_text">{`$${getPrice(Number(productInfo.price), quantity)}`}</div>
                            </div>
                          </div>
                        </li>
                      })
                    }

                  </ul>
                </div>
                <div className="order_total">
                  <div className="order_total_content text-md-right">
                    <div className="order_total_title">Order Total:</div>
                    <div className="order_total_amount">{`$${cart[0].reduce((curr, {item, quantity}) => {
                      const productInfo = getInfo(products, item)[0];
                      const digit = curr + (productInfo.price*quantity);
                      return Number((Math.round(digit*100)/100).toFixed(2));
                    }, 0)}`}</div>
                  </div>
                </div>
                <div className="cart_buttons">
                  <button type="button" className="button cart_button_clear" onClick={eliminateAll}>
                    Clear Cart
                  </button>
                  {
                    loggedIn[0] ?
                    <a className="button cart_button_checkout" href={checkoutLink}>
                      Checkout
                    </a> :
                    <Link className="button cart_button_checkout" to={"/login"}>
                      Checkout
                    </Link>
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
