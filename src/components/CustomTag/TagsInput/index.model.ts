export default interface ITagsInput {
  removeTags: (index: number) => void;
  addTags: (value: string) => void;
  tags: string[];
  onChange: (value: string) => void;
  inputValue: string;
}
