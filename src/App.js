import logo from './logo.svg';
import './App.css';
import Lock from './lockicon';
import SignData from './signdata';
import Please from './please';
import SignIn from './signin';
import backGround from './background';

function App() {
  return(
    <div className="App">
      <div>{ Please() }</div>
      <div>{ Lock() }</div>
      <div>{ SignData() }</div>
      <div>{ SignIn() }</div>
    </div>
  );
}

export default App;
