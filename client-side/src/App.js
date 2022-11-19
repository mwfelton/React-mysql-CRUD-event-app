import '../src/App.css';
import { Route, Routes, Outlet } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navbar from './components/header/header.component';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )};
  

export default App;
