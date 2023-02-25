import { useContext } from "react";

import '../workshops/workshops-page.styles.scss';
import { WorkshopsContext } from '../../contexts/workshop.context'
import WorkshopCard from '../../components/workshop-card/workshop-card.component'

export const Workshops = () => {
  const {workshops} = useContext(WorkshopsContext);

    return (
      <>
        <h1 className="title">WORKSHOPS PAGE</h1>
        <div className="workshops-container">
          {workshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop}/>
          ))}
        </div>
      </>
     
    )
  };

export default Workshops;
