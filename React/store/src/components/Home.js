import React from 'react';

// Config

// Components
import Header from './Header';
import HomeSort from './HomeSort';
import CarsGrid from './CarsGrid';
import CarThumb from './CarThumb';
import CarMain from './CarMain';
import Footer from './Footer';
import SignIn from './Signin';
import Cart from './Cart';
import Profile from './Profile';
import Checkout from './Checkout';

import { useHome } from '../States/useHome';


const Home = () => {

  const { 
    data,
    numItems,
    setNumItems,
    setData,
    filtered,
    filter,
    setFilter,
    sort,
    setSort,
    option,
    setOption,
    showing,
    setShowing,
    emptyItem
  } = useHome();

  console.log(data);

  return (
    <>
      <Header filter={ filter } setFilter={ setFilter } setOption={ setOption } showing={ showing } setShowing={ setShowing } />
      {showing === "profile" ? (
        <Profile option={ option } setOption={ setOption } setShowing={ setShowing } data={ data } setData={ setData } numItems={ numItems } setNumItems={ setNumItems } emptyItem={ emptyItem } />
      ) : showing === "signin" ? (
        <SignIn setShowing={ setShowing } />
      ) : showing === "cart" ? (
        <Cart setShowing={ setShowing } />
      ) : showing === "checkout" ? (
        <Checkout data={ data } setData={ setData } setShowing={ setShowing } />
      ) : (
        <>
          <HomeSort setSort={ setSort } sort={ sort } numFiltered={ filtered.length } />
          {showing === "home" ? (
            <CarsGrid>
              {filtered.map((car, id) => (
                <CarThumb 
                  key={id}
                  car={car}
                  setShowing={ setShowing }
                />
              ))}
            </CarsGrid>
          ) : (
            <CarMain car={ showing } setShowing={ setShowing } />
          )}
        </>
      )}
      <Footer showing={ showing } option={ option } filter={ filter } />
    </>    
  );
};

export default Home;
