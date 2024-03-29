import '../src/App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navbar from './routes/navigation/navigation.component';
import Workshops from './routes/workshops/workshops-page.component';
import Contact from './routes/contact/contact-page.component';
import AdminPage from './routes/admin-page/admin-page.component';
import AdminSignIn from './routes/admin-signIn/admin-signIn.component'
import Checkout from './routes/checkout/checkout.component';

import { AuthContextProvider } from './contexts/admin.context'
import { ProtectedRoute } from './components/ProtectedRoute.component'
import { WorkshopProvider } from './contexts/workshop.context'
import { CartProvider } from './contexts/cart.context'


function App() {
  return (
    <AuthContextProvider>
      <WorkshopProvider>
      <CartProvider>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='workshops' element={<Workshops />} />
          <Route path='contact' element={<Contact />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='sign-in' element={<AdminSignIn />} />
          <Route path='admin-page' element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
          } 
          />
        </Route>
      </Routes>
      </CartProvider>
      </WorkshopProvider>
    </AuthContextProvider>
  )};
  

export default App;
