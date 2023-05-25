import React from 'react';
import Question from './Question';

const QuestionList = ({ questions }) => {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((question) => (
        <Question
          key={question.id}
          {...question}
        />
      ))}
    </section>
  );
};

export default QuestionList;
