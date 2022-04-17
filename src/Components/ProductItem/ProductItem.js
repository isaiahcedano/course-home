import {Link} from 'react-router-dom';

const ProductItem = ({imgSrc, price, productName, cb, href}) => {
  return (
    <div
      className={"product_item"}
    >
      <div className="product_border" />
      <div className="product_image d-flex flex-column align-items-center justify-content-center">
        <img
          src={imgSrc}
          alt=""
          data-pagespeed-url-hash={1995338588}
          onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
        />
      </div>
      <div className="product_content">
        <div className="product_price">{`$${price}`}</div>
        <div className="product_name">
          <div>
          <Link
              to={`/${href}`}
              tabIndex={0}
              onClick={cb}
            >
              {productName}
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
