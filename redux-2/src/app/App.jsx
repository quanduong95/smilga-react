import { AddPostForm } from '../features/posts/AddPostForm';
import { PostList } from '../features/posts/PostList';
import './App.css';
function App() {
  return (
    <main className='bg-gray-600 w-full h-full m-auto py-6 rounded-md'>
      <AddPostForm />
      <PostList />
    </main>
  );
}

export default App;
