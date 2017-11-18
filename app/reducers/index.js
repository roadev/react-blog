import { combineReducers } from 'redux';
import postsData from './postsReducer';

const appReducer = combineReducers({
  postsData,
});

export default appReducer;
