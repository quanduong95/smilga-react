import { useEffect } from 'react';
import { useState } from 'react';
import JobInfo from './components/JobInfo';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await fetch(url);
    const newJobs = await res.json();
    setJobs(newJobs);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (isLoading) {
    return (
      <section className='job-center'>
        <div className='loading'></div>
      </section>
    );
  }
  console.log(jobs);
  return (
    <section className='jobs-center'>
      <JobInfo jobs={jobs} />
    </section>
  );
};
export default App;
