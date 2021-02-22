import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './home.css';
import Posts from '../../containers/Posts';
import Comments from '../../containers/Comments';
const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Posts />
        </Col>
        <Col>
          <Comments />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
