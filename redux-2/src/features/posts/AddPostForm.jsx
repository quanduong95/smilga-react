import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAllUsers } from '../users/usersSlice';
import { addPost } from './postsSlice';
export const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState([]);

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const handleAddPost = () => {
    if (title && content) {
      dispatch(addPost(title, content, userId));
      setTitle('');
      setContent('');
    }
  };
  const renderUsersOptions = users.map((user) => {
    return (
      <option
        key={user.id}
        value={user.id}
      >
        {user.name}
      </option>
    );
  });
  return (
    <section>
      <h2 className='text-2xl font-bold text-white py-4'>Add a new Post</h2>
      <form className='grid  border m-4 rounded-md '>
        <label
          className='text-2xl text-white'
          htmlFor='postTitle'
        >
          Post Title:
        </label>
        <input
          className='m-4 border-none p-2'
          type='text'
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={onTitleChanged}
        />
        <select
          name=''
          id=''
          value={userId}
          className='m-4 p-2'
          onChange={() => onAuthorChanged()}
        >
          <option value=''>Author</option>
          {renderUsersOptions}
        </select>
        <label
          className='text-2xl text-white'
          htmlFor='postContent'
        >
          Content:
        </label>
        <textarea
          className='m-4'
          id='postContent'
          name='postContent'
          value={content}
          onChange={onContentChanged}
        />
        <div className='flex justify-end'>
          <button
            type='button'
            className=' bg-white text-gray-900 my-4 mx-10 py-2 min-w-[200px] text-xl'
            onClick={() => handleAddPost()}
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};
