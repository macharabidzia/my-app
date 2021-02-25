import React, { useState } from 'react';
import { Button } from 'reactstrap';

import Suggestions from './Suggestions';
import TagsInput from './TagsInput';
import './style.css';
import { addTag } from '../../core/store/tags/actions';
import { useDispatch } from 'react-redux';
const CustomTag = ({ suggestions, commentId }: any) => {
  const [tags, setTags]: any = useState([]);
  const [currentSuggestions, setCurrentSuggestions] = useState([]);
  const [inputValue, setInputValue]: any = useState('');

  const dispatch = useDispatch();
  const onTextChange = (e: any) => {
    const value = e;
    let tempSuggetions: any = [];
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, 'i');
      tempSuggetions = suggestions.sort().filter((v: any) => regex.test(v));
    }
    setInputValue(value);
    setCurrentSuggestions(tempSuggetions);
  };

  const suggestionSelected = (suggestedValue: string) => {
    setCurrentSuggestions([]);
    addTags(suggestedValue);
  };

  const submitTags = () => {
    let tagObjects = tags.map((tag: any, index: number) =>
      Object.create({
        commentId,
        text: tag,
      })
    );
    setTags([]);
    dispatch(addTag(tagObjects));
  };
  const removeTags = (indexToRemove: any) => {
    setTags([
      ...tags.filter((_: any, index: number) => index !== indexToRemove),
    ]);
  };
  const addTags = (value: string) => {
    if (value !== '') {
      setTags([...tags, value]);
    }
    setInputValue('');
  };

  return (
    <div>
      <TagsInput
        inputValue={inputValue}
        onChange={onTextChange}
        tags={tags}
        addTags={addTags}
        removeTags={removeTags}
      />
      <Suggestions
        suggestions={currentSuggestions}
        suggestionSelected={suggestionSelected}
      />
      <br />
      &nbsp;
      <Button variant="primary" onClick={submitTags}>
        Add Tags
      </Button>
    </div>
  );
};

export default CustomTag;
