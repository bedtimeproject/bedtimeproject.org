import React from "react";
import ReactPaginate from "react-paginate";

/**
 * @function Pagination
 * @description Styled pagination to use on different paginated elements
 * throughout the site
 * @param props The JSX props passed to this React component.
 * @param {Number} props.pageCount The number of pages to display with this
 * pagination
 * @param {Function} props.onPageChange The function to call when one of the
 * paginated elements is pressed, passing in the index of which one was pressed
 * @author Alexander Burdiss
 * @since 6/2/21
 * @version 1.0.0
 */
export default function Pagination({ pageCount, onPageChange }) {
  return (
    <div className="Pagination-Container">
      <ReactPaginate
        previousLabel={"< previous"}
        nextLabel={"next >"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
