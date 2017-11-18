import { fromJS } from 'immutable';

import ACTION_TYPES from '../actions/actionTypes';

export const initialState = fromJS({
  posts: [],
  totalResults: null,
  refresh: false,
  postsLoading: false,
});

export default function postsData(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.RECEIVE_POSTS: {
      console.log(action.posts);
      const totalResults = action.posts.length;
      const posts = fromJS(action.posts).sort(p => p._id);
      return state.withMutations(map => {
        map.set('posts', posts)
          .set('totalResults', totalResults)
          .set('refresh', false);
      });
    }
    case ACTION_TYPES.REFRESH_POSTS:
      return state.set('refresh', true);
    case ACTION_TYPES.TOGGLE_POSTS_LOADING:
      return state.set('postsLoading', !state.get('postsLoading'));
    case ACTION_TYPES.RESET_POSTS:
      return initialState;
    default:
      return state;
  }
}
