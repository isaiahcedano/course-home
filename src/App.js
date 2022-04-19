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
import {useLocation} from 'react-router-dom';

const mapDispatchToProps = dispatch => ({
  setDatabase: () => dispatch(globalactions.setProductDatabase()),
  resetLogin: () => dispatch(globalactions.resetLogin()),
});

const mapStateToProps = state => ({
  products: state.changeProducts,
  loggedIn: state.changeLogin,
  registered: state.changeRegistered
});

const validSignin = async (logState, storage) => {
  const validToken = async token => {
    return await fetch("https://house-of-courses-api.herokuapp.com/check", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token,
      })
    }).then(resp => resp.json());
  }
  const [loggedIn, token] = logState;
  const isValidToken = await validToken(token);
  if (storage) {
    const isStorageValidToken = await validToken(storage[1]);
    return Boolean(storage[0] && isStorageValidToken);
  }
  return Boolean(loggedIn && isValidToken);
};

const App = ({products,
              setDatabase,
              resetLogin,
              route,
              setRoute,
              loggedIn,
              registered}) => {
  const location = useLocation();

  useEffect(() => {
    if (!Object.entries(products).length) {
      setDatabase();
    }

    if (loggedIn[0]) {
      validSignin(loggedIn, JSON.parse(localStorage.getItem("login")))
        .then(valid => {
          if (!valid) {
            resetLogin();
          }
        });
    }

  }, [location]);

  return (
    <Routes>
      {
        !loggedIn[0] ? <Route path={"login"} element={<LoginPage/>}/> :
        null
      }
      {
        !loggedIn[0] ? <Route path={"register"} element={<RegisterPage/>}/> :
        null
      }
      <Route path={"*"} element={<Header products={products}/>}>
        <Route path={"home"} element={<Home products={products}/>}/>
        <Route path={"course"} element={<SingleProductTransition products={products}/>}/>
        <Route path={"faq"} element={<FAQPage/>}/>
        <Route path={"request"} element={<CourseRequestPage/>}/>
        <Route path={"dmca"} element={<DMCAPage/>}/>
        <Route path={"cart"} element={<CartPage/>}/>
        <Route path={"checkout"} element={<CheckoutPage/>}/>
        <Route path={"*"} element={<Home products={products}/>}/>
      </Route>
    </Routes>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
