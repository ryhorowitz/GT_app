import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from "./img/GT-Logo.png"
import Search from './components/Search';
import GetAllButton from './components/GetAllButton';
import AddCase from './components/AddCase';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <AddCase/>
        <br></br>
        <Search/>
        <br></br>
        <br></br>
        <GetAllButton/>
      </header>
      {/* <div>
        <img className="logo" src={logo} alt="GT-Logo"></img>
      </div> */}
    </div>
  );
}

export default App;
