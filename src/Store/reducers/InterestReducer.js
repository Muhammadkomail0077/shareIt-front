import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {BASE_URL, PRIMARY_BASE_URL} from '../../App/api';
import {getRequest} from '../../App/fetch';

const initialState = {
  interest: {},
  error: '',
  status: '',
};

// POST REQUEST
export const getInterest = createAsyncThunk('getInterest', async () => {
  const result = await getRequest(`${BASE_URL}/getInterest`);
  return result;
});

const InterestReducer = createSlice({
  name: 'InterestReducer',
  initialState,
  reducers: {
    interestDataUpdateLocally: (state, action) => {
      state.interest = action.payload;
    },
    interestDataRemoveLocally: (state, action) => {
      state.interest = {};
    },
  },
  extraReducers: {
    [getInterest.pending]: (state, action) => {
      state.status = 'pending';
    },
    [getInterest.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
    [getInterest.fulfilled]: (state, action) => {
      state.interest = action.payload
      state.status = 'ok';
      state.error = 'none';
    },
  },
});

export default InterestReducer.reducer;
export const {interestDataUpdateLocally, removeDataLocally} =
  InterestReducer.actions;
