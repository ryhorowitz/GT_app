import './App.css';
import Navbar from '../src/components/Navbar';
import Home from './components/Home';
import AddCase from './components/AddCase';
import Search from './components/search/Search';
import Update from './components/Update';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <h1>GT Case Status App</h1>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='add-case' element={<AddCase />} />
        <Route path='search' element={<Search />} />
        <Route path='update/:caseNumber' element={<Update/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
