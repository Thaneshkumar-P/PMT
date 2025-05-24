// store/userSlice.ts
import { User } from '@/src/app/lib/definition';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user?: User;
}

export const initialState: UserState = {
  user: {
    fullName: '',
    email: '',
    password: '',
    fatherName: '',
    resetToken: '',
    phoneNo: 0,
    country: '',
    state: '',
    city: '',
    address: '',
    pincode: '',
    access: 1,
    role: '',
    loggedIn: false,
    locked: false,
    teams: [],
    projects: [],
    additional: {}
  },
};

// Create a slice for loading
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = initialState.user;
    }
  },
});

// Export actions and reducer
export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
