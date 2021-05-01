import _ from 'lodash';
import { createPortal } from 'react-dom';
import jsonPlaceholder from '../apis/jsonPlaceholder';


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts()); //fetchpost() here and this.props.fetchpost() in the component are different 
    // fetchpost() here: have to do manual dispatching!!
    // this.props.fetchpost(): auto dispatching, since it is modified by the connect function already 
    // need to dispatch(action_creator()) so that it will get passed to thunk, 
    // if not it will just returns a fucntion or an action
    // getState().posts is an array of objects
    // await: pause and wait for the posts to be fully fetched 

    // const userIds = _.uniq(_.map(getState().posts, 'userId')); // returns an array of just the userid as the elements
    // // uniq removes repeated elements in the array
    // // console.log(userIds);
    // userIds.forEach(id => dispatch(fetchUser(id)));

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
};



// dispatch(action) => will go to thunk first => if it is plain js object, 
// pass to reducer, if not invoke the async function (with dispatch as arg), the fucntion will 
// then invoke dispatch(action) and cycle repeats!!
// returns a function
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`users/${id}`);
    // dispatch the js object and this time the action will pass thunk test
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
};

// export const fetchUser = id => async dispatch => {
//     const response = await jsonPlaceholder.get(`users/${id}`);
//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     });
// };


// MEMOIZED APPROACH
// export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`users/${id}`);
//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     });
// });


// action creator (under thunk middleware):
// can return 
// 1. js object
// 2. function that invoke dispatch(action)

// flow:
// action creator
// dispatch(action)
// thunk decides whether it should be passed to reducer
// if function, thunk will invoke it by passing store.dispatch to it ie. func(dispatch)
// reducer updates the store

// dispatch(action) is going to update the store