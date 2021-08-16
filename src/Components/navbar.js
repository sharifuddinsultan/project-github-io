const Nav = ({ filterItem, menuList }) => {
  //   console.log(filterItem);
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((item) => {
            return (
              <>
                <button
                  className="btn-group__item"
                  onClick={() => filterItem(item)}
                >
                  {item}
                </button>
              </>
            );
          })}
        </div>
      </nav>
    </>
  );
};
export default Nav;
