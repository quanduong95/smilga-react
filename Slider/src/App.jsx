import SlickCarousel from './Components/SlickCarousel';

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <main>
      <>
        <SlickCarousel />
      </>
    </main>
  );
};
export default App;
