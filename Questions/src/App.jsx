import { useState } from 'react';
import QuestionList from './components/QuestionList';
import data from './data';

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <QuestionList questions={questions} />
    </main>
  );
};
export default App;
