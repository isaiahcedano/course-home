import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import {connect} from 'react-redux';
import globalactions from './Redux/actions/global';
import {changeRoute} from './Redux/actions/SingleProduct/actions';
import {useEffect} from 'react';
import Header from './Containers/Header/Header';
import SingleProductTransition from './Pages/SingleProductTransition/SingleProductTransition';
import FAQPage from './Pages/FAQPage/FAQPage';
import CourseRequestPage from './Pages/CourseRequest/CourseRequest';
import DMCAPage from './Pages/DMCA/DMCA';
import CartPage from './Pages/CartPage/CartPage';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';

const mapDispatchToProps = dispatch => ({
  setDatabase: () => dispatch(globalactions.setProductDatabase()),
});

const mapStateToProps = state => ({
  products: JSON.parse(localStorage.getItem("products")) || state.changeProducts,
});

const App = ({products, setDatabase, route, setRoute}) => {
  useEffect(() => {
    setDatabase();
  }, []);

  return (
    <Routes>
      <Route path={"*"} element={<Header products={products}/>}>
        <Route path={"home"} element={<Home products={products}/>}/>
        <Route path={"course"} element={<SingleProductTransition products={products}/>}/>
        <Route path={"faq"} element={<FAQPage/>}/>
        <Route path={"request"} element={<CourseRequestPage/>}/>
        <Route path={"dmca"} element={<DMCAPage/>}/>
        <Route path={"cart"} element={<CartPage/>}/>
        <Route path={"checkout"} element={<CheckoutPage/>}/>
        <Route path={"login"} element={<LoginPage/>}/>
        <Route path={"register"} element={<RegisterPage/>}/>
        <Route path={"*"} element={<Home products={products}/>}/>
      </Route>
    </Routes>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
