import React from "react";

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange((currentPage = 1))}
      >
        Перша
      </button>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Попередня
      </button>
      <span>
        {currentPage} з {totalPages}
      </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Наступна
      </button>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange((currentPage = totalPages))}
      >
        Остання
      </button>
    </div>
  );
};

export default PaginationControls;
