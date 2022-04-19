import classes from './ProductPage.module.css'
import {useState} from 'react';
import {connect} from 'react-redux';
import globalActions from '../../Redux/actions/global';
import shoppingcart from './shoppingcart.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {styled} from '@mui/material/styles';


const mapStateToProps = state => ({
  cart: JSON.parse(localStorage.getItem("cart")) || state.changeCart,
});

const mapDispatchToProps = dispatch => ({
  addToCart: (item, quantity) => dispatch(globalActions.addToCart(item, quantity)),
  updateCart: (item, quantity) => dispatch(globalActions.updateCart(item, quantity)),
  eliminateItem: item => dispatch(globalActions.eliminateItem(item)),
})

const SingleProduct = ({imgSrc,
                        description,
                        category,
                        title,
                        price,
                        cart,
                        addToCart,
                        eliminateItem,
                        updateCart,
                        salesPage}) => {

  const Arrow = styled(ExpandMoreIcon)(({theme}) => ({
    fontSize: "16px",
    color: "black",
  }));

  const [cartbgcolor, setCartBgColor] = useState(false);
  const [quantitycolor, setQuantitiyColor] = useState([false, false]);
  const [quantity, setQuantity] = useState(1);
  const [wishcolor, setWishColor] = useState(false);

  return (
    <div className="single_product">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-2 order-1">
            <div className="image_selected">
              <img
                src={imgSrc}
                alt=""
                data-pagespeed-url-hash={2656354377}
                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
              />
            </div>
          </div>
          <div className="col-lg-5 order-2">
            <div className="product_description">
              <div className="product_category">{category}</div>
              <div className="product_name">{title}</div>
              <div className="rating_r rating_r_4 product_rating">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="product_text">
                <p>
                  {description}
                </p>
              </div>
              <div className="order_info d-flex flex-row">
                <form action="https://preview.colorlib.com/theme/onetech/product.html#">
                  <div className="clearfix" style={{ zIndex: 1000 }}>
                    <div class="product_price">{`$${price}`}</div>

                    <div className={`${classes.cartAdder} cartAdder`}>
                      <div onMouseOver={()=>{setCartBgColor(true)}}
                        onClick={()=>{
                          const foundItem = cart.map(list =>
                            Array.isArray(list) ?
                            list.filter(({item, quantity}) => item===title)
                            : null)[0];
                          if (!cart[0].filter(({item}) => item===title).length) {
                            if (foundItem.length) {
                              updateCart(title, 1);
                            } else {
                              addToCart(title, 1);
                            }
                          } else {
                            eliminateItem(title);
                          }
                        }}
                        onMouseOut={()=>{setCartBgColor(false)}}>
                        {
                          cart[0].filter(({item}) => item===title).length ?
                          <p>COURSE ADDED TO CART!</p> : <p>ADD TO CART</p>

                        }
                        <div className={`${cartbgcolor ? 'cartAdderHovered' : ''}`}>
                          <img src={shoppingcart}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={"col-lg-5 order-3"}>
            <a href={salesPage}>Sales Page</a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
