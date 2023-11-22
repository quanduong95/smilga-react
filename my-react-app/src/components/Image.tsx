export interface ImageProps {
  imgUrl: string;
  width: string;
  right: string;
  top: string;
}

export const Image = ({ imgUrl, width, right, top }: ImageProps) => {
  return (
    <img
      src={imgUrl}
      alt='img1'
      className='absolute'
      style={{ width: width, top: top, right: right }}
    />
  );
};
