import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import {connect} from 'react-redux';
import globalactions from './Redux/actions/global';
import {changeRoute} from './Redux/actions/SingleProduct/actions';
import {useEffect} from 'react';
import Header from './Containers/Header/Header';
import SingleProductTransition from './Pages/SingleProductTransition/SingleProductTransition';

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
        <Route path={"*"} element={<Home products={products}/>}/>
      </Route>
    </Routes>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
