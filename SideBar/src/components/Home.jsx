import React from 'react';
import { useGlobalContext } from '../context/context';

const Home = () => {
  const { openSideBar, openModal } = useGlobalContext();
  return <main>Home</main>;
};

export default Home;
