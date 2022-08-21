//import React from 'react'
import './esnaflar.css';
import React from 'react'
import Database from '../components/Database/avmler_db';
import CAFELER from '../components/Database/kafeler_db';
import MARKET from '..//components/Database/marketler_db';
import Helmet from 'react-helmet';

const esnaflar = () => {
  return (
    <>
    <Helmet>
      <title>Tum Esnaflar</title>
    </Helmet>
    
    <Database />
    <MARKET/>
    <CAFELER/>
    </>
)
    
  
}

export default esnaflar