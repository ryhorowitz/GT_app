import './App.css';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <h1>GT Case Status App</h1>
    <nav>
      <Link to='/search'>Search</Link>
      <Link to='/add-case'>Add Case</Link>
    </nav>  
    <Outlet/>
    </>
  );
}

export default App;
