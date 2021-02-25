import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { commentsListReducer } from './comments/reducer';
import { postsListReducer } from './posts/reducer';
import { repliesListReducer } from './replies/reducer';
import { tagsReducer } from './tags/reducer';
import { suggestionsReducer } from './suggestions/reducer';
import { usersReducer } from './users/reducer';
const reducer = combineReducers({
  comments: commentsListReducer,
  posts: postsListReducer,
  replies: repliesListReducer,
  tags: tagsReducer,
  suggestions: suggestionsReducer,
  users: usersReducer,
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
