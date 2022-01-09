import React, { useEffect, useState } from 'react';
import Axios from 'axios'

import Navbar from '../Navbar';
import AddWorkshop from './AddWorkshop';
import ShowWorkshops from '../ShowWorkshops';

const Admin = () => {
  
    return (
        <section className="main">
            <Navbar />
            <AddWorkshop />
            <ShowWorkshops />
        )
    
        </section>
)};

export default Admin;