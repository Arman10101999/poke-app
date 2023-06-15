import React from "react";

const FilterOptions = ({ onFilter }) => {
  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    onFilter(selectedFilter);
  };

  return (
    <div>
      <h3>Filter Options</h3>

      <select onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="ability">By Ability</option>
        <option value="characteristic">By Characteristic</option>
        <option value="group">By Group</option>
        <option value="habitat">By Habitat</option>
        <option value="location">By Location</option>
        <option value="species">By Species</option>
      </select>
    </div>
  );
};

export default FilterOptions;
