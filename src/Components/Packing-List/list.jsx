import "./list.css";
import { FaXmark } from "react-icons/fa6";

const PackingList = ({
  itemsList,
  setItemsList,
  sortedHandler,
  clearItems,
}) => {
  return (
    <div className="packingListArea">
      <div className="listContainer">
        <Item itemsList={itemsList} setItemsList={setItemsList} />
      </div>

      <div className="filterartion">
        <select name="filter" className="filterList" onChange={sortedHandler}>
          <option value="Sort by Input Order">Sort by Input Order</option>
          <option value="Sort by Description">Sort by Description</option>
          <option value="Sort by Packed Status">Sort by Packed Status</option>
        </select>
        <button className="clearListBtn" onClick={clearItems}>
          Clear List
        </button>
      </div>
    </div>
  );
};

const Item = ({ itemsList, setItemsList }) => {
  return (
    <>
      {itemsList.map((item, index) => (
        <div key={index} className="listItem">
          <input
            type="checkbox"
            className="checkBox"
            onChange={() => {
              const updateItemsList = [...itemsList];
              updateItemsList[index].packed = !updateItemsList[index].packed;
              setItemsList(updateItemsList);
            }}
            checked={item.packed || false}
          />
          <p
            style={{
              textDecoration: !item.packed
                ? "none"
                : "3px solid #333 line-through",
            }}>
            {item.quantity} {item.name}
          </p>
          <button
            className="cancelItemBtn"
            onClick={() => {
              const updateItemsList = [...itemsList];
              updateItemsList.splice(index, 1);
              setItemsList(updateItemsList);
            }}>
            <FaXmark className="crossIcon" />
          </button>
        </div>
      ))}
    </>
  );
};

export default PackingList;
