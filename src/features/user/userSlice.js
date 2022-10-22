import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  tweets: [],
  isLoading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      sessionStorage.clear();
    },
    setTweets: (state, action) => {
      state.tweets = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setUser, clearUser, setTweets } = userSlice.actions;

export default userSlice.reducer;
