import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'reactstrap';
const CustomCard = ({ data, onClick, title }: any) => {
  return (
    <Card style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Giorgi Matcharashvili
        </Card.Subtitle>
        <Card.Text>{data.body}</Card.Text>
        <Card.Link>
          <Button onClick={onClick}>{title}</Button>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
