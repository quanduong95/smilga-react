import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'Learning RTK',
    content: 'I have only header worst thing about RTK',
  },
  {
    id: '2',
    title: 'Learning C#',
    content: 'I have only header worst thing about C#',
  },
  {
    id: '3',
    title: 'Learning Java',
    content: 'I have only header worst thing about Java',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => {
  return state.posts;
};
export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
