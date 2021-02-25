import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
const Suggestions = ({ suggestions, suggestionSelected }: any) => {
  if (suggestions.length === 0) {
    return null;
  }
  return (
    <ListGroup>
      {suggestions.map((item: any, index: number) => (
        <ListGroupItem onClick={() => suggestionSelected(item)} key={index}>
          {item}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Suggestions;
