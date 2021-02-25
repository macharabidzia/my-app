import React, { useState } from 'react';
import { Button } from 'reactstrap';

import Suggestions from './Suggestions';
import TagsInput from './TagsInput';
import './style.css';
import { addTag } from '../../core/store/tags/actions';
import { useDispatch } from 'react-redux';
import ICustomTag from './index.model';
import ITag from '../../core/models/tag.model';
const CustomTag = (props: ICustomTag) => {
  const { suggestions, commentId } = props;
  const [tags, setTags] = useState<string[]>([]);
  const [currentSuggestions, setCurrentSuggestions] = useState<string[]>([]);
  const [inputValue, setInputValue]: any = useState('');

  const dispatch = useDispatch();
  const onTextChange = (e: any) => {
    const value = e;
    let tempSuggetions: string[] = [];
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
    const tagObjects: ITag[] = tags.map((tag: string, index: number) =>
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
      ...tags.filter((tag: string, index: number) => index !== indexToRemove),
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
