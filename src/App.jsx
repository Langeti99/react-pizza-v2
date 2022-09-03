import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import NotFoundBlock from './components/NotFoundBlock';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { useState, createContext } from 'react';

import './scss/app.scss';

export const searchContext = createContext('');

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <searchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFoundBlock />} />
            {/* <Home /> */}
            {/* <NotFoundBlock /> */}
          </Routes>
        </div>
      </div>
    </searchContext.Provider>
  );
}

export default App;
