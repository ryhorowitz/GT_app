import './App.css';
import Search from './components/Search';
import GetAll from './components/GetAll';
import Button from './components/Button';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Search/>
        <Button/>
        <GetAll/>
      </header>
      <div>
      </div>
    </div>
  );
}

export default App;
