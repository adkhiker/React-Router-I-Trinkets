
import React from "react";
import items from "../data";
import { Link } from "react-router-dom";

function ItemsList() {
  return (
    <div className="items-list-wrapper">
      {items.map(item => (
        <div className="item-card" key={item.id}>
          <img
            className="item-list-image"
            src={item.imageUrl}
            alt={item.name}
          />
          <Link to={`/item-list/${item.id}`}>
            <p>{item.name}</p>
          </Link>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;
