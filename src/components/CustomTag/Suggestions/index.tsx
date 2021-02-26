import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ISuggestion from './index.model';
const Suggestions = (props: ISuggestion) => {
  const { suggestions, suggestionSelected } = props;
  if (suggestions.length === 0) {
    return null;
  }
  return (
    <ListGroup>
      {suggestions.map((suggestion: string, index: number) => (
        <ListGroupItem
          onClick={() => suggestionSelected(suggestion)}
          key={index}
        >
          {suggestion}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Suggestions;
