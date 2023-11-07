import { createSlice } from '@reduxjs/toolkit';
const initialState = [
  {
    id: '0',
    name: 'Dude Mohon',
  },
  {
    id: '1',
    name: 'Neil Young',
  },
  {
    id: '2',
    name: 'Dave KnobBlock',
  },
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
