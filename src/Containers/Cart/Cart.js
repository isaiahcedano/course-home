import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const mapStateToProps = state => ({
  products: JSON.parse(localStorage.getItem("products")) || state.changeProducts,
  cart: JSON.parse(localStorage.getItem("cart")) || state.changeCart,
});

const mapDispatchToProps = dispatch => ({});

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

const Cart = ({products, cart}) => {
  return (
    <div className="cart">
      <div className="cart_container d-flex flex-row align-items-center justify-content-end">
        <div className="cart_icon">
          <img
            src="data:image/webp;base64,UklGRkgBAABXRUJQVlA4TDsBAAAvGoAIED8jEEjy136ICIZt20aOVZJ7j4CgWCA3HACUgQgAmlE0uQRolIk0yKUooxUY01VM0g9AcmkmySMYKFAywg/bzJYACLatHVvub9tm5p9t9/bnfru685/Dh2cIEf2fABgM7n6Qn3shCNbH1JzOmSuTlxmHI31OVs04Z1yD5ir/XCY2eA/dOzZMNBnQ8/BNz5fNZrNDFrO6BU6z2WzWD9h+KNyyI0QqpX7ZVLov/FVKkWEk+A6gRxhkH8Ark8jzAUCfbj0nhwCuTgOo8wIA6dVzkwCsAFa4D2D70KJnOWhAe4frED/jgtwtS3KKKbkWI2LWGZ1ifg4gHueXXI5PclVeyy3zSG6Lm3InXJK7YUXumVm5b8bkJnTJ8R/yHZbk5vm/6LVarAYtBnBMcjwy2k0aQO1xSuPtqA4A"
            alt=""
            data-pagespeed-url-hash={3841846216}
            onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);"
          />
          <div className="cart_count">
            <span>{cart[1]}</span>
          </div>
        </div>
        <div className="cart_content">
          <div className="cart_text">
            <Link to="/cart">
              Cart
            </Link>
          </div>
          <Link to={"/cart"} className="cart_price">{`$${cart[0].reduce((curr, {item, quantity}) => {
            const productInfo = getInfo(products, item)[0];
            const digit = curr + (productInfo.price*quantity);
            return Number((Math.round(digit*100)/100).toFixed(2));
          }, 0)}`}</Link>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
