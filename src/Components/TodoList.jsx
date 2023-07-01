import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
const TodoList = ({ title, initialItems }) => {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (event) => {
    event.preventDefault();
    const newItem = event.target.elements.newItem.value;
    setItems([...items, newItem]);
    event.target.reset();
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <h2>{title}</h2> 
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleRemoveItem(index)}>Remove</button> 
            </li>
          ))}
        </ul>
      ) : (
        <p>No items to display.</p>
      )}

      <form onSubmit={handleAddItem}>
        <input type="text" name="newItem" placeholder="Enter a new item" />
        <button type="submit">Add Item</button> 
      </form>
    </div>
  );
};

TodoList.propTypes = {
  title: PropTypes.string.isRequired, 
  initialItems: PropTypes.arrayOf(PropTypes.string).isRequired, 
};

export default TodoList;
