export default interface ISuggestion {
  suggestions: string[];
  suggestionSelected: (suggestion: string) => void;
}
