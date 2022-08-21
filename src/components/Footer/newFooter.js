import React from 'react'



const newFooter = () => {
    return (
        <>
            <footer className="mt-3 shadow  bg-primary" style={{color: 'white', marginTop: '2%', height: 'auto', border: '1px solid', borderColor: '#D3D3D3'}}>
                <div className="container">
                    <div className="row" >
                        <div className="col" style={{ margin: '3%' }}>
                            <h5>Quick Links</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="/anasayfa" class="nav-link p-0 text-white">AnaSayfa</a></li>
                                <li class="nav-item mb-2"><a href="/iletesim" class="nav-link p-0 text-white">Iletesim</a></li>
                                <li class="nav-item mb-2"><a href="/hakkimizda" class="nav-link p-0 text-white">Hakkimizda</a></li>
                                <li class="nav-item mb-2"><a href="yasaluyari" class="nav-link p-0 text-white">yasaluyari</a></li>
                            </ul>
                        </div>
                        <div className="col" style={{ margin: '3%' }}>
                            <h5>Hizmetler</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="/esnaflar" class="nav-link p-0 text-white">Esnaflar</a></li>
                                <li class="nav-item mb-2"><a href="/ogrenci" class="nav-link p-0 text-white">Ogrenci Ozel</a></li>
                                <li class="nav-item mb-2"><a href="/pazarpolitik" class="nav-link p-0 text-white">Pazarlama Politikası</a></li>
                                <li class="nav-item mb-2"><a href="/kariyer" class="nav-link p-0 text-white">Kariyer</a></li>
                            </ul>
                        </div>
                        <div className="col" style={{ margin: '3%' }}>
                            <h5>Hakkimizda</h5>
                            <p>Findme.com 2022 yılında bir Rehberlik Hizmeti şirketidir, internet sitesinin sahibidir.</p>
                        </div>
                        <div className="col" style={{ margin: '3%' }}>
                            <h5>Bize Ulasin</h5>
                            <p><img src='/placeholder.png' height="20px" width="20px" alt='' />Ünalan Mah. Libadiye Cad. No:82F, G Blok, Üsküdar<br />İstanbul, Üsküdar, 34700<br/>
                            952-2265-2255<br/>
                            destek@findmenetwork.com
                            </p>
                            
                        </div>
                    </div>

                </div>
                <div class="d-flex justify-content-center py-4 border-top" style={{ backgroundColor: 'black', color: 'white' }}>

                    <p>© 2021 Findme.com Network, Inc. Tüm hakları saklıdır..</p>
                    <a href='https://www.facebook.com/sharer.php?u=http://localhost:3000/anasayfa' target="_blank" rel="noopener noreferrer"><img src='/fbshare.png' alt='smallb' style={{ height: '16px', width: '16px', marginLeft: '10px' }} /></a>
                    <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer"><img src='./inshare.png' alt="SS" style={{ height: '16px', width: '16px', marginLeft: '10px' }} /></a>
                    <a href='https://www.twitter.com/' target="_blank" rel="noopener noreferrer"><img src='./twshare.png' alt="SS" style={{ height: '16px', width: '16px', marginLeft: '10px' }} /></a>
                </div>
            </footer>
        </>



    )
}

export default newFooter
