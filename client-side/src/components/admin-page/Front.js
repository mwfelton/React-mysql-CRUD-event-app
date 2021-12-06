import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import { FaRegEdit } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FiSave } from 'react-icons/fi';


const Front = ({workshopList}) => {

  const list = workshopList

  // const [workshopList, setWorkshopList] = useState([])

//   useEffect(() => {
//     Axios.get('http://localhost:3001/home').then((response) => {
//     setWorkshopList(response.data);
//     }).catch(err => console.log(err));
// }, [])

  const editable = () => {
    document.querySelector('.showEdit').setAttribute('contentEditable', 'true')
  }
  const unEditable = () => {
    document.querySelector('.showEdit').setAttribute('contentEditable', 'false')
  }

  <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");

  const addImage = (name) => {
    const pic = name
    return `img/${pic}.jpg`
  }

    return (
        <section className="workshops">
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

                     <FaRegEdit className="editIcon" onClick={editable}/>
                     <FiSave className="editIcon" onClick={unEditable}/>
                    
                    </div>

                  </div>
                </div>
                )})}
        </section>
)};

export default Front;