import ColorList from './Components/ColorList';
import Values from 'values.js';
import Form from './Components/Form';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const App = () => {
  // const [colors, setColors] = useState(new Values('#f15025').all(10));

  // const addColor = (color) => {
  //   try {
  //     const newColors = new Values(color).all(10);
  //     setColors(newColors);
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get('http://localhost:8080/api/v1/jobs') // Replace with your API endpoint
      .then((response) => {
        setData(response.data.result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Data from API:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.userId}>{item.company_name}</li>
        ))}
      </ul>
    </div>
    // <main className='main'>
    //   <Form addColor={addColor} />
    //   <ColorList colors={colors} />
    //   <ToastContainer
    //     position='top-right'
    //     autoClose={3000}
    //     hideProgressBar={false}
    //     newestOnTop={false}
    //     closeOnClick
    //     rtl={false}
    //     pauseOnFocusLoss
    //     draggable
    //     pauseOnHover
    //     theme='light'
    //   />
    // </main>
  );
};
export default App;
