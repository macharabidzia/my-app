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
  );
};

export default Home;
