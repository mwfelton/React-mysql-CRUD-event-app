import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import { FaRegEdit } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';

const Admin = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("")
    const [date, setDate] = useState("")

    const [workshopList, setWorkshopList] = useState([])

    const [newTitle, setNewTitle] = useState("")

    useEffect(() => {
      Axios.get('http://localhost:3001/home').then((response) => {
      setWorkshopList(response.data);
      }).catch(err => console.log(err));
  }, [])

  

  //  Axios.get('http://localhost:3001/home').then((response) => {
  //     setWorkshopList(response.data);
  // })
 
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

  const updateTitle = (id) => {
    Axios.put('http://localhost:3001/update', {title: newTitle, id: id}).then(
    (response) => {
      setWorkshopList(
        workshopList.map((val) => {
          return val.id === id ? {
              id: val.id,
              title: newTitle,
              location: val.location,
              price: val.price
            }
            : val
        })
      )
    })
}

  // const editFunction = () => {
  //   document.getElementsByClassName('.inputEdit')
  // }

const deleteWorkshop = (id) => {
  Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
    setWorkshopList(workshopList.filter((val) => {
      return val.id !== id
    }))
  })
}

  const addImage = (name) => {
    const pic = name
    return `img/${pic}.jpg`
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

            <div>
            <img src="img/sk.jpg" alt=""></img>
            </div>
    
            <div className="workshops">
              {workshopList.map((val, key) => {
                return (
                  <div className="card">
                    <img src={addImage(val.image)} alt=""></img>
                    <h2 className="inputEdit">{val.title}</h2>
                    <h4 className="inputEdit">{val.location}</h4>
                    <p className="inputEdit">{val.date}</p>
                    <p className="inputEdit">{val.price}</p>

                    <div>
                     <FaRegEdit onClick={() => {}}/>
                     <FaRegTrashAlt onClick={() => {deleteWorkshop(val.id)}}/>
                    </div>
                  
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