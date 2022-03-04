import {Navbar, Footer} from './components'
import GlobalStyle from './globalStyles';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/HomePage/Home';
import Join from './pages/Join/Join';
import ChapterHistory from './pages/ChapterHistory/ChapterHistory';
import About from './pages/About/About';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/history' element={<ChapterHistory />}/>
        <Route path='/join' element={<Join />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
