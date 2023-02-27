import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/admin.context";
import { query, collection, onSnapshot, addDoc, doc, serverTimestamp, setDoc, } from "firebase/firestore";
import {db} from "../../utils/firebase/firebase.utils"

import { userInputs } from "../../formSource";
import './admin-page.styles.css';

const GetWorkshops = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate()
  const [workshops, setWorkshops] = useState([])
  const [data, setData] = useState({});

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      console.log('logged out')
    } catch (e) {
      console.log(e.message)
    }
  }

  //read data
  useEffect(() => {
    const q = query(collection(db, 'upcoming-workshops'))
    const allWorkshops = onSnapshot(q, (querySnapshot) => {
      let workshopArr = []
      querySnapshot.forEach((doc) => {
        workshopArr.push({...doc.data(), id: doc.id})
      });
      setWorkshops(workshopArr)
    })
    return () => allWorkshops()
  }, [])

  //create workshop
  const createWorkshop = async (e) => {
    e.preventDefault(e);
    
  }

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  const handleAddWorkshop = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "upcoming-workshops"), {
        ...data,
        timeStamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <div className="title-container">
        <h1 className="title">ADMIN PAGE</h1>
        <h1 className="title">Current User: {user && user.email}</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>

    <div className='admin-form-container'>
      <form className='admin-form' onSubmit={handleAddWorkshop}>
        {userInputs.map((input) => (
          <div className="formInput" key={input.id}>
            <label>{input.label}</label>
            <input
              id={input.id}
              type={input.type}
              placeholder={input.placeholder}
              onChange={handleInput}
            />
          </div>
        ))}
        <button type="submit">Send</button>
      </form>

   

      <ul>
        {workshops.map((todo, index) => (
          <li>{todo.location}</li>
        ))}
      </ul>
    </div>
    </>
  )
};

export default GetWorkshops;
   