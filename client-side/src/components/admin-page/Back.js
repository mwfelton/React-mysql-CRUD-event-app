import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import { FiSave } from 'react-icons/fi';
import { FaRegTrashAlt } from 'react-icons/fa';


const Back = ({val, workshopList, setWorkshopList, saveButton, deleteWorkshop}) => {

  console.log(workshopList)

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("")
    const [date, setDate] = useState("")


    const [newTitle, setNewTitle] = useState("")
    const [newPrice, setNewPrice] = useState(0);
    const [newLocation, setNewLocation] = useState("");
    const [newImage, setNewImage] = useState("")
    const [newDate, setNewDate] = useState("")


    const ifNotChanged = (newThing, original) => {
      if (newThing === "" || null){
        return original
      } else {
        return newThing
      }
    }

    const updateTitle = (id) => {
      Axios.put('http://localhost:3001/update', {title: newTitle, id: id, location: newLocation, date: newDate, image: newImage, price: newPrice}).then(
      (response) => {
        setWorkshopList(
          workshopList.map((val) => {
            return val.id === id ? {
                id: val.id,
                title: ifNotChanged(newTitle, val.title),
                location: ifNotChanged(newLocation, val.location),
                date: ifNotChanged(newDate, val.date),
                image: ifNotChanged(newImage, val.image),
                price: ifNotChanged(newPrice, val.price)
              }
              : val
          })
        )
      })
      saveButton()
  }

  const addImage = (name) => {
    const pic = name
    return `img/${pic}.jpg`
  }

    return (
        
        <div className="backCard" id={val.id}>
          
            <img src={addImage(val.image)} alt=""></img>
            <input type="text" placeholder="Workshop" onChange={(event) => {
                setNewTitle(event.target.value)}}/>
            <input type="text" className="location" placeholder="Location" onChange={(event) => {
                setNewLocation(event.target.value)}}/>
            <input type="text" className="date" placeholder="Dates" onChange={(event) => {
                setNewDate(event.target.value)}}/>
            <input type="text" className="price" placeholder="Price" onChange={(event) => {
                setNewPrice(event.target.value)
              }}/>

            <p>Select Image</p>
            <div className="editImage">
            <label>Angmardana</label>
            <input type="radio" value="angamardana" onChange={(event) => {
                setNewImage(event.target.value)}}/>
            <label>Yogasanas</label>
            <input type="radio" value="yogasanas" onChange={(event) => {
                setNewImage(event.target.value)}}/>
            </div>
            
          <div className="editDeleteIconsBack">

            <FiSave onClick={() => {updateTitle(val.id)}}/>
            <FaRegTrashAlt onClick={() => {deleteWorkshop(val.id)}}/>

          </div>

        </div>      
)};

export default Back;

