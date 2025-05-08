import React from "react";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";


const ItemList = ({ title, items, itemsArray, path, idPath }) => {

  return (
    <div className="item-list">
      <div className="item-list_header">
        <h2>{title} populares</h2>
        <Link to={path} className="item-list_link">
          Mostrar tudo
        </Link>
      </div>

      <div className="item-list_container">
        {itemsArray
        .filter((currentValue, index) => index < items)
        .map((currObj, index) => (
        <SingleItem
        idPath={idPath}
        {...currObj}
        key={`${title}-${index}`}/>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
