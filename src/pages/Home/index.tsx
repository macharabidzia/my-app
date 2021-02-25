import React from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import './home.css';
import Posts from '../../containers/Posts';
import Comments from '../../containers/Comments';
const Home = () => {
  return (
    <div className="home">
      <Container>
        <Input type="text" />
        <br />
        <Row>
          <Col>
            <div className="home_postsWrapper">
              <Posts />
            </div>
          </Col>
          <Col>
            <div className="home_postsWrapper">
              <Comments />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
