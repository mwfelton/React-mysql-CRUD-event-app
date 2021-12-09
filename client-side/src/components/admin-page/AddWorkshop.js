import React, { useEffect, useState, Fragment } from 'react';
import Axios from 'axios'

const AddWorkshop = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("")
    const [date, setDate] = useState("")

    const [workshopList, setWorkshopList] = useState([])

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

    return (
        <section className="addWorkshopMain">
            <form action="" className="myForm">

            <h3>Add a Workshop</h3>

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
                <input type="text"
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

        </section>
)};

export default AddWorkshop;