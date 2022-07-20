//import logo from './logo.svg';
import './App.css';
import {Navbar,imgwtxt} from './components';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import iletesim from './pages/iletesim.js'    

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
      <Routes>
        
      <Route path='/iletesim' element={<iletesim/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
