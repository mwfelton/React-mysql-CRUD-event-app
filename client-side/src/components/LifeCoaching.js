// import React, { useEffect, useState } from 'react';
// import Axios from 'axios'
// import { FaRegEdit } from 'react-icons/fa';
// import { FaRegTrashAlt } from 'react-icons/fa';
// import { FiSave } from 'react-icons/fi';


// const LifeCoaching = ({workshopList, editButton}) => {

//     const [isEditable, setIsEditable] = useState(false)

//   const list = workshopList

//  const contentEditableToggle = () => {
//      const cardDiv = document.querySelector('.card')
//      if (!isEditable) {
//         cardDiv.setAttribute('contentEditable', 'true')
//      } 
//  }

//   const addImage = (name) => {
//     const pic = name
//     return `img/${pic}.jpg`
//   }

//     return (
//         <section className="workshops">
//              {workshopList.map((val, key) => {
//                 return (
//                   <div className="card" id={val.id} >
//                       <img src={addImage(val.image)} alt=""></img>
//                       <h2 className="inputEdit">{val.title}</h2>
//                       <h4 className="inputEdit">{val.location}</h4>
//                       <p className="inputEdit">{val.date}</p>
//                       <p className="inputEdit">{val.price}</p>

//                     <div className="editDeleteIcons">

//                      <FaRegEdit className="editIcon" onClick={contentEditableToggle}/>
                    
//                     </div>

//                   </div>
//                 )})}
//         </section>
// )};

// export default LifeCoaching;