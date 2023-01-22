import { useState, useContext } from 'react';
import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

import { AdminContext } from '../../contexts/admin.context'

const defaultFormFields = {
  email: '',
  password: '',
};

const AdminSignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentAdmin, currentAdmin } = useContext(AdminContext)
  
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { admin } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentAdmin(admin)
      console.log(currentAdmin)

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <input
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <input
          label='Password'
          type='password'
          required
          onChange={handleChange}
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
