/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const FETCH = 'redux/RocketScreen/rocketscreen/FETCH';
const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(FETCH,
  async () => fetch(url).then((res) => res.json()));
const postSlice = createSlice(({
  name: 'posts',
  initialState: {
    posts: [],
    loading: 'idle',
  },
  extraReducers: {
    [fetchRockets.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.loading = 'fulfiled';
    },
  },
}));
export default postSlice.reducer;
