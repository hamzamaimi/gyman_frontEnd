import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state interface
interface AuthState {
  loggedIn: boolean;
}

// Initial state
const initialState: AuthState = {
  loggedIn: false,
};

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
  },
});

// Export actions and reducer
export const { setLoggedIn } = authSlice.actions;
export default authSlice.reducer;