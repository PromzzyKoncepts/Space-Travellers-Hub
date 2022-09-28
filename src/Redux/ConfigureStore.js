import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionsReducer from './MissionScreen/missionscreen';
import postReducer from './RocketScreen/rocketscreen';

const store = configureStore({
  reducer: {
    post: postReducer,
    missions: missionsReducer,
  },
}, applyMiddleware(thunk));

export default store;
