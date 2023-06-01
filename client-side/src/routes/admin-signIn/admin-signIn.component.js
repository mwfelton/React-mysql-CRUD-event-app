// // import { UserAuth } from "../../contexts/admin.context";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// import { doc, collection, addDoc, serverTimestamp, deleteDoc} from "firebase/firestore";
// import {db, storage} from "../../utils/firebase/firebase.utils"
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../utils/firebase/firebase.utils'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { login, isLoggedIn, userCred } from '../../redux/admin-slice'


import './admin-signIn.styles.scss';

const AdminSignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const burgers = useSelector(userCred)
  console.log(burgers)

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      dispatch(login)
      console.log(result)
    })
  }

  // if(store.getState()){
  //   console.log('logged in')
  // }

  // if (!store.getState()){
  //   console.log('NOT LOGGED IN')
  // }

  return (
    <>
    <div className='sign-in-container'>
      <h2>Sign in</h2>
    
      <form onSubmit={handleLogin}>
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
    </>
  )
};

export default AdminSignIn;
   