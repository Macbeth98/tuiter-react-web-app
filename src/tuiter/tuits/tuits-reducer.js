import { createSlice } from '@reduxjs/toolkit';
import tuits from './tuits.json';

const currentUser = {
  userName: 'NASA',
  handle: '@nasa',
  image:
    'https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg',
};

const templateTuit = {
  ...currentUser,
  topic: 'Space',
  time: '2h',
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
};

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: tuits,
  reducers: {
    toggleLikeTuit: (state, action) => {
      const tuit = state.find((tuit) => tuit._id === action.payload);
      tuit.liked = !tuit.liked;
      tuit.likes = tuit.liked
        ? parseInt(tuit.likes) + 1
        : parseInt(tuit.likes) - 1;
    },
    createTuit: (state, action) => {
      const newTuit = {
        ...action.payload,
        ...templateTuit,
        _id: Date.now(),
      };
      state.unshift(newTuit);
    },
    deleteTuit(state, action) {
      const index = state.findIndex((tuit) => tuit._id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { toggleLikeTuit, createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
