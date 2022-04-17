import {useState, useEffect} from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import {connect} from 'react-redux';
import {changeRoute} from '../../Redux/actions/SingleProduct/actions';

const mapDispatchToProps = dispatch => ({
  setRoute: route => dispatch(changeRoute(route)),
});

const mapStateToProps = state => ({
  route: state.changeRoute,
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

  if (typeof(productInfo) === 'undefined' || !productInfo.length) {
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

const SingleProductTransition = ({products, route, setRoute}) => {
  return (
    getInfo(products, route)[0] ?
    <SingleProduct category={getInfo(products, route)[0].category}
                   price={getInfo(products, route)[0].price}
                   description={getInfo(products, route)[0].description}
                   salesPage={getInfo(products, route)[0].salesPage}
                   imgSrc={getInfo(products, route)[0].imgSrc}
                   title={getInfo(products, route)[0].title}/> : null
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductTransition);
