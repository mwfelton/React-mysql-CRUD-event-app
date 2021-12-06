import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import { FiSave } from 'react-icons/fi';
import { FaRegTrashAlt } from 'react-icons/fa';


const Back = ({workshopList, setWorkshopList}) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("")
    const [date, setDate] = useState("")

    const list = workshopList


    // const [workshopList, setWorkshopList] = useState([])

    const [newTitle, setNewTitle] = useState("")

 

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
        <section className="workshops">

              {list.map((val, key) => {
                return (

                  <div className="backCard">
                    
                      <img src={addImage(val.image)} alt=""></img>
                    
                      <input type="text" placeholder={val.title} onChange={(event) => {
                          setTitle(event.target.value)}}/>

                      <input type="text" onChange={(event) => {
                          setLocation(event.target.value)}}/>
                      <input type="text" onChange={(event) => {
                          setDate(event.target.value)}}/>
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
                      
                    
 
                    <div className="editDeleteIcons">
                     <FiSave onClick={() => {}}/>
                     <FaRegTrashAlt onClick={() => {deleteWorkshop(val.id)}}/>
                    </div>
                  </div>
                )
              })}
        </section>
)};

export default Back;



// back updateTitle

// import React, { useEffect, useState } from 'react';
// import Axios from 'axios'
// import { FiSave } from 'react-icons/fi';
// import { FaRegTrashAlt } from 'react-icons/fa';


// const Back = () => {

//     const [title, setTitle] = useState("");
//     const [price, setPrice] = useState(0);
//     const [location, setLocation] = useState("");
//     const [image, setImage] = useState("")
//     const [date, setDate] = useState("")

//     const [workshopList, setWorkshopList] = useState([])

//     const [newTitle, setNewTitle] = useState("")

//     useEffect(() => {
//       Axios.get('http://localhost:3001/home').then((response) => {
//       setWorkshopList(response.data);
//       }).catch(err => console.log(err));
//   }, [])

//   //  Axios.get('http://localhost:3001/home').then((response) => {
//   //     setWorkshopList(response.data);
//   // })

//   const updateTitle = (id) => {
//     Axios.put('http://localhost:3001/update', {title: newTitle, id: id}).then(
//     (response) => {
//       setWorkshopList(
//         workshopList.map((val) => {
//           return val.id === id ? {
//               id: val.id,
//               title: newTitle,
//               location: val.location,
//               price: val.price
//             }
//             : val
//         })
//       )
//     })
// }

// const deleteWorkshop = (id) => {
//   Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
//     setWorkshopList(workshopList.filter((val) => {
//       return val.id !== id
//     }))
//   })
// }

//   const addImage = (name) => {
//     const pic = name
//     return `img/${pic}.jpg`
//   }

//     return (
//         <section className="back">

//             <div className="workshops">
//               {workshopList.map((val, key) => {
//                 return (

//                   <div className="backCard">
                    
//                       <img src={addImage(val.image)} alt=""></img>
                    
//                       <input type="text" placeholder={val.title} onChange={(event) => {
//                           setTitle(event.target.value)}}/>

//                       <input type="text" onChange={(event) => {
//                           setLocation(event.target.value)}}/>
//                       <input type="text" onChange={(event) => {
//                           setDate(event.target.value)}}/>
//                       <input type="number"
//                         onChange={(event) => {
//                         setPrice(event.target.value)
//                         }}/>

//                       <p>Select Image</p>
//                       <label>Angmardana</label>
//                       <input type="radio" value="angamardana" onChange={(event) => {
//                           setImage(event.target.value)}}/>
//                       <label>Yogasanas</label>
//                       <input type="radio" value="yogasanas" onChange={(event) => {
//                           setImage(event.target.value)}}/>
                      
                    
 
//                     <div className="editDeleteIcons">
//                      <FiSave onClick={() => {}}/>
//                      <FaRegTrashAlt onClick={() => {deleteWorkshop(val.id)}}/>
//                     </div>
                  
//                     <input type="text" placeholder="edit this" onChange={(event) => {
//                   setNewTitle(event.target.value)
//                   }} />
//                     <button onClick={() => {updateTitle(val.id)}}>Update</button>
//                   </div>
//                 )
//               })}
//             </div>
//         </section>
// )};

// export default Back;



