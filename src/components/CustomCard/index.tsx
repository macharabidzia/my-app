import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Input } from 'reactstrap';
import ICustomCard from './index.model';

enum CardTypes {
  comment = 'comment',
  post = 'post',
}
const CustomCard: React.FC<ICustomCard> = (props: ICustomCard) => {
  const { data, onClick, title, type, children, user } = props;

  const [value, setValue] = useState('');
  return (
    <Card className="card">
      <Card.Body>
        <Card.Title>
          {type === CardTypes.post ? data.title : data.name}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {user ? user.name : data.email}
        </Card.Subtitle>
        <Card.Text>{data.body}</Card.Text>
        {type === CardTypes.post && (
          <Card.Link>
            <Button onClick={onClick}>{title}</Button>
          </Card.Link>
        )}
        {children}
      </Card.Body>
      {type === CardTypes.comment && (
        <Card.Footer>
          <Input
            value={value}
            onChange={(e: any) => setValue(e.target.value)}
            type="text"
          />
          <br />
          <Button onClick={(e) => onClick(e, value, data.id)}>Reply</Button>
        </Card.Footer>
      )}
    </Card>
  );
};

export default CustomCard;
