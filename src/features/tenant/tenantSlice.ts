import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBase64LogoApi } from "./tenantApi";

// Thunk to fetch the base64 logo asynchronously
export const fetchTenantLogo = createAsyncThunk('tenant/fetchLogo', async (_, { rejectWithValue }) => {
    try {
      const logo = await getBase64LogoApi();  // API call to fetch the logo
      return logo;  // Return the logo to be stored in Redux state
    } catch (error: any) {
      return rejectWithValue(error.message);  // Handle error
    }
});

// Define an interface for the tenant's state, including multiple fields
interface tenantState {
    name: string;
    base64logo: string;
}

// Initial state with default values for each field
const initialState: tenantState = {
    name: '',
    base64logo : '',
};

// Create the tenant slice to manage all tenant-related state
const tenantSlice = createSlice({
    name : "tenant",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchTenantLogo.fulfilled, (state, action) => {
            state.base64logo = action.payload.base64logo;  // Store the base64 logo in the state
        })
      }
});

export default tenantSlice.reducer;