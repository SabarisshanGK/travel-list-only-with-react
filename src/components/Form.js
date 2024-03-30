import { useState } from "react";

const Form = ({onAddItems}) => {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);
  
    function handleSUbmit(e) {
      e.preventDefault();
      if (!description) return;
      const newItem = { description, quantity, isPacked: false, id: Date.now() };
  
      onAddItems(newItem);
  
      setDescription('');
      setQuantity(1);
    }
  
    return (
      <form className="add-form" onSubmit={handleSUbmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select
          name="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
            return (
              <option value={num} key={num}>
                {num}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder="Add Item"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    );
  };

  export default Form;