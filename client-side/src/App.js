import '../src/App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navbar from './routes/navigation/navigation.component';
import  Workshops from './routes/workshops/workshops-page.component';
import  Contact from './routes/contact/contact-page.component';
import  Admin from './routes/admin/admin-page.component';
import { AuthContextProvider } from './contexts/admin.context'
import { ProtectedRoute } from './components/ProtectedRoute.component'

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='workshops' element={<Workshops />} />
          <Route path='contact' element={<Contact />} />
          <Route path='admin' element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
          } 
          />
        </Route>
      </Routes>
    </AuthContextProvider>
  )};
  

export default App;
