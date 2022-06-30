import './App.css';
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
        <GetAllButton/>
      </header>
      <div>
      </div>
    </div>
  );
}

export default App;
