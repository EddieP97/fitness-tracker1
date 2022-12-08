import fetchData from "./utils/fetchData.js"


const url = process.env.REACT_APP_SERVER_URL + '/post';

export const createPost = async (post, currentUser, dispatch, setPage) => {
    dispatch({ type: 'START_LOADING' });

    const result = await fetchData(
        { url, body: post, token: currentUser?.token },
        dispatch
      );
      if (result) {
        dispatch({
          type: 'UPDATE_ALERT',
          payload: {
            open: true,
            severity: 'success',
            message: 'The post has been added successfully',
          },
        });
        dispatch({type:'RESET_POST'})
        setPage(0)
    }
    dispatch({ type: 'END_LOADING' });
}