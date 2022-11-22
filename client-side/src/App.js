import '../src/App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navbar from './routes/header/header.component';
import  Workshops from './routes/workshops/workshops-page.component';
import  Contact from './routes/contact/contact-page.component';
import  SignIn from './routes/sign-in/sign-in-page.component';
import  Admin from './routes/admin/admin-page.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='workshops' element={<Workshops />} />
        <Route path='contact' element={<Contact />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='admin' element={<Admin />} />
      </Route>
    </Routes>
  )};
  

export default App;
