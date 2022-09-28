/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://api.spacexdata.com/v3/missions";

export const getMissions = createAsyncThunk(
  "missions/getMissions",
  async () => {
    try {
      const response = axios.get(baseUrl);
      return response;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  missions: [],
  loading: "idle",
};

export const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    reserve: (state, action) => {
      const missions = state.missions.map((item) => {
        if (item.mission_id === action.payload) {
          item = { ...item, reserved: true };
          return item;
        }
        return item;
      });
      return { ...state, missions };
    },
    leave: (state, action) => {
      const missions = state.missions.map((item) => {
        if (item.mission_id === action.payload) {
          item = { ...item, reserved: false };
          return item;
        }
        return item;
      });
      return { ...state, missions };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, action) => {
      console.log(action.payload.data, "missions data");
      state.missions = action.payload.data;
      state.loading = "fulfiled";
    });
  },
});

export const { reserve, leave } = missionsSlice.actions;

export default missionsSlice.reducer;
