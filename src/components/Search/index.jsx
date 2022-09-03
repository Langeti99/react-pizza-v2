import { useContext } from 'react';
import debounce from 'lodash.debounce';
import { searchContext } from '../../App';
import { useRef, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/filterSlice';

import style from './search.module.scss';

const Search = () => {
  const [value, setValue] = useState('');
  const { setSearchValue } = useContext(searchContext);
  const inputRef = useRef();
  const dispatch = useDispatch();

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
      dispatch(setCurrentPage(1));
    }, 300),
    [],
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  return (
    <div className={style.root}>
      <svg
        className={style.icon}
        enableBackground="new 0 0 32 32"
        id="Editable-line"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
      <input
        ref={inputRef}
        className={style.input}
        value={value}
        onChange={onChangeInput}
        placeholder="Пошук піцци..."
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={style.iconClose}
          enableBackground="new 0 0 128 128"
          height="128px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 128 128"
          width="128px"
          xmlns="http://www.w3.org/2000/svg">
          <g>
            <g>
              <path d="M84.815,43.399c-0.781-0.782-2.047-0.782-2.828,0L64.032,61.356L46.077,43.399c-0.781-0.782-2.047-0.782-2.828,0    c-0.781,0.781-0.781,2.047,0,2.828l17.955,17.957L43.249,82.141c-0.781,0.78-0.781,2.047,0,2.828    c0.391,0.39,0.902,0.585,1.414,0.585s1.023-0.195,1.414-0.585l17.955-17.956l17.955,17.956c0.391,0.39,0.902,0.585,1.414,0.585    s1.023-0.195,1.414-0.585c0.781-0.781,0.781-2.048,0-2.828L66.86,64.184l17.955-17.957C85.597,45.447,85.597,44.18,84.815,43.399z     M64.032,14.054c-27.642,0-50.129,22.487-50.129,50.127c0.002,27.643,22.491,50.131,50.133,50.131    c27.639,0,50.125-22.489,50.125-50.131C114.161,36.541,91.674,14.054,64.032,14.054z M64.036,110.313h-0.002    c-25.435,0-46.129-20.695-46.131-46.131c0-25.435,20.693-46.127,46.129-46.127s46.129,20.693,46.129,46.127    C110.161,89.617,89.47,110.313,64.036,110.313z" />
            </g>
          </g>
        </svg>
      )}
    </div>
  );
};

export default Search;
