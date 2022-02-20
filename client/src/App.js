import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js'
import Login from './admin/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={process.env.REACT_APP_API_KEY} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
