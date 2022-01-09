import React, { useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';

const Front = ({val, edit, deleteWorkshop}) => {

  const addImage = (name) => {
    return `img/${name}.jpg`
  }

    return (
        
                  <div className="frontCard" id={val.id} >
                    <div className="imagebox">
                      <img src={addImage(val.image)} alt=""></img>
                    </div>
                      <h2 className="info">{val.title}</h2>
                      <h4 className="info">{val.location}</h4>
                      <p className="info">{val.date}</p>
                      <p className="info">{val.price}</p>

                    <div className="editDeleteIcons">

                     <FaRegEdit className="editIcon" onClick={() => {edit(val.id)}}/>
                     <FaRegTrashAlt onClick={() => {deleteWorkshop(val.id)}}/>
                    
                    </div>
                  </div>
      
)};

export default Front;

// Front Back up before trying the content editable again

// import React, { useEffect, useState } from 'react';
// import Axios from 'axios'
// import { FaRegEdit } from 'react-icons/fa';
// import { FaRegTrashAlt } from 'react-icons/fa';
// import { FiSave } from 'react-icons/fi';


// const Front = ({workshopList, editButton}) => {

//   const list = workshopList

//   const [icon, setIcon] = useState(false)

//   // const [workshopList, setWorkshopList] = useState([])

// //   useEffect(() => {
// //     Axios.get('http://localhost:3001/home').then((response) => {
// //     setWorkshopList(response.data);
// //     }).catch(err => console.log(err));
// // }, [])



// //   <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>

// // function myFunction(x) {
// //   x.classList.toggle("fa-thumbs-down");

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

//                      <FaRegEdit className="editIcon" onClick={editButton}/>
                    
//                     </div>

//                   </div>
//                 )})}
//         </section>
// )};

// export default Front;