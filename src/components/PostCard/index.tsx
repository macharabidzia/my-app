import React from 'react';
import Card from 'react-bootstrap/Card';
const PostCard = ({ data, onClick }: any) => {
  return (
    <Card style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Giorgi Matcharashvili
        </Card.Subtitle>
        <Card.Text>{data.body}</Card.Text>
        <Card.Link>
          <button onClick={onClick}>Comments</button>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
