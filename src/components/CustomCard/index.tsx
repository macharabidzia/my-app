import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Input } from 'reactstrap';

enum CardTypes {
  comment = 'comment',
  post = 'post',
}
const CustomCard = ({ data, onClick, title, type }: any) => {
  return (
    <Card className="card">
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Giorgi Matcharashvili
        </Card.Subtitle>
        <Card.Text>{data.body}</Card.Text>
        {type === CardTypes.post && (
          <Card.Link>
            <Button onClick={onClick}>{title}</Button>
          </Card.Link>
        )}
      </Card.Body>
      {type === CardTypes.comment && (
        <Card.Footer>
          <Input type="text" />
          <br />
          <Button onClick={onClick}>Reply</Button>
        </Card.Footer>
      )}
    </Card>
  );
};

export default CustomCard;
