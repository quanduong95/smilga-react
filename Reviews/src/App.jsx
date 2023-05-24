import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((curr) => {
      return curr === people.length - 1 ? 0 : curr + 1;
    });
  };

  const prevPerson = () => {
    setIndex((curr) => {
      return curr === 0 ? people.length - 1 : curr - 1;
    });
  };

  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * people.length);
    if (randomNum === index) {
      randomNum++;
    }
    if (randomNum > people.length - 1) {
      randomNum = 0;
    } else if (randomNum === 0) {
      randomNum = people.length - 1;
    }
    setIndex(randomNum);
  };

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img
            src={image}
            alt={name}
            className='person-img'
          />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button
            className='prev-btn'
            onClick={() => prevPerson()}
          >
            <FaChevronLeft />
          </button>
          <button
            className='next-btn'
            onClick={() => nextPerson()}
          >
            <FaChevronRight />
          </button>
        </div>
        <button
          className='btn btn-hipster'
          onClick={() => randomPerson()}
        >
          surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
