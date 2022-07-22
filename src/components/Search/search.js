import React from 'react'
import './search.css'
//import Container from 'react-bootstrap/Container';

const search = () => {
  return (
    <>
    {/*<Container>*/}
      <div className='search-container'>
      <div className='search-box'>
        <input type="search" placeholder="Sehir, konum, avmler yazsiniz..." className="search-input"></input>
      </div>
      <div>
        <button className="btn-search">Sonuc</button>
      </div>
    </div>
    {/*</Container>*/}
    </>
  )
}

export default search