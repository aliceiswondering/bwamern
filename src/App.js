import React from "react";
import { Routes, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import 'assets/scss/style.scss';
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage_";
import Checkout from "pages/Checkout";
import {  ToastContainer } from 'react-toastify';
import NotFound from 'pages/NotFound'

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
})

function App() {
  return (
    <div className="App">
        <Routes history={history} basename={process.env.PUBLIC_URL}>
          <Route exact path="/" element={<LandingPage/>} />
          <Route  exact path="/properties/:id" element={<DetailsPage/>} />
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>

        <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
