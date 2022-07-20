import SimpleImageSlider from "react-simple-image-slider";
import './slider.css';

const images = [
  { url: "https://siradisidigital.com/upload/yemek-fotografi-nasil-cekilir-ankara-dijital-ajans-siradisi-digital-5.jpg" },
  { url: "https://cdn.yemek.com/uploads/2015/08/yemek-yapan-insan-yaraticidir.jpg" },
  { url: "https://kemalseckin.com/images/gallery/Yemek-ve-Urun-Fotograflar/thumbs/3010-kemal-seckin-yemek-ve-urun-fotograflari-katibim.jpg" },
  
];

const slider = () => {
  return (
    <div className="slide_block">
      <SimpleImageSlider
        align="center"
        width={1000}
        height={550}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        loop={true}
        autoPlayDelay={2}
      />
    </div>
  )
}

export default slider