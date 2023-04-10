import { createSlice } from '@reduxjs/toolkit';
// import tuits from './tuits.json';
import {
  findTuitsThunk,
  deleteTuitThunk,
  createTuitThunk,
  updateTuitThunk,
} from '../../services/tuits-thunks';

const initialState = {
  tuits: [],
  loading: false,
};

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState,
  extraReducers: {
    [findTuitsThunk.pending]: (state) => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = payload;
    },
    [findTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = state.tuits.filter((t) => t._id !== payload);
    },
    [createTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // state.tuits.push(payload);
      state.tuits = [payload, ...state.tuits];
    },
    [updateTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const tutitNdx = state.tuits.findIndex((t) => t._id === payload._id);
      state.tuits[tutitNdx] = {
        ...state.tuits[tutitNdx],
        ...payload,
      };
    },
  },
  reducers: {},
  // reducers: {
  //   toggleLikeTuit: (state, action) => {
  //     const tuit = state.find((tuit) => tuit._id === action.payload);
  //     tuit.liked = !tuit.liked;
  //     tuit.likes = tuit.liked
  //       ? parseInt(tuit.likes) + 1
  //       : parseInt(tuit.likes) - 1;
  //   },
  //   createTuit: (state, action) => {
  //     const newTuit = {
  //       ...action.payload,
  //       ...templateTuit,
  //       _id: Date.now(),
  //     };
  //     state.unshift(newTuit);
  //   },
  //   deleteTuit(state, action) {
  //     const index = state.findIndex((tuit) => tuit._id === action.payload);
  //     state.splice(index, 1);
  //   },
  // },
});

export const { toggleLikeTuit, createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
