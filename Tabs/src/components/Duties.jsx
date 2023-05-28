import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const Duties = ({ duties }) => {
  return (
    <>
      {duties.map((duty) => {
        return (
          <div
            key={uuidv4()}
            className='job-desc'
          >
            <FaAngleDoubleRight className='job-icon' />{' '}
            <p className='job-duty'>{duty}</p>
          </div>
        );
      })}
    </>
  );
};

export default Duties;
