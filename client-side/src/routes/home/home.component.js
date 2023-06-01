import { useContext } from "react";
import { WorkshopsContext } from '../../contexts/workshop.context'
import WorkshopCard from '../../components/workshop-card/workshop-card.component'

import './home.styles.css';

const Home = () => {

  const {workshops} = useContext(WorkshopsContext);

  return (
    <>
    <div className='padding-global'>
      <div className='main-container'>
        <h2>ISHA Classical Hatha Yoga</h2>
        <h1>YOGAAGMA</h1>
      </div>
    </div>
    <div className="workshop-list">
      <h2>BURGERS</h2>
      {workshops.map((workshop) => (
        <WorkshopCard key={workshop.id} workshop={workshop}/>
      ))}
    </div>
    <div className="section_hero_bg"></div>
    </>
  )
};

export default Home;