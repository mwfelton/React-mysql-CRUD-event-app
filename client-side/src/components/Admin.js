import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import { FaRegEdit } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
import Navbar from './Navbar';
import Front from './Front';
import Back from './Back';

const Admin = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("")
    const [date, setDate] = useState("")

    const [workshopList, setWorkshopList] = useState([])

    useEffect(() => {
      Axios.get('http://localhost:3001/home').then((response) => {
      setWorkshopList(response.data);
      }).catch(err => console.log(err));
  }, [])
 
    const addWorkshop = () => {
        Axios.post('http://localhost:3001/admin', {
            title: title,
            location: location, 
            price: price,
            image: image,
            date: date
        }).then(() => {
            setWorkshopList([...workshopList, {
              title: title,
              location: location, 
              price: price,
              image: image,
              date: date
            }])
            console.log('success')
        })
    }

    return (
        <section className="main">
        <Navbar />
            <h1>THIS IS THE ADMIN PAGE</h1>
            <div className="inputs">
                <label>Workshop Title</label>
                <input type="text" onChange={(event) => {
                    setTitle(event.target.value)}}/>
                <label>Location</label>
                <input type="text" onChange={(event) => {
                    setLocation(event.target.value)}}/>
                <label>Dates</label>
                <input type="text" onChange={(event) => {
                    setDate(event.target.value)}}/>
                <label>Price</label>
                <input type="number"
                  onChange={(event) => {
                  setPrice(event.target.value)
                  }}/>
                <p>Select Image</p>
                <label>Angmardana</label>
                <input type="radio" value="angamardana" onChange={(event) => {
                    setImage(event.target.value)}}/>
                <label>Yogasanas</label>
                <input type="radio" value="yogasanas" onChange={(event) => {
                    setImage(event.target.value)}}/>
                <button onClick={addWorkshop}>Add Workshop</button>
            </div>

        <div className="cardContainer">
        <Front />
        <Back />
        </div>
            
        </section>
)};

export default Admin;