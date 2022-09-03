// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/slices/filterSlice';

function Categories() {
  // { value, onClickCategory }
  // const [activePizza, setActivePizza] = useState(0);
  const value = useSelector((state) => state.filterSlice.categoryID);
  const dispatch = useDispatch();

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  // const addActiveClass = (index) => {
  //   onClickCategory(index);
  // };

  const li = categories.map((item, index) => {
    return (
      <li
        key={index}
        onClick={() => dispatch(setCategory(index))} // addActiveClass(index)
        className={value === index ? 'active' : ''}>
        {item}
      </li>
    );
  });

  return (
    <div className="categories">
      <ul>{li}</ul>
    </div>
  );
}

export default Categories;
