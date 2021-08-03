import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Message from './Message';
import Clock from './Clock';


function App() {
  return(
    <div>
      <Clock date={new Date()}/>
    </div>
  );
}

export default App;
