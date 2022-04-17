import Header from '../../Containers/Header/Header';
import MidHomeSection from '../../Components/MidHomeSection/MidHomeSection';
import HomeShop from '../../Containers/HomeShop/HomeShop';

const Home = ({products}) => {

  return (
    <>
      <MidHomeSection text={"You have an opportunity, take it."}/>
      {

        Object.entries(products).length ?
        <HomeShop products={products}/> : null
      }
    </>
  );
};

export default Home;
