import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.js'
import Login from './admin/Login';
import AboutPage from './components/AboutPage.js';
import HistoryPage from './components/HistoryPage.js';
import {Container} from './components/styled/Container.styled.js'

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={process.env.ADMIN_ROUTE} element={<Login />} />
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/history' element={<HistoryPage />}/>
      </Routes>
    </Container>
  );
}

export default App;
