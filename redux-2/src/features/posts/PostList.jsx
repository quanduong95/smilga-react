import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';

export const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const renderPosts = posts.map((post) => {
    return (
      <article
        key={post.id}
        className='border  m-4 rounded-md shadow-md'
      >
        <h3 className='text-xl text-white '>{post.title}</h3>
        <p className='text-white italic py-4'>
          {post.content.substring(0, 100)}
        </p>
      </article>
    );
  });
  return (
    <section>
      <h2 className='text-2xl font-bold text-white py-4'>Posts</h2>
      {renderPosts}
    </section>
  );
};
