import { useEffect, useState } from 'react';
import { longList } from '../data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
const Carousel = () => {
  const [people, setPeople] = useState(longList);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + people.length) % people.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % people.length);
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentIndex]);

  return (
    <section className='slider-container'>
      {people.map((person, index) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className='slide'
            style={{
              transform: `translateX(${100 * (index - currentIndex)}%)`,
              opacity: index === currentIndex ? 1 : 0,
              visibility: index === currentIndex ? 'visible' : 'hidden',
            }}
            key={id}
          >
            <img
              src={image}
              alt={name}
              className='person-img'
            />
            <h5 className='name'>{name}</h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        );
      })}
      <button
        type='button'
        className='prev'
        onClick={() => prevSlide()}
      >
        <FiChevronLeft />
      </button>
      <button
        type='button'
        className='next'
        onClick={() => nextSlide()}
      >
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
