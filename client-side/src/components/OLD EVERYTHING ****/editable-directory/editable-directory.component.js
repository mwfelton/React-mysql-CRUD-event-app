import React, { useEffect, useState, Fragment } from 'react';
import Axios from 'axios'

import Front from './old admin components/Front';
import Back from './old admin components/Back';
import NoWorkshops from './NoWorkshops';

const ShowWorkshops = () => {

    const [workshopList, setWorkshopList] = useState([])

    const [workshopId, setWorkshopId] = useState(null)

    const [showError, setShowError] = useState(false)

    console.log(workshopList.length)

    useEffect(() => {
        Axios.get('http://localhost:3001/home').then((response) => {
        setWorkshopList(response.data)
        }).catch(err => {
            setShowError(true)
            console.log(err)
          });
        }, [])

    const deleteWorkshop = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
            setWorkshopList(workshopList.filter((val) => {
            return val.id !== id
            }))
        })
        }
  
    const saveButton = () => {
        setWorkshopId(null)
    }    

    const resetError = () => {
        setShowError(false)
    }

    const edit = (id) => {
        console.log(id)
        setWorkshopId(id)
    }

    const noWorkshops = () => {
        if (workshopList.length) {
            <NoWorkshops />
        }
    }

    return (
       
         <section className="workshops">

            { showError
                ? <Error />
                : resetError
            }

             {workshopList.map((yoga) => {
                 return (
                    yoga.id === workshopId ? 
                    <Back 
                    val={yoga} 
                    setWorkshopList={setWorkshopList} 
                    saveButton={saveButton}
                    workshopList={workshopList}
                    deleteWorkshop={deleteWorkshop}
                    />
                    :
                    <Front 
                    val={yoga} 
                    edit={edit}
                    deleteWorkshop={deleteWorkshop}
                    />
                 )
             })}

             {workshopList.length === 0 ? 
                <NoWorkshops />
                : null
            } 
            
                    
         </section>
         )};

export default ShowWorkshops;

