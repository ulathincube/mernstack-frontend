import { Home } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
