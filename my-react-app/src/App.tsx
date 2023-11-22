import { Header } from './components/Header';
import { Images } from './components/Images';
import { SoundSources } from './components/SoundSources';
function App() {
  return (
    <main className='w-screen h-screen relative '>
      <Header />
      <Images />
      <SoundSources />
    </main>
  );
}

export default App;
