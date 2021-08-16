import { useState } from "react";
import "./style.css";
import Menu from "./MenuApi.js";
import MenuCard from "./MenuCard.js";
import Nav from "./navbar.js";
const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.brand;
    })
  ),
  "All",
];

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const filterItem = (brand) => {
    if (brand == "All") {
      return setMenuData(Menu);
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.brand === brand;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Nav filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};
export default Resturant;
