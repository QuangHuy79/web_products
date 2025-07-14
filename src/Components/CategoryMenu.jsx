import React from "react";
import "../styles/CategoryMenu.css";

function CategoryMenu({ category, onCategoryChange, displayCategory }) {
  return (
    <div className="category-menu">
      {Object.entries(displayCategory).map(([key, label]) => (
        <button
          key={key}
          className={`category-btn ${category === key ? "active" : ""}`}
          onClick={() => onCategoryChange(key)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
