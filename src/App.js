
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Screen1 from './pages/screen1';
import Screen2 from './pages/screen2';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Screen1 />} />
      <Route path='/screen2' element={<Screen2 />} />
    </Routes>

  );
}

export default App;
