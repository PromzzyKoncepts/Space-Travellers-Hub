import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import postReducer from './RocketScreen/rocketscreen';

const store = configureStore({
  reducer: {
    post: postReducer,
  },
}, applyMiddleware(thunk));

export default store;
