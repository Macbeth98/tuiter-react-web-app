import { createSlice } from '@reduxjs/toolkit';

const profile = {
  firstName: 'Mani',
  lastName: 'Gaddam',
  handle: '@manigaddam',
  profilePicture: '../../images/DSC_8682.jpeg',
  bannerPicture:
    'https://preview.redd.it/om4a8r7glhx21.png?auto=webp&s=9a79a83e356d8427e6563f397a6f5d3b2fccad34',
  bio: 'Sekiro: Shadows Die Twice is a 2019 action-adventure game developed by FromSoftware and published by Activision. The game follows a shinobi known as Wolf, who attempts to take revenge on a samurai clan that imprisoned him and kidnapped his lord. The gameplay is focused on stealth, exploration, and combat, with a particular emphasis on boss battles. It takes place in a fictionalized Japan during the Sengoku period and makes strong references to Buddhist mythology and philosophy.',
  website: 'youtube.com/webdevtv',
  location: 'Boston, MA',
  dateOfBirth: 'June 7th 1998',
  dateJoined: 'January 2023',
  followingCount: 340,
  followersCount: 223,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: profile,
  reducers: {
    updateProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
