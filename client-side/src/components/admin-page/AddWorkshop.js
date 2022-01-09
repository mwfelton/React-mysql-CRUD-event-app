import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import { FaRegEdit } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
// import { FiSave } from 'react-icons/fi';

import Navbar from './Navbar';

const AddWorkshop = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("")
    const [date, setDate] = useState("")

    const [workshopList, setWorkshopList] = useState([])

    const [newTitle, setNewTitle] = useState("")

    useEffect(() => {
        Axios.get('http://localhost:3001/home').then((response) => {
        setWorkshopList(response.data)
        }).catch(err => {
            console.log(err)
          });
      }, [])  

    const resetForm = () => {
        document.getElementById("myForm").reset();
    }

 
    
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
            resetForm()
        })
    }

    //    const validateLocation = () => {
    //     const pattern = /([A-Z]{1})[a-z]+/
    //     if (pattern.test(event.target.value)) {                    
    //         setLocation(event.target.value)
    //         } else {
    //             alert('PENIS')
    //         }

    //     }


    const pattern = /([A-Z]{1})[a-z]+/

    return (
        <section className="addWorkshopMain">
            <form action="" className="myForm">

            <h3>Add a Workshop</h3>

            <div className="inputSection">
                <label>Workshop</label>
                <input type="text" onChange={(event) => {
                    setTitle(event.target.value)}}/>
                <label>Location</label>
                <input type="text" className="locationInput" onBlur={(event) => {
                    if (pattern.test(event.target.value)) {                    
                        setLocation(event.target.value)
                        } else {
                            alert('Please enter the location with one capital letter')
                        }
                        }}/>
                <label>Dates</label>
                <input type="text" onChange={(event) => {
                    setDate(event.target.value)}}/>
                <label>Price</label>
                <input type="number"
                  onChange={(event) => {
                  setPrice(event.target.value)
                  }}/>
            </div>

            <p>Select Image</p>

            <div className="images">

                <label>Angmardana</label>
                <input type="radio" value="angamardana" onChange={(event) => {
                    setImage(event.target.value)}}/>
                <label>Yogasanas</label>
                <input type="radio" value="yogasanas" onChange={(event) => {
                    setImage(event.target.value)}}/>
            </div>

            <div>
                <button onClick={addWorkshop}>Add Workshop</button>
            </div>
                
            <div className="workshops">
              {workshopList.map((val, key) => {
                return (

                  <div className="card">
                      <img src={addImage(val.image)} alt=""></img>
                      <div className='makeEditable'>
                      <h2 className="inputEdit">{val.title}</h2>
                      <h4 className="inputEdit">{val.location}</h4>
                      <p className="inputEdit">{val.date}</p>
                      <p className="inputEdit">{val.price}</p>
                  </div>

                  
                    <div>
                     <FaRegEdit onClick={() => {}}/>
                     <FaRegTrashAlt onClick={() => {deleteWorkshop(val.id)}}/>
                    </div>
                  
                    <input type="text" placeholder="edit this" onChange={(event) => {
                      setNewTitle(event.target.value)
                    }} />
                    <button onClick={() => {updateTitle(val.id)}}>Update</button>
              </div>
                )})}
             </div>
        </section>
)};

export default AddWorkshop;