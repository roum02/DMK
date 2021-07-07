import React from 'react';
import {
  UncontrolledCarousel,
  Row,
  Col,
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
} from 'reactstrap';

import imgA from 'assets/img/main/main_section1.JPG';
import imgB from 'assets/img/main/main_section2.jpg';
import imgC from 'assets/img/main/main_section3.JPG';
import imgD from 'assets/img/main/main_section4.JPG';
import imgE from 'assets/img/main/main_section5.jpg';
import imgF from 'assets/img/main/main_section6.jpg';
// import imgA from "assets/img/dmkhall/main_1.png";
// import imgB from "assets/img/dmkhall/main_2.png";
// import imgC from "assets/img/dmkhall/main_3.png";
// import imgD from "assets/img/dmkhall/main_4.png";
import { useHistory } from 'react-router-dom';

const items = [
  {
    src: imgA,
    altText: 'Slide 1',
    caption: '',
    header: '',
    key: '1',
  },
  {
    src: imgB,
    altText: 'Slide 2',
    caption: '',
    header: '',
    key: '2',
  },
  {
    src: imgC,
    altText: 'Slide 3',
    caption: '',
    header: '',
    key: '3',
  },
  {
    src: imgD,
    altText: 'Slide 4',
    caption: '',
    header: '',
    key: '4',
  },
  {
    src: imgE,
    altText: 'Slide 5',
    caption: '',
    header: '',
    key: '5',
  },
  {
    src: imgF,
    altText: 'Slide 6',
    caption: '',
    header: '',
    key: '6',
  },
];

function MinSectionCarousel() {
  const history = useHistory();
  return (
    <Container>
      <div className='text-center'>
        <div className='h1 font-weight-900 mb-3 m-h2'>데마코홀</div>
        <div className='mb-3 h5 mobile-font-size-1 m-m-b-0'>
          대형 LED 스크린으로 ON · OFF 모두 생생하게!
        </div>
        <div className='mobile-font-size-1'>선릉역 초역세권 다목적 공간!</div>
      </div>
      <Row className='pt-4'>
        <Col lg='10' md='6' xs='10' className='mx-auto'>
          <UncontrolledCarousel className='' items={items} />
        </Col>
      </Row>
      <div className='text-center mt-4'>
        <Row className='justify-content-center'>
          <Col lg='3' md='4' xs='7'>
            <Button
              type='button'
              className='btn btn-round my-3 w-85 h-65'
              onClick={() => history.push('/openProcess')}
              color='secondary'
            >
              <div className='font-weight-900 text-skew'>
                데마코홀 자세히 보기
              </div>
            </Button>
          </Col>
        </Row>
      </div>
      {/*      
      <Row className="justify-content-center mt-5">
        <Button
          type="button"
          className="btn btn-round"
          onClick={() => history.push("/dmkhall/")}
        >
          <div className="font-weight-900 text-skew">데마코홀 자세히 보기</div>
        </Button>
      </Row>
*/}
    </Container>
  );
}

export default MinSectionCarousel;
