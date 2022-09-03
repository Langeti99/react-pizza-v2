import { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setPages } from '../redux/slices/filterSlice';

import { searchContext } from '../App';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

const Home = () => {
  const { searchValue } = useContext(searchContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const { sort, categoryID, currentPage } = useSelector((state) => state.filterSlice);

  useEffect(() => {
    setIsLoading(true);

    const categoryStr = categoryID > 0 ? `category=${categoryID}` : ``;
    const searchWord = searchValue ? `&search=${searchValue}` : ``;

    axios
      .get(
        `https://62e553f820afdf238d7b0b62.mockapi.io/Items?page=${currentPage}&limit=4&${categoryStr}&sortBy=${sort.sortProperty}&order=${sort.order}${searchWord}`,
      )
      .then((res) => {
        setItems(res.data.items);
        dispatch(setPages(res.data.count));
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryID, sort, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryID} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => {
              return <Skeleton key={index} />;
            })
          : items
              .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((item) => {
                return <PizzaBlock key={item.id} {...item} />;
              })}
      </div>
      <Pagination />
    </div>
  );
};

export default Home;
