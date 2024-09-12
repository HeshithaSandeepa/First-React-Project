// import logo from './logo.svg';
import { useNavigate } from 'react-router-dom';
import './App.css';


function App() { //app component 

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome Heshitha</h1>
        <button className ='users-button' onClick ={() => navigate('/users')}>Users</button>
      </header>
    </div>
  );
}

export default App;
