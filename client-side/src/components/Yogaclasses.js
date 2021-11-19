import React from "react";
import '../App.css'
import { useEffect, useState } from 'react';
import Axios from 'axios'
import Navbar from './Navbar';


function Yogaclasses() {

    const [workshopList, setWorkshopList] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/home').then((response) => {
          setWorkshopList(response.data);
      })

    }, [])


    const addImage = (name) => {
        const pic = name
        return `img/${pic}.jpg`
    }

    // Filterable Gallery functionality

    // function filterControls() {
    //     const buttons = document.querySelectorAll('.controls button')
    //     const cards = document.querySelectorAll('.card')

    //     buttons.forEach(button => button.addEventListener('click', (e) => {
    //         cards.forEach(card => card.style.display = "none")
    //         const att = button.getAttribute("data-location")

    //         for (let i = 0; i <= cards.length; i++){
    //             if (cards[i].classList.includes('Kloten')){
    //                 console.log('got you')
    //             }
    //         }
    //     }))
    // }

    function filterControls() {
        const buttons = document.querySelectorAll('.controls button')

        buttons.forEach(button => button.addEventListener('click', (e) => {

            const cards = document.querySelectorAll('.card')

            cards.forEach(card => card.style.display = "none")

            console.log(cards)

            const att = button.getAttribute("data-location")
            console.log(att)

            for (let i = 0; i < cards.length; i++){
                if (cards[i].classList.contains(`${att}`)){
                     cards[i].style.display = 'block'
                }
            }
        }))
    }

    filterControls()

    // function filter() {
    //     const cards = document.querySelectorAll('.card')
    //     cards.forEach(card => card.style.display = "none")

       
    //     // const buttons = document.querySelectorAll('.controls button')
    //     // const att = buttons.getAttribute("data-location")

    //     // for (let i = 0; i < cards.length; i++){
    //     //     // if (cards[i].classList.contains(`${att}`)){
    //     //     //     console.log('got you')
    //     //     // }
            
    //     // }
    // }
         
    return (
        <section className="yogaclasses">

        <Navbar />

        <div className="results">
            <h2>Hatha Yoga <br className="break"/>Workshop Schedule</h2>
            <div className="controls">
                    <button data-location="all">All</button>
                    <button data-location="Zurich">Zurich</button>
                    <button data-location="Kloten">Kloten</button>
                    <button data-location="Glasgow">Glasgow</button>
            </div>
        </div>

        <div className="workshopContainer">
        <div className="workshops">
          {workshopList.map((val, key) => {
            return (
                <div className={`${val.location} card all`} >
                    <div className="imagebox">
                    <img src={addImage(val.image)} alt=""></img>                
                    </div>
                    {/* <img src={addImage(val.image)} alt=""></img>                 */}
                    <h2 className="inputEdit">{val.title}</h2>
                    <h4 className="inputEdit">{val.location}</h4>
                    <p className="inputEdit">{val.date}</p>
                    <p className="inputEdit">{val.price}</p>
                    <button>Register</button>
                </div>
            )
          })}
          </div>
        </div>
    </section>
    )
}

export default Yogaclasses