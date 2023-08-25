
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    address: '',
    profileImage: null,
  },
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
  },
});

export const { setAddress, setProfileImage } = userSlice.actions;

export default userSlice;
