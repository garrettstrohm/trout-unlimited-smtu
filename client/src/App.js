import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js'
import Login from './admin/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={process.env.ADMIN_ROUTE} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
