import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

const Item = () => {
  const [listItems, setListItems] = useState([]);

  const itemName = document.querySelector(".inputItem").value;
  const itemQuantity = document.querySelector(".quantityRange").value;

  if (itemQuantity !== "0" && !!itemName) {
    console.log(itemQuantity, itemName);
    setListItems(`${itemQuantity} ${itemName}`);
  } else if (itemQuantity === "0" && !!itemName) {
    console.log(itemName);
    setListItems(`${itemName}`);
  } else {
    alert("Item Name is not defined");
  }

  listItems.map((item) => {
    return (
      <div className="listItem">
        <input type="checkbox" className="checkBox" />
        <p>{item}</p>
        <button className="cancelItemBtn">
          <FaXmark className="crossIcon" />
        </button>
      </div>
    );
  });
};

export { Item };
