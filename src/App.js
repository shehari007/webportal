import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,BrandBar} from './components';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
    

    import AnaSayfa from './pages/anasayfa';
    import Hakkinda from './pages/hakkinda';
    import Esnaflar from './pages/esnaflar';
    import Ogrenci from './pages/ogrenci';
    import Iletesim from './pages/iletesim'

function App() {
  return (
    <Router>
    <BrandBar/>  
    <Navbar />
   
    <Routes>
        <Route exact path='/' element={<AnaSayfa />} />
        <Route path='/Anasayfa' exact element={<AnaSayfa />} />
        <Route path='/hakkinda' element={<Hakkinda/>} />
        <Route path='/iletesim' element={<Iletesim/>} />
        <Route path='/esnaflar' element={<Esnaflar/>} />
        <Route path='/ogrenci' element={<Ogrenci/>} />
    </Routes>
    </Router>
  );
}

export default App;
