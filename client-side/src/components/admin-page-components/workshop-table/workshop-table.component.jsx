import './workshop-table.styles.scss';
import { useState } from 'react';
import { doc, deleteDoc} from "firebase/firestore";
import { db } from "../../../utils/firebase/firebase.utils"

const WorkshopTable = ({ workshop }) => {
    console.log(workshop)
    const { country, price, date, id, location, practice, sessions, img } = workshop;

    const handleDelete = async (id) => {
          await deleteDoc(doc(db, "upcoming-workshops", id));
      }

    return (
        <div className='workshop-card-container'>
            <img src={img} alt="" />
            <div className='main'>
                <h2>{practice}</h2>
                <p>{country}</p>
                <p>{location}</p>
                <p>{price}</p>
                <p>{sessions}</p>
            </div>
            <div className='footer'>
                <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
    )
}

export default WorkshopTable;
