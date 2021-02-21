import React from 'react';
import PostCard from '../../components/PostCard';
import { Container, Row, Col } from 'reactstrap';
import './home.css';
const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="home_postsWrapper">
            <PostCard />
          </div>
        </Col>
        <Col>
          <div className="home_commentsWrapper">
            <PostCard />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
