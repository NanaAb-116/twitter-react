import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  tweets: [],
  users: [],
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
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setTweets: (state, action) => {
      state.tweets = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setUser, clearUser, setTweets, setUsers } = userSlice.actions;

export default userSlice.reducer;
