import React, { useEffect, useState } from 'react';
import Axios from 'axios'

import Front from './Front';
import Back from './Back';
import Error from '../Error';


const AddWorkshop = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("")
    const [date, setDate] = useState("")

    const [workshopList, setWorkshopList] = useState([])

    const [editId, setEditId] = useState(null);

    const [showError, setShowError] = useState(false)

    const resetForm = () => {
        document.getElementById("myForm").reset();
    }

    const resetError = () => {
        setShowError(false)
        }
    

    console.log(showError)
    
    useEffect(() => {
      Axios.get('http://localhost:3001/home').then((response) => {
      setWorkshopList(response.data)
      }).catch(err => {
          setShowError(true)
          console.log(err)
        });
    }, [])

    console.log(showError)
  

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

    return (
        <section className="addWorkshopMain">
            <form action="" className="myForm">
            <div className="head">
                <h3>Add a Workshop</h3>
            </div>

            <div className="inputSection">
                <label>Workshop</label>
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

            </form>

            {showError
                ? <Error />
                : resetError
            }

            <Front workshopList={workshopList}/>
            <Back workshopList={workshopList} setWorkshopList={setWorkshopList}/>

        
            


        </section>
)};

export default AddWorkshop;