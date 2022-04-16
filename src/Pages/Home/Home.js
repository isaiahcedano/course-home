import Header from '../../Containers/Header/Header';
import MidHomeSection from '../../Components/MidHomeSection/MidHomeSection';
import HomeShop from '../../Containers/HomeShop/HomeShop';

const Home = ({products}) => {

  console.log("Home", products);

  return (
    <>
      <Header products={products}/>
      <MidHomeSection text={"You have an opportunity, take it."}/>
      {
        !Array.isArray(products) ? <HomeShop products={products}/> : null
      }

    </>
  );
};

export default Home;
