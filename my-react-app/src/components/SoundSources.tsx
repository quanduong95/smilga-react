import { SoundSource } from './SoundSource';
import { soundSources } from '../data/soundSources';
export const SoundSources = () => {
  return (
    <main className='absolute top-[26%] right-[80%]  w-[240px] h-[500px]'>
      {soundSources.map((sound, index) => (
        <SoundSource
          key={index}
          soundSource={sound}
        />
      ))}
    </main>
  );
};
