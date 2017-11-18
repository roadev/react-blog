import { AsyncStorage } from 'react-native';

export const receivePosts = (posts) => (
  {
    type: 'RECEIVE_POSTS',
    posts,
  }
);

export const refreshPosts = () => (
  {
    type: 'REFRESH_POSTS',
  }
);

export const togglePostsLoading = () => ({
  type: 'TOGGLE_POSTS_LOADING',
});

export function createPost(post) {
  return async (dispatch) => {
    try {
      const loans = JSON.parse(await AsyncStorage.getItem('loans'));
      if (loans) {
        const newLoans = posts.concat(post);
        console.log('concat create', newLoans);
        await AsyncStorage.setItem('loans', JSON.stringify(newLoans));
      } else {
        const newLoans = (JSON.stringify([loan]));
        console.log('new create', newLoans);
        await AsyncStorage.setItem('loans', newLoans);
      }
    } catch (error) {
      console.log('error', error);
    }
    dispatch(refreshLoans());
  };
}

export function fetchUsers() {
  return (dispatch) => {
    dispatch(toggleUsersLoading());
    return fetch('http://localhost:3000/posts', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(json => {
      dispatch(receivePosts(json.posts, json.total_results));
      dispatch(togglePostsLoading());
    });
  };
}
