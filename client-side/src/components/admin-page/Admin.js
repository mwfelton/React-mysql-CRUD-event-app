import React, { useEffect, useState } from 'react';
import Axios from 'axios'

import Navbar from '../Navbar';
import Front from './Front';
import Back from './Back';
import AddWorkshop from './AddWorkshop';

const Admin = () => {

    const [newWorkshopList, setNewWorkshopList] = useState([])


    // useEffect(() => {
    //     Axios.get('http://localhost:3001/home').then((response) => {
    //     setWorkshopList(response.data);
    //     }).catch(err => console.log(err));
    // }, [])
  
    return (
        <section className="main">
            <Navbar />
            <AddWorkshop />
            
            {/* <Front /> */}
            {/* <Back /> */}
        )
    
        </section>
)};

export default Admin;