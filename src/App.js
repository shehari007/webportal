import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,BrandBar,Footer,Searchbar} from './components';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
    

    import AnaSayfa from './pages/anasayfa';
    import Hakkinda from './pages/hakkinda';
    import Esnaflar from './pages/esnaflar';
    import Ogrenci from './pages/ogrenci';
    import Iletesim from './pages/iletesim';
    import Yasal from './pages/yasaluyari';
    import PazarPolitik from './pages/pazarpolitik';
    import Hakkimizda from './pages/hakkimizda';

function App() {
  return (
    <><Router>
      <div>
        <BrandBar />
        <Searchbar />
        <Navbar />
        
        
        

        <Routes>
          <Route exact path='/' element={<AnaSayfa />} />
          <Route path='/Anasayfa' exact element={<AnaSayfa />} />
          <Route path='/hakkinda' element={<Hakkinda />} />
          <Route path='/iletesim' element={<Iletesim />} />
          <Route path='/esnaflar' element={<Esnaflar />} />
          <Route path='/ogrenci' element={<Ogrenci />} />
          <Route path='/yasaluyari' element={<Yasal />} />
          <Route path='/pazarpolitik' element={<PazarPolitik />} />
          <Route path='/hakkimizda' element={<Hakkimizda />} />
        </Routes>

      </div>

    </Router><Footer /></>
  );
}

export default App;
