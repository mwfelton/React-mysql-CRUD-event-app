import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { UserAuth } from '../../contexts/admin.context'

const AdminSignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {signIn} = UserAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('')
    try {
      await signIn(email, password);
      navigate('/admin-page')
    } catch (e) {
        setError(e.message)
        console.log(error);
      }
  };

  return (
    <div className='sign-in-container'>
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <input
          label='Email'
          type='email'
          required
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          value={email}
        />

        <input
          label='Password'
          type='password'
          required
          onChange={(e) => setPassword(e.target.value)}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <button type='submit'>Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default AdminSignIn;