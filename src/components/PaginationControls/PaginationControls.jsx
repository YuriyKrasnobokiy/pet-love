import React from "react";
import { PagContrlsWrap, PaginationBtn } from "./PaginationControls.styled";
import Icon from "../Icon/Icon";

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <PagContrlsWrap>
      <PaginationBtn
        disabled={currentPage === 1}
        onClick={() => onPageChange((currentPage = 1))}
      >
        <Icon name="icon-arrow" width={20} height={20} />
      </PaginationBtn>
      <PaginationBtn
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <Icon name="icon-arrow" width={20} height={20} />
      </PaginationBtn>
      <PaginationBtn
        disabled={currentPage === 1}
        onClick={() => onPageChange((currentPage = 1))}
      >
        1
      </PaginationBtn>
      <PaginationBtn
        disabled={currentPage > 2}
        onClick={() => onPageChange((currentPage = 2))}
      >
        2
      </PaginationBtn>
      <PaginationBtn disabled>...</PaginationBtn>
      <PaginationBtn
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <Icon name="icon-arrow" width={20} height={20} />
      </PaginationBtn>
      <PaginationBtn
        disabled={currentPage === totalPages}
        onClick={() => onPageChange((currentPage = totalPages))}
      >
        <Icon name="icon-arrow" width={20} height={20} />
      </PaginationBtn>
    </PagContrlsWrap>
  );
};

export default PaginationControls;
