import React from 'react';
import Card from 'react-bootstrap/Card';
const CommentCard = ({ data }: any) => {
  return (
    <Card style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Giorgi Matcharashvili
        </Card.Subtitle>
        <Card.Text>{data.body}</Card.Text>
        <Card.Link href="#">Reply</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CommentCard;
