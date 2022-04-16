import ProductItem from '../../Components/ProductItem/ProductItem';
import SideBar from '../../Components/SideBar/SideBar';
import UpperShopBar from '../../Components/UpperShopBar/UpperShopBar';
import {useState, useEffect} from 'react';

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

const HomeShop = ({amountOfProducts, products}) => {
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(products)[0]);

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
                }, 0)}/>
              <div className="product_grid" style={{ position: "relative", height: 1012 }}>
                {
                  products[selectedCategory].map(({title, price, imgSrc}) => {
                      return <ProductItem productName={title}
                                   key={title}
                                   href={"#"}
                                   imgSrc={imgSrc}
                                   price={price}/>
                               })
                }

              </div>
              <div className="shop_page_nav d-flex flex-row">
                <div className="page_prev d-flex flex-column align-items-center justify-content-center">
                  <i className="fas fa-chevron-left" />
                </div>
                <ul className="page_nav d-flex flex-row">
                  <li>
                    <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                      3
                    </a>
                  </li>
                  <li>
                    <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                      ...
                    </a>
                  </li>
                  <li>
                    <a href="https://preview.colorlib.com/theme/onetech/shop.html#">
                      21
                    </a>
                  </li>
                </ul>
                <div className="page_next d-flex flex-column align-items-center justify-content-center">
                  <i className="fas fa-chevron-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeShop;
