import "./App.css";
import { useState, useEffect } from "react";
import Logo from "./Components/Logo/logo";
import Form from "./Components/Form/form";
import Stats from "./Components/Stats/stats";
import PackingList from "./Components/Packing-List/list";

const App = () => {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemsList, setItemsList] = useState([]);
  const [itemIndex, setItemIndex] = useState(0);
  const [packedItems, setPackedItems] = useState([]);

  // * For Add Items in List
  function addItem() {
    if (!!itemName) {
      const newItem = {
        index: itemIndex,
        name: itemName.slice(0, 1).toUpperCase() + itemName.slice(1),
        quantity: +itemQuantity,
        packed: false,
      };
      setItemsList([...itemsList, newItem]);
      setItemIndex((prvIndex) => prvIndex + 1);
      setItemName("");
      setItemQuantity(1);
      document.querySelector(".inputItem").value = "";
      document.querySelector(".quantityRange").value = 1;
    } else {
      alert("Alert! Your item name is empty");
    }
  }

  const sortedByInputOrder = () => {
    const customSort = (a, b) => {
      return a.index - b.index;
    };
    const sortedItemsList = [...itemsList].sort(customSort);
    setItemsList(sortedItemsList);
  };

  const sortedByPackedStatus = () => {
    const customSort = (a, b) => {
      if (a.packed && !b.packed) return -1;
      if (!a.packed && b.packed) return 1;
      return 0;
    };
    const sortedItemsList = [...itemsList].sort(customSort);
    setItemsList(sortedItemsList);
  };

  const sortedByDescription = () => {
    const customSort = (a, b) => {
      return a.name.localeCompare(b.name);
    };
    const sortedItemsList = [...itemsList].sort(customSort);
    setItemsList(sortedItemsList);
  };

  function sortedHandler(e) {
    const selectedSortingOption = e.target.value;

    if (selectedSortingOption === "Sort by Input Order") {
      sortedByInputOrder();
      console.log("Input Order");
    } else if (selectedSortingOption === "Sort by Packed Status") {
      sortedByPackedStatus();
      console.log("Packed Status");
    } else if (selectedSortingOption === "Sort by Description") {
      sortedByDescription();
      console.log("Description");
    } else {
      console.log("Not Sorted");
    }
  }

  const deleteAllItemsOfTheList = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmation) {
      setItemsList([]);
    }
  };

  // For Packed Items Status
  useEffect(() => {
    if (itemsList.length > 0) {
      const packItems = itemsList.filter((item) => !!item.packed);
      setPackedItems(packItems);
    } else {
      setPackedItems([]);
    }
  }, [itemsList]);

  return (
    <div className="App">
      <Logo />
      <Form
        addItemFunc={addItem}
        setItemQuantity={setItemQuantity}
        setItemName={setItemName}
      />
      <PackingList
        itemsList={itemsList}
        setItemsList={setItemsList}
        sortedHandler={sortedHandler}
        clearItems={deleteAllItemsOfTheList}
      />
      <Stats itemsList={itemsList} packedItems={packedItems} />
    </div>
  );
};

export default App;
