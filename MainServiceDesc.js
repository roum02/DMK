import React from 'react';

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from 'reactstrap';

import { useHistory } from 'react-router-dom';

import imgA from 'assets/img/main/mainOpenProcess1.jpg';
import imgB from 'assets/img/main/mainOpenProcess2.jpg';
import imgC from 'assets/img/main/mainOpenProcess3.JPG';
import imgD from 'assets/img/main/mainOpenProcess4.jpg';

export default function MainServiceDesc() {
  const history = useHistory();

  return (
    <>
      <div className='section'>
        <section className='projects-3 mt-3'>
          <Container>
            <Row>
              <Col
                className='ml-auto mr-auto text-dark text-center mb-5'
                md='8'
              >
                <div className='display-5 font-weight-900 mb-2 m-h2'>
                  오픈과정
                </div>
                {/* <div>마케팅 실무자들의 고민을 담아 만들었습니다.</div>
								<div>마케팅 건강검진부터 기획, 이행, 성과측정까지</div>
								<div>데이터마케팅 전 영역에 걸쳐 체게적인 교육 커리큘럼을 제공합니다.</div> */}
              </Col>
            </Row>

            <Row className='justify-content-center align-items-end'>
              <Col sm='12' md='6' lg='6'>
                <div className='image p-2 mobile-content-center text-right'>
                  <img
                    src={imgD}
                    className='img-fluid rounded shadow w-75'
                    alt='...'
                  />
                </div>
              </Col>
              <Col sm='12' md='6' lg='6' className='mobile-content-center'>
                <div className='font-weight-900 h5 text-skew m-m-b-3 m-m-t-half mobile-font-size-1'>
                  마케팅, 이제 더 이상 감으로 하지 마세요
                </div>
                <div className='h5 text-skew m-d-n'>
                  사람들의 행동을 데이터로 확인하고, <br />
                  이를 통해 마케팅 의사 결정이 이루어지는
                  <br />
                  '데이터마케팅 시대'가 도래했습니다
                </div>
              </Col>
            </Row>
            <Row className='justify-content-center align-items-end flex-xs-wrap-reverse'>
              <Col sm='12' md='6' lg='6' className=''>
                <div className='font-weight-900 h5 text-right mobile-content-center text-skew m-m-b-3 m-m-t-half mobile-font-size-1'>
                  데이터는 결합할수록 큰 힘이 됩니다
                </div>
                <div className='h5 text-right mobile-content-center text-skew m-d-n'>
                  마케터들은 결합된 데이터를
                  <br /> 소비자 구매 여정(CDJ)에 따라 분석하고,
                  <br />
                  마케팅 인사이트를 도출 할 수 있어야 합니다.
                </div>
              </Col>
              <Col sm='12' md='6' lg='6'>
                <div className='image p-2 text-left mobile-content-center'>
                  <img
                    src={imgC}
                    className='img-fluid rounded shadow w-75'
                    alt='...'
                  />
                </div>
              </Col>
            </Row>
            <Row className='justify-content-center align-items-end'>
              <Col sm='12' md='6' lg='6'>
                <div className='image p-2 text-right mobile-content-center'>
                  <img
                    src={imgB}
                    className='img-fluid rounded shadow w-75'
                    alt='...'
                  />
                </div>
              </Col>
              <Col sm='12' md='6' lg='6' className='mobile-content-center'>
                <div className='font-weight-900 h5 text-skew m-m-t-half mobile-font-size-1'>
                  풍부한 경험의 전문가 그룹
                </div>
                <div className='h5 text-skew m-d-n'>
                  데이터마케팅캠퍼스는 교육·데이터·마케팅
                  <br />
                  전문가가 모인 그룹입니다. 다년간의 프로젝트
                  <br />
                  교육 경험을 바탕으로 축적된 전문지식을
                  <br />
                  여러분께 그대로 전달해드리겠습니다
                </div>
              </Col>
            </Row>
            <div className='text-center mt-4'>
              <Row className='justify-content-center'>
                <Col lg='3' md='3' xs='7'>
                  <Button
                    className='btn btn-round my-3 w-100'
                    onClick={() => history.push('/openProcess')}
                    color='secondary'
                  >
                    <div className='font-weight-900 text-dark text-skew'>
                      DM9 정규과정 자세히 보기
                    </div>
                  </Button>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
