import { images } from '../data/images';
import { Image } from './Image';

export const Images = () => {
  return (
    <main>
      {images.map((img, index) => (
        <Image
          key={index}
          imgUrl={img.imgUrl}
          width={img.width}
          top={img.top}
          right={img.right}
        />
      ))}
    </main>
  );
};
