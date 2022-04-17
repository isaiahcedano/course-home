import ProductItem from '../../Components/ProductItem/ProductItem';
import SideBar from '../../Components/SideBar/SideBar';
import UpperShopBar from '../../Components/UpperShopBar/UpperShopBar';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {changeRoute} from '../../Redux/actions/SingleProduct/actions';
import {Link} from 'react-router-dom';

const waitForElm = selector => {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelectorAll(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelectorAll(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

const mapDispatchToProps = dispatch => ({
  setRoute: route => dispatch(changeRoute(route)),
});

const mapStateToProps = state => ({
  route: state.changeRoute,
});

const HomeShop = ({amountOfProducts, products, route, setRoute}) => {
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(products)[0]);
  const [searchBar, setSearchBar] = useState("");


  useEffect(() => {
    waitForElm(".sidebar-item").then(ele => ele[1].click());
  }, [])

  return (
    <div className="shop">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SideBar title={"Categories"} items={
              Object.keys(products).map((category) => {
                return {
                  text: category,
                  cb: () => setSelectedCategory(category),
                }
              })}/>
          </div>
          <div className="col-lg-9">
            <div className="shop_content">
              <UpperShopBar amountOfProducts={products[selectedCategory].reduce((acc, item) => {
                    acc = acc + 1;
                    return acc;
                }, 0)} changeSearch={(e) => {
                  setSearchBar(e.target.value);
                }}/>
              <div className="product_grid" style={{ position: "relative", height: 1012 }}>
                {
                  products[selectedCategory].filter(({title}) => title.toLowerCase().includes(searchBar.toLowerCase()))
                  .map(({title, price, imgSrc}) => {
                    return <ProductItem productName={title}
                                 key={title}
                                 cb={() => setRoute(title)}
                                 href={"course"}
                                 imgSrc={imgSrc}
                                 price={price}/>
                             })
                }
                {
                  !products[selectedCategory]
                  .filter(({title}) =>
                  title.toLowerCase().includes(searchBar.toLowerCase())).length ?
                  <p className={"no-search-results"}>No results. <Link to={"/request"}>Request the course you're looking for.</Link></p> : null
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeShop);
