import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionsReducer from './MissionScreen/missionscreen';
import rocketsReducer from './RocketScreen/rocketscreen';

const store = configureStore({
  reducer: {
    rocket: rocketsReducer,
    missions: missionsReducer,
  },
}, applyMiddleware(thunk));

export default store;
