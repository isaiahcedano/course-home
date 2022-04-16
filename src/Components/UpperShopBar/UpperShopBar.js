const UpperShopBar = ({amountOfProducts}) => {
  return (
    <div className="shop_bar clearfix">
      <div className="shop_product_count">
        <span>{amountOfProducts}</span> products found
      </div>
    </div>
  )
}

export default UpperShopBar;
