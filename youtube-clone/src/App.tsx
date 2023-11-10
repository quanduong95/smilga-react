import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import { v4 as uuid } from 'uuid';
function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={uuid()}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
