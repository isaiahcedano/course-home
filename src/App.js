import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import {connect} from 'react-redux';
import globalactions from './Redux/actions/global';
import {useEffect} from 'react';

const mapDispatchToProps = dispatch => ({
  setDatabase: () => dispatch(globalactions.setProductDatabase())
});

const mapStateToProps = state => ({
  products: JSON.parse(localStorage.getItem("products")) || state.changeProducts
});

const App = ({products, setDatabase}) => {



  useEffect(() => {
    setDatabase();
    console.log("App", products);
  }, []);

  return (
    <Routes>
      <Route path={"*"} element={<Home products={products}/>}/>
    </Routes>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
