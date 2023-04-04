import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Carousels = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='carsouel__item'>
        <img
          className='d-block w-full '
          src='https://mediaserver.goepson.com/ImConvServlet/imconv/88956a3dc155c11c8b460301e7cf23b968e68d47/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=L121%20%283%29'
          alt='Printer Epson'
        />
      </Carousel.Item>
      <Carousel.Item className='carsouel__item'>
        <img
          className='d-block w-full '
          src='https://www.promediacom.id/wp-content/uploads/2020/07/Dengan-Memiliki-Printer-Canon-Pixma-Anda-Akan-Merasakan-Kelebihan-kelebihan-Ini.jpg'
          alt='Printer Canon'
        />
      </Carousel.Item>
      <Carousel.Item className='carsouel__item'>
        <img
          className='d-block w-full '
          src='https://www.astrocomputer.com/image-product/img2017-1613117918.jpg'
          alt='Printer Hp'
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
