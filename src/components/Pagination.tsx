import React from "react";

type Props = {
  limit: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, onPageChange, limit }: Props) => {
  return (
    <div className="buttons">
      <button
        className="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        className="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === limit}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
