import './App.css';
import Navbar from '../src/components/Navbar';
import Home from './components/Home';
import AddCase from './components/AddCase';
import Search from './components/search/Search';
import CaseFileSearch from './components/search/CaseFileSearch';
import NameSearch from './components/search/NameSearch';
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
        <Route path='search' element={<Search />}>
          <Route path='name' element={<NameSearch />}/>
          <Route path='case-number' element={<CaseFileSearch />}/>
        </Route>

      </Routes>
    </div>
    </>
  );
}

export default App;
