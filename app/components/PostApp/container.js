import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Posts from './Posts';
import {
  getPosts,
  createPost,
} from '../../actions';

const mapStateToProps = (state) => ({
  postsData: state.postsData,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getPosts,
    createPost,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
