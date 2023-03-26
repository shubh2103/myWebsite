import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App = () => (
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/auth' element={<Auth/>} />
      </Routes>
    </Container>
);
export default App;
