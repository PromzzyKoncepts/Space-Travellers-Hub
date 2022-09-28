/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  try {
    const response = axios.get(baseUrl);
    return response;
  } catch (error) {
    return error;
  }
});

const initialState = {
  missions: [],
  loading: 'idle',
};

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => {
      state.missions = action.payload.data;
    });
  },
});

export default missionsSlice.reducer;
