import './App.css';
import Navbar from '../src/components/Navbar';
import Home from './components/Home';
import AddCase from './components/AddCase';
import Search from './components/Search';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <h1>GT Case Status App</h1>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-case' element={<AddCase />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
