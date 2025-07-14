// 📁 src/Components/Pagination.jsx
// =============================
import React from "react";
import "../styles/Pagination.css";

function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div className="pagination">
      <button
        className="category-btn"
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
      >
        ← Prev
      </button>
      <span>
        Trang {page} / {totalPages}
      </span>
      <button
        className="category-btn"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
      >
        Next →
      </button>
    </div>
  );
}

export default Pagination;
