import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <hero/>
      </div>
    </BrowserRouter>
  );

}

export default App;
