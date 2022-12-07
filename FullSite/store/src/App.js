import React from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Home from './Components/Home';

// Context
import UserProvider from './context';

// styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <Router>
    <UserProvider>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <GlobalStyle />
    </UserProvider>
  </Router>
);

export default App;
