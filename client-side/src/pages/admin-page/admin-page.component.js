import React, { useEffect, useState } from 'react';
import Axios from 'axios'

import Navbar from '../../components/Navbar';
import AddWorkshop from '../../components/OLD OLD OLD admin components/AddWorkshop';
import ShowWorkshops from '../../components/ShowWorkshops';

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