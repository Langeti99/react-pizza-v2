import style from './pagination.module.scss';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/filterSlice';

const Pagination = () => {
  const { currentPage, pages } = useSelector((state) => state.filterSlice);

  const dispatch = useDispatch();

  return (
    <ReactPaginate
      className={style.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => dispatch(setCurrentPage(event.selected + 1))}
      pageRangeDisplayed={4}
      forcePage={currentPage - 1}
      pageCount={Math.ceil(pages / 4)} //
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
