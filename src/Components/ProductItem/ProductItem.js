const ProductItem = ({imgSrc, price, productName, href}) => {
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
            <a
              href={href}
              tabIndex={0}
            >
              {productName}
            </a>
          </div>
        </div>
      </div>
      <div className="product_fav">
        <i className="fas fa-heart" />
      </div>
      <ul className="product_marks">
        <li className="product_mark product_discount">-25%</li>
        <li className="product_mark product_new">new</li>
      </ul>
    </div>
  );
};

export default ProductItem;
