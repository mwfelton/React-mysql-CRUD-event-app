import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import { FaRegEdit } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';

const Front = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("")
    const [date, setDate] = useState("")

    const [workshopList, setWorkshopList] = useState([])

    const [newTitle, setNewTitle] = useState("")

    const [flip, setFlip] = useState(false)

    // flip button function

    // flip = () => {
    //     this.setState({ flipped: !this.state.flipped });
    //   }

    const flipButton = () => {
    //   const icon = document.querySelector('.editIcon')
    //   console.log(icon)
      setFlip(true)
    //   div onMouseEnter={this.flip} onMouseLeave={this.flip} className={"card-container" + (this.state.flipped ? " flipped" : "")}>
      
    }

    useEffect(() => {
      Axios.get('http://localhost:3001/home').then((response) => {
      setWorkshopList(response.data);
      }).catch(err => console.log(err));
  }, [])

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
        <section className="front">
          
            <div className="workshops">
              {workshopList.map((val, key) => {
                return (

                  <div className="card">
                    <div className="showEdit">
                      <img src={addImage(val.image)} alt=""></img>
                      <h2 className="inputEdit">{val.title}</h2>
                      <h4 className="inputEdit">{val.location}</h4>
                      <p className="inputEdit">{val.date}</p>
                      <p className="inputEdit">{val.price}</p>

                    <div className="editDeleteIcons">
                     <FaRegEdit className="editIcon" onClick={() => {flipButton()}}/>
                     <FaRegTrashAlt onClick={() => {deleteWorkshop(val.id)}}/>
                    </div>
                  </div>
                </div>

                )})}
            </div>
        </section>
)};

export default Front;