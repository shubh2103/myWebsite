import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Navigate , Routes } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/posts" element={<Home/>} />
          <Route path='/' element={<Navigate replace to="/posts" />} />
          <Route path="/posts/search" element={<Home/>} />
          <Route path="/posts/:id" element={<PostDetails/>} />
          <Route path="/auth" element={!user ? <Auth /> : <Navigate replace to="/posts" />} />
      </Routes>
      </Container>
  );
};

export default App;
