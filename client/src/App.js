import {Navbar, Footer} from './components'
import GlobalStyle from './globalStyles';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/HomePage/Home';
import Signup from './pages/SignUp/SignUp';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/sign-up' element={<Signup />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
