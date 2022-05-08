import React from "react";
import { useState } from "react";
import _ from "lodash";

const Main = () => {
  const [filteredPrice, setPrice] = useState({
    lowestPrice: 0,
    highestPrice: 15000,
  });
  let coffee = [
    { name: "Americano", price: 4000 },
    { name: "CaffeMocha", price: 5000 },
    { name: "CaffeLatte", price: 4500 },
    { name: "Cappuccino", price: 6000 },
    { name: "Affogato", price: 7000 },
    { name: "IceTea", price: 5500 },
  ];
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {_.filter(
          coffee,
          (menu) =>
            filteredPrice.lowestPrice <= menu.price &&
            menu.price <= filteredPrice.highestPrice
        ).map((obj) => {
          return (
            <li>
              {obj.name} : {obj.price}
            </li>
          );
        })}
      </ul>
      <h2>가격으로 검색</h2>
      <input
        onChange={(e) => {
          setPrice({ ...filteredPrice, lowestPrice: e.target.value });
          console.log(filteredPrice);
        }}
      ></input>{" "}
      ~{" "}
      <input
        onChange={(e) => {
          setPrice({ ...filteredPrice, highestPrice: e.target.value });
          console.log(filteredPrice);
        }}
      ></input>
    </div>
  );
};

export default Main;
