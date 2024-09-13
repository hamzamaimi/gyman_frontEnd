import { configureStore } from "@reduxjs/toolkit";
import tenantReducer from "../features/tenant/tenantSlice";

export const store = configureStore({
    reducer: {
        tenant: tenantReducer,
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// You can define the state using this RootState variable and have access to it by using this variable
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// For asynchronous function by using the AppDispatch hook
export type AppDispatch = typeof store.dispatch