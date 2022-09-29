/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const FETCH = 'redux/RocketScreen/rocketscreen/FETCH';
const url = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = createAsyncThunk(FETCH, async () => fetch(url).then((res) => res.json()));
const rocketslice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    loading: 'idle',
  },
  reducers: {
    reserveRocket: (state, action) => {
      const rockets = state.rockets.map((item) => {
        if (item.id === action.payload) {
          item = { ...item, reserved: true };
          return item;
        }
        return item;
      });
      return { ...state, rockets };
    },
    leaveRocket: (state, action) => {
      const rockets = state.rockets.map((item) => {
        if (item.id === action.payload) {
          item = { ...item, reserved: false };
          return item;
        }
        return item;
      });
      return { ...state, rockets };
    },
  },
  extraReducers: {
    [fetchRockets.fulfilled]: (state, action) => {
      state.rockets = action.payload;
      state.loading = 'fulfiled';
    },
  },
});
export const { reserveRocket, leaveRocket } = rocketslice.actions;
export { fetchRockets };
export default rocketslice.reducer;
