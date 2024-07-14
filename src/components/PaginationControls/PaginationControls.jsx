import React from "react";
import { PagContrlsWrap, PaginationBtn } from "./PaginationControls.styled";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 2;
    const startPage = Math.max(
      1,
      Math.min(
        currentPage - Math.floor(maxVisiblePages / 2),
        totalPages - maxVisiblePages + 1,
      ),
    );
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    // if (startPage > 1) {
    //   pages.push(
    //     <PaginationBtn key="start-ellipsis" disabled>
    //       ...
    //     </PaginationBtn>,
    //   );
    // }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationBtn
          key={i}
          $isCurrentPage={currentPage === i}
          onClick={() => onPageChange(i)}
        >
          {i}
        </PaginationBtn>,
      );
    }

    if (endPage < totalPages) {
      pages.push(
        <PaginationBtn key="end-ellipsis" disabled>
          ...
        </PaginationBtn>,
      );
    }

    return pages;
  };

  return (
    <PagContrlsWrap>
      <PaginationBtn
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        <HiOutlineChevronDoubleRight />
      </PaginationBtn>
      <PaginationBtn
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <HiOutlineChevronRight />
      </PaginationBtn>
      {renderPageNumbers()}
      <PaginationBtn
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <HiOutlineChevronRight />
      </PaginationBtn>
      <PaginationBtn
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
      >
        <HiOutlineChevronDoubleRight />
      </PaginationBtn>
    </PagContrlsWrap>
  );
};

export default PaginationControls;
