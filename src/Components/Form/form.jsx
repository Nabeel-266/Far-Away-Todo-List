import "./form.css";

const Form = ({ addItemFunc, setItemQuantity, setItemName }) => {
  const optionElements = [];
  for (let i = 1; i <= 20; i++) {
    optionElements.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <div className="formArea">
      <p>What do you need for your 😍 trip?</p>
      <select
        name="quantity"
        className="quantityRange"
        onChange={(e) => setItemQuantity(e.target.value)}>
        {optionElements}
      </select>
      <input
        className="inputItem"
        type="text"
        placeholder="Item..."
        onChange={(e) => {
          setItemName(e.target.value);
        }}
      />
      <button className="addBtn" onClick={addItemFunc}>
        Add
      </button>
    </div>
  );
};

export default Form;
