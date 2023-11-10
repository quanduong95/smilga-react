import { NavBar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';

export const Home = () => {
  return (
    <section className='max-h-screen overflow-hidden'>
      <div style={{ height: '7.5vh' }}>
        <NavBar />
      </div>
      <div
        className='flex'
        style={{ height: '92.5vh' }}
      >
        <Sidebar />
      </div>
    </section>
  );
};
