import './App.css';
import Data from './components/Data'
import Search from './components/Search'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Search/>
        <Data/>
      </header>
      <div>
      </div>
    </div>
  );
}

export default App;
