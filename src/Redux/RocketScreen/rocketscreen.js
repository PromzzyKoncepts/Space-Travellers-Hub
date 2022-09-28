/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const FETCH = 'redux/RocketScreen/rocketscreen/FETCH';
const url = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = createAsyncThunk(FETCH, async () => fetch(url).then((res) => res.json()));
const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: 'idle',
  },
  reducers: {
    reserveRocket: (state, action) => {
      const posts = state.posts.map((item) => {
        if (item.id === action.payload) {
          item = { ...item, reserved: true };
          return item;
        }
        return item;
      });
      return { ...state, posts };
    },
    leaveRocket: (state, action) => {
      const posts = state.posts.map((item) => {
        if (item.id === action.payload) {
          item = { ...item, reserved: false };
          return item;
        }
        return item;
      });
      return { ...state, posts };
    },
  },
  extraReducers: {
    [fetchRockets.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.loading = 'fulfiled';
    },
  },
});
export const { reserveRocket, leaveRocket } = postSlice.actions;
export { fetchRockets };
export default postSlice.reducer;
