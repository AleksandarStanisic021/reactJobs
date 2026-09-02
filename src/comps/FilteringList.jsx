import { useState } from "react";

const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Date" },
  { id: 5, name: "Elderberry" },
];

const FilterList = () => {
  const [filter, setFilter] = useState("");
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      <input
        onChange={(e) => setFilter(e.target.value)}
        type="text"
        name="filter"
        placeholder="Filter items..."
        value={filter}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default FilterList;
