import { useState } from "react";

function ListGroup() {
  let items = [
    "Amsterdam",
    "Rotterdam",
    "Haarlem",
    "Utrecht",
    "Den Haag",
    "Leiden",
    "Delft",
    "Ede",
  ];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Items Found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
