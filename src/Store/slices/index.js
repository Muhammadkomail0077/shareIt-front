import {createSlice} from '@reduxjs/toolkit';
import {useEffect} from 'react';
// import { useEffect, useState } from 'react';

const initialState = {
  isdark: false,
  isMatch: false,
  yourProfile: false,
  IsEvent: false,
  userdata: [],
  googleData: [],
  albums: [],
};

export const counterSlice = createSlice({
  name: 'darkMode',
  // name: 'match',
  initialState,

  reducers: {
    isDark: (state, action) => {
      state.isdark = action.payload;
    },
    isMatch: (state, action) => {
      state.isMatch = action.payload;
    },
    yourProfile: (state, action) => {
      state.yourProfile = action.payload;
    },
    IsEvent: (state, action) => {
      state.IsEvent = action.payload;
    },
    UserData: (state, action) => {
      state.userdata = action.payload;
    },
    googleData: (state, action) => {
      state.googleData = action.payload;
    },
    Albums: (state, action) => {
      let a = [];
      if (state.albums.length > 0) {
        a = state.albums;
      }
      a.push(action.payload);
      state.albums = a;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  isDark,
  isMatch,
  yourProfile,
  IsEvent,
  UserData,
  googleData,
  Albums,
} = counterSlice.actions;

export default counterSlice.reducer;
