import React from "react";
import { useState } from "react";
import Axios from 'axios'

const Admin = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [location, setLocation] = useState("");

    const [workshopList, setWorkshopList] = useState([])

    const [newTitle, setNewTitle] = useState("")

    const addWorkshop = () => {
        Axios.post('http://localhost:3001/admin', {
            title: title,
            location: location, 
            price: price,
        }).then(() => {
            setWorkshopList([...workshopList, {
              title: title,
              location: location, 
              price: price,
            }])
            console.log('success')
        })
    }

    const getWorkshops = () => {
      Axios.get('http://localhost:3001/home').then((response) => {
          setWorkshopList(response.data);
      })
  }

  const updateTitle = (id) => {
    Axios.put('http://localhost:3001/update', {title: newTitle, id: id}).then(
    (response) => {
      setWorkshopList(
        workshopList.map((val) => {
          return val.id == id ? {
              id: val.id,
              title: newTitle,
              location: val.location,
              price: val.price,
            }
            : val;
        })
      )
    })
}

    return (
        <section className="main">
            <h1>THIS IS THE ADMIN PAGE</h1>
            <div className="inputs">
                <label>Workshop Title</label>
                <input type="text" onChange={(event) => {
                    setTitle(event.target.value)}}/>
                <label>Location</label>
                <input type="text" onChange={(event) => {
                    setLocation(event.target.value)}}/>
                <label>Price</label>
                <input type="number"
                  onChange={(event) => {
                  setPrice(event.target.value)
                  }} 
                  />
                <button onClick={addWorkshop}>Add Workshop</button>
            </div>
    
            <div className="results">
            <h2>Show Workshops</h2>
              <button onClick={getWorkshops}>Show Workshops</button>
            </div>
    
            <div className="workshops">
              {workshopList.map((val, key) => {
                return (
                  <div className="card">
                    <img src="{val." alt=""></img>
                    <h2>{val.title}</h2>
                    <h4>{val.location}</h4>
                    <p>{val.price}</p>
                    <button>more info</button> <button>Register</button>
                  
                    <input type="text" placeholder="edit this" onChange={(event) => {
                  setNewTitle(event.target.value)
                  }} />
                    <button onClick={() => {updateTitle(val.id)}}>Update</button>
                  </div>
                )
              })}
            </div>
        </section>
)};

export default Admin;