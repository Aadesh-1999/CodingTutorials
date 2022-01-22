import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /><br />
        <p className='m-3'>
        <h2  className="dots">Coming Soon...</h2><br />
        <h4 className="dots">Stay Tuned...</h4><br />
        <h5>Follow on <a href="https://twitter.com/aadesh_codes" className='App-link'>Twitter</a></h5>
        </p>
      </header>
    </div>
  );
}

export default App;
