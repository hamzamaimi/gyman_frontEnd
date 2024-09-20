import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state interface
interface AuthState {
  isLoggedIn: boolean;
  message: string | null;
}

// Initial state
const initialState: AuthState = {
  isLoggedIn: false,
  message: null,
};

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    clearMessage: (state) => {
      state.message = null;
    }
  },
});

// Export actions and reducer
export const { setLoggedIn, setMessage, clearMessage } = authSlice.actions;
export default authSlice.reducer;