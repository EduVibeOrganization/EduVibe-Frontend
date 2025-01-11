import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignUpModel {
  email: string;
  password: string;
  username: string;
  phoneNumber: string;
  roleId?: number;
}

interface AuthState {
  signUpModel: SignUpModel;
}

const initialState: AuthState = {
  signUpModel: {
    email: '',
    password: '',
    username: '',
    phoneNumber: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.signUpModel.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.signUpModel.password = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.signUpModel.username = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.signUpModel.phoneNumber = action.payload;
    },
    setRoleId: (state, action: PayloadAction<number>) => {
      state.signUpModel.roleId = action.payload;
    },
  },
});

export const { setEmail, setPassword, setUsername, setPhoneNumber, setRoleId } = authSlice.actions;
export default authSlice.reducer;
