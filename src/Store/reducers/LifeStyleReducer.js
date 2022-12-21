import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {BASE_URL, PRIMARY_BASE_URL} from '../../App/api';
import {getRequest} from '../../App/fetch';

const initialState = {
  lifeStyle: {},
  error: '',
  status: '',
};

// POST REQUEST
export const getLifeStyle = createAsyncThunk('getLifeStyle', async () => {
  const result = await getRequest(`${BASE_URL}/getlifestyle`);
  return result;
});

const LifeStyleReducer = createSlice({
  name: 'LifeStyleReducer',
  initialState,
  reducers: {
    lifeStyleDataUpdateLocally: (state, action) => {
      state.lifeStyle = action.payload;
    },
    lifeStyleDataRemoveLocally: (state, action) => {
      state.lifeStyle = {};
    },
  },
  extraReducers: {
    [getLifeStyle.pending]: (state, action) => {
      state.status = 'pending';
    },
    [getLifeStyle.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
    [getLifeStyle.fulfilled]: (state, action) => {
      state.lifeStyle = action.payload
      state.status = 'ok';
      state.error = 'none';
    },
  },
});

export default LifeStyleReducer.reducer;
export const {lifeStyleDataUpdateLocally, lifeStyleDataRemoveLocally} =
  LifeStyleReducer.actions;
