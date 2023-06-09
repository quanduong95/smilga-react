import { useState } from 'react';

const Form = () => {
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {};

  return (
    <section>
      <h4>color generator</h4>
      <form
        className='color-form'
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#f14555'
        />
        <button
          className='btn'
          type='submit'
          style={{ background: color }}
        >
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
