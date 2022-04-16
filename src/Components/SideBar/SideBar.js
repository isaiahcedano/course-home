const SideBar = ({title, items}) => {
  return (
    <div className="shop_sidebar">
      <div className="sidebar_section">
        <div className="sidebar_title">{title}</div>
        <ul className="sidebar_categories">
          {
            items.map(({cb, text}) => {
              return <li key={text}>

                <p className={"sidebar-item"} onClick={cb}>
                  {text}
                </p>
              </li>
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
