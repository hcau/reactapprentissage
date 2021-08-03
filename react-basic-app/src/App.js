import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Message from './Message';


function App() {
  return(
    <div>
      <Welcome name="john"/>
      <Message message="React is great"/>
    </div>
  );
}

export default App;
