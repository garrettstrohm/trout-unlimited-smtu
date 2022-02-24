import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.js'
import Login from './admin/Login';
import {Container} from './components/styled/Container.styled.js'

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={process.env.ADMIN_ROUTE} element={<Login />} />
      </Routes>
    </Container>
  );
}

export default App;
