import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddCase from './components/AddCase';
import Search from './components/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}/>
        <Route exact path='/search' element={<Search />} />
        <Route path='/add-case' element={<AddCase />} />
      </Routes>
  </Router>
);

reportWebVitals();
