import './App.css';
import Search from './components/Search'
import GetAll from './components/GetAll';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Search/>
        <GetAll/>
      </header>
      <div>
      </div>
    </div>
  );
}

export default App;
