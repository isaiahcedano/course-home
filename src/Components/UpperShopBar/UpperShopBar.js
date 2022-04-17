const UpperShopBar = ({amountOfProducts, changeSearch}) => {
  return (
    <div className="shop_bar clearfix">
      <div className="shop_product_count">
        <span>{amountOfProducts}</span> products found
      </div>
      <div className="header_search">
        <div className="header_search_content">
          <div className="header_search_form_container">
            <form
              action="https://preview.colorlib.com/theme/onetech/shop.html#"
              className="header_search_form clearfix"
            >
              <input
                type="search"
                required=""
                className="header_search_input"
                placeholder="Search for products..."
                onChange={changeSearch}
              />
              <button
                type="submit"
                className="header_search_button trans_300"
                value="Submit"
              >
                <img
                  src="data:image/webp;base64,UklGRgYBAABXRUJQVlA4TPkAAAAvE8AEEC+ioG0bxvxJtzsg5n/+GbSN5Dj4yWz5CuETRw4agsNgAAqFAAAQiEHhBwDgxkAIsAgAEBcaQBQGIgjEQtz4AERQeFAYiEHAhxAXIEaybdqaZ9t+37bNyT+pc857IUT0X4HbNkph2zE8A2Bw+qJPRx1SPFN//9T9hO/8mtWgsdbLyBfeFwlYf3EnuEDPzwwRq1oJ85QED90F+DafQst7AD9JMed7gO8k8r4BvFlOoesNwKnLFE6cAzT9L8Vu+5wNLnDsYzV078NDQl7rXjdX6B+qP5NIB6rq37k6jr9o/+H783ZVZB5pAxfqaLOW6nA7scXg6xUA"
                  alt=""
                  data-pagespeed-url-hash={1234169816}
                  onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpperShopBar;
