import React from 'react';
import { Input } from 'reactstrap';
import './style.css';
const TagsInput = (props: any) => {
  const { removeTags, addTags, tags, onChange, inputValue } = props;
  return (
    <div className="tags-input">
      <ul id="tags">
        {tags.map((tag: any, index: number) => (
          <li key={index} className="tag">
            <span className="tag-title">{tag}</span>
            <span className="tag-close-icon" onClick={() => removeTags(index)}>
              x
            </span>
          </li>
        ))}
      </ul>
      <Input
        type="text"
        onKeyUp={(event: any) =>
          event.key === 'Enter' && addTags(event.target.value)
        }
        value={inputValue}
        onChange={(event: any) => onChange(event.target.value)}
        placeholder="Press enter to add tags"
      />
    </div>
  );
};
export default TagsInput;
