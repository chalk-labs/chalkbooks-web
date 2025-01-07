
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface User {
  name: string;
  user_id: string;
  email: string;
  message: string;
}

const initUser: User = {
  name: '',
  user_id: '',
  email: '',
  message: ''
};

const initialState = {
  user: initUser,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.user = initUser;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
