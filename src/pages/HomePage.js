
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Hero from '../components/Hero';
import Content from '../components/Content';

function HomePage(props) {

    return(
      <div>
      <Hero title={props.title} />
        <Container fluid={true}>
            <Row className="justify-content-center py-5">
                <Col md={8} sm={12}>
                  <img className="text-center" src={require('../content/olsen.jpg')} width={'100%'}/>
                </Col>
            </Row>
        </Container>
        <Hero subTitle={props.subTitle} />
      </div>

    );

}

export default HomePage;
