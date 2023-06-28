import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Daw from './pages/Daw/Daw.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Daw />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
