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

//import { useHome } from '../Hooks/useHome';
import { useHomeFetch } from '../Hooks/useHomeFetch';


const Home = () => {

  const {
    data,
    setData,
    users,
    setUsers,
    filtered,
    filter, 
    setFilter,
    sort,
    setSort,
    option,
    setOption,
    showing,
    setShowing,
    functions
  } = useHomeFetch();

  return (
    <>
      <Header filter={ filter } setFilter={ setFilter } setOption={ setOption } showing={ showing } setShowing={ setShowing } />
      {showing === "profile" ? (
        <Profile option={ option } setOption={ setOption } setShowing={ setShowing } data={ data } setData={ setData } functions={ functions } users={ users } setUsers={ setUsers } />
      ) : showing === "signin" ? (
        <SignIn setShowing={ setShowing } functions={ functions } />
      ) : showing === "cart" ? (
        <Cart setShowing={ setShowing } />
      ) : showing === "checkout" ? (
        <Checkout data={ data } setData={ setData } setShowing={ setShowing } functions={ functions } />
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
      <Footer showing={ showing } option={ option } filter={ filter } users={ users } data={ data } />
    </>    
  );
};

export default Home;
