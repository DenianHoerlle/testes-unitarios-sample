import axios from "axios";
import { useEffect, useState } from "react";

function List({ initialItems = [] }) {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState(initialItems);

  useEffect(() => {
    if (initialItems !== list) setList(initialItems);
  }, [initialItems]);

  function addToList() {
    setList([...list, newItem]);
  }

  function fetchUser() {
    axios
      .get("https://randomuser.me/api/")
      .then(({ data }) => {
        setList([...list, data.results[0].name.first]);
      })
      .catch((e) => console.log(e));
  }

  function removeItem(item) {
    setTimeout(() => {
      setList(list.filter((listItem) => listItem !== item));
    }, [500]);
  }

  return (
    <>
      <div>
        <input
          placeholder="Novo item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addToList}>adicionar input</button>
      </div>

      <button onClick={fetchUser}>adicionar request</button>
      <ul data-testid="item-list">
        {list?.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => removeItem(item)}>remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
