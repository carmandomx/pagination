import React, { useState } from "react";
import styles from "./../styles/Pagination.module.css";

interface Props {
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  function updateSecond() {
    pagesSecond[0] = 1;
    pagesSecond[1] = currentPage - 1;
    pagesSecond[2] = currentPage;
    pagesSecond[3] = currentPage + 1;
    pagesSecond[4] = 112;
  }

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
    updateSecond();
  };
  const pagesFirst = Array.from({ length: 4 }, (_, i) => i + 1);
  pagesFirst.push(112);

  const pagesSecond = Array.from({ length: 5 }, (_, i) => i + 1);
  updateSecond();

  const pagesThird = Array.from({ length: 5 }, (_, i) => i + 1);
  pagesThird[0] = 1;
  pagesThird[1] = 109;
  pagesThird[2] = 110;
  pagesThird[3] = 111;
  pagesThird[4] = 112;

  return (
    <div className={styles.pagination}>
      {currentPage < 4
        ? pagesFirst.map((page) => (
            <button
              key={page}
              className={`${styles["pagination-button"]} ${
                currentPage === page ? styles["pagination-button-active"] : ""
              }`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          ))
        : currentPage > 3 && currentPage < 110
        ? pagesSecond.map((page) => (
            <button
              key={page}
              className={`${styles["pagination-button"]} ${
                currentPage === page ? styles["pagination-button-active"] : ""
              }`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          ))
        : pagesThird.map((page) => (
            <button
              key={page}
              className={`${styles["pagination-button"]} ${
                currentPage === page ? styles["pagination-button-active"] : ""
              }`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          ))}
    </div>
  );
};

export default Pagination;
