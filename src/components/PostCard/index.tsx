import React from 'react';
import Card from 'react-bootstrap/Card';
const PostCard = () => {
  return (
    <Card style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title>How to Survive a survival</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Giorgi Matcharashvili
        </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Comments</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
