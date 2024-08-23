import React from "react";
import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronRight,
} from "react-icons/hi";
import { useDeviceType } from "../../hooks/useDeviceType";
import {
  ArrowBtnsWrap,
  NumberBtnsWrap,
  PagContrlsWrap,
  PaginationBtn,
} from "./PaginationControls.styled";

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const deviceType = useDeviceType();
    const pages = [];
    const maxVisiblePages =
      deviceType === "desktop" ? 3 : deviceType === "tablet" ? 3 : 2;
    const startPage = Math.max(
      1,
      Math.min(
        currentPage - Math.floor(maxVisiblePages / 2),
        totalPages - maxVisiblePages + 1,
      ),
    );
    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

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
      <ArrowBtnsWrap>
        <PaginationBtn
          className="left icon"
          disabled={currentPage === 1}
          onClick={() => onPageChange(1)}
        >
          <HiOutlineChevronDoubleRight />
        </PaginationBtn>
        <PaginationBtn
          className="left icon"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <HiOutlineChevronRight />
        </PaginationBtn>
      </ArrowBtnsWrap>
      <NumberBtnsWrap>{renderPageNumbers()}</NumberBtnsWrap>
      <ArrowBtnsWrap>
        <PaginationBtn
          className="icon"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <HiOutlineChevronRight />
        </PaginationBtn>
        <PaginationBtn
          className="icon"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(totalPages)}
        >
          <HiOutlineChevronDoubleRight />
        </PaginationBtn>
      </ArrowBtnsWrap>
    </PagContrlsWrap>
  );
};

export default PaginationControls;
