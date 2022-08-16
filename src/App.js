import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,BrandBar,Footer, Searchbar} from './components';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  

    import AnaSayfa from './pages/anasayfa';
    import Hakkinda from './pages/hakkinda';
    import Esnaflar from './pages/esnaflar';
    import Ogrenci from './pages/ogrenci';
    import Iletesim from './pages/iletesim';
    import Yasal from './pages/yasaluyari';
    import PazarPolitik from './pages/pazarpolitik';
    import Konaklama from './pages/konaklama';
    import Hakkimizda from './pages/hakkimizda';
    import Kariyer from './pages/kariyer';
    import AnderaDB from './pages/About_Pages/ANDERA_ab';
    import BardenOT from './pages/About_Pages/ornek';
    import PARKFIT from './pages/About_Pages/SIIRTFIT';


function App() {
  return (
    <><Router>
      <div>
        <BrandBar />
        <Navbar />
        <Searchbar/>
        <Routes>
          <Route exact path='/' element={<AnaSayfa />} />
          <Route path='/Anasayfa' exact element={<AnaSayfa />} />
          <Route path='/hakkinda' element={<Hakkinda />} />
          <Route path='/iletesim' element={<Iletesim />} />
          <Route path='/esnaflar' element={<Esnaflar />} />
          <Route path='/ogrenci' element={<Ogrenci />} />
          <Route path='/yasaluyari' element={<Yasal />} />
          <Route path='/pazarpolitik' element={<PazarPolitik />} />
          <Route path='/konaklama' element={<Konaklama />} />
          <Route path='/hakkimizda' element={<Hakkimizda />} />
          <Route path='/kariyer' element={<Kariyer />}/>
          <Route path='/andera_ab' element={<AnderaDB />} />
          <Route path='/hakkinda/:id' element={<BardenOT/>}/>
          <Route path='/siirt_park_fit' element={<PARKFIT />} />
        </Routes>

      </div>

    </Router><Footer/></>
  );
}

export default App;
