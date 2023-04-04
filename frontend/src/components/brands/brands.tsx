import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Brands = () => {
  const images = [
    'logo-brother.png',
    'logo-canon.png',
    'logo-epson.png',
    'logo-fuji.png',
    '',
  ];
  return (
    <section className='bg-light py-5'>
      <Container className=' my-4'>
        <Row className=' text-center py-3'>
          <Col lg={6} className='m-auto'>
            <h1 className='h1'>Our Brands</h1>
            <p>The best brands in the markets</p>
          </Col>
          <Col lg={9} className='m-auto tempaltemo-carousel'>
            <Row className='d-flex flex-row'>
              {/*Controls*/}
              <Col className='col-1 align-self-center'>
                <a
                  className='h1'
                  href='#templatemo-slide-brand'
                  role='button'
                  data-bs-slide='prev'
                >
                  <FaArrowLeft size={'1.2rem'} />
                </a>
              </Col>
              {/*End Controls*/}
              {/*Carousel Wrapper*/}
              <div className='col'>
                <div
                  className='carousel slide carousel-multi-item pt-2 pt-md-0'
                  id='templatemo-slide-brand'
                  data-bs-ride='carousel'
                >
                  {/*Slides*/}
                  <div
                    className='carousel-inner product-links-wap'
                    role='listbox'
                  >
                    {/*First slide*/}
                    <div className='carousel-item active'>
                      <div className='row'>
                        <div className='col-3 p-md-5'>
                          <a href='#'>
                            <img
                              className='img-fluid brand-img'
                              src='/images/logo-brother.png'
                              alt='logo brother'
                            />
                          </a>
                        </div>
                        <div className='col-3 p-md-5'>
                          <a href='#'>
                            <img
                              className='img-fluid brand-img'
                              src='/images/logo-canon.png'
                              alt='logo canon'
                            />
                          </a>
                        </div>
                        <div className='col-3 p-md-5'>
                          <a href='#'>
                            <img
                              className='img-fluid brand-img'
                              src='/images/logo-epson.png'
                              alt='epson Logo'
                            />
                          </a>
                        </div>
                        <div className='col-3 p-md-5'>
                          <a href='#'>
                            <img
                              className='img-fluid brand-img'
                              src='/images/logo-fuji.png'
                              alt='fuji Logo'
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*End First slide*/}
                    {/*Second slide*/}
                    <div className='carousel-item'>
                      <div className='row'>
                        <div className='col-3 p-md-5'>
                          <a href='#'>
                            <img
                              className='img-fluid brand-img'
                              src='/images/logo-hp.png'
                              alt='hp Logo'
                            />
                          </a>
                        </div>
                        <div className='col-3 p-md-5'>
                          <a href='#'>
                            <img
                              className='img-fluid brand-img'
                              src='/images/logo-kodak.png'
                              alt='kodak Logo'
                            />
                          </a>
                        </div>
                        <div className='col-3 p-md-5'>
                          <a href='#'>
                            <img
                              className='img-fluid brand-img'
                              src='/images/logo-panasonic.png'
                              alt='panasonic Logo'
                            />
                          </a>
                        </div>
                        <div className='col-3 p-md-5'>
                          <a href='#'>
                            <img
                              className='img-fluid brand-img'
                              src='/images/logo-samsung.png'
                              alt='samsung Logo'
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*End Second slide*/}
                  </div>
                  {/*End Slides*/}
                </div>
              </div>
              {/*End Carousel Wrapper*/}
              {/*Controls*/}
              <div className='col-1 align-self-center'>
                <a
                  className='h1'
                  href='#templatemo-slide-brand'
                  role='button'
                  data-bs-slide='next'
                >
                  <FaArrowRight size={'1.2rem'} />
                </a>
              </div>
              {/*End Controls*/}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Brands;
