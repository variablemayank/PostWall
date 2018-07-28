    import { bindActionCreators } from 'redux';
    import { connect } from 'react-redux';
    import * as actions from '../redux/action'
    import Main from './Main'
    import {withRouter } from 'react-router';

    function mapStateToProps(state, ownProps) {
     return {
     posts: state.posts,
     comments: state.comments
     }
    }
    function mapDispachToProps(dispatch) {
     return bindActionCreators(actions, dispatch);
    }
    const App = withRouter(connect(mapStateToProps, mapDispachToProps)(Main));


    export default App;
