import { useContext } from "react";
import { WorkshopsContext } from '../../contexts/workshop.context'
import WorkshopCard from '../../components/workshop-card/workshop-card.component'

import './home.styles.css';

const Home = () => {

  const {workshops} = useContext(WorkshopsContext);

  return (
    <>
    <section className="hero">
      <div className='title'>
        <h1>YOGAAGMA</h1>
        <h2>ISHA Hatha Yoga Zurich</h2>
      </div>
    </section>
    <div className="section_hero_bg"></div>
    <section className="main-body">
      

    </section>

    {/* <div className='padding-global'>
      <div className='main-container'>
        <h2>ISHA Classical Hatha Yoga</h2>
        <h1>YOGAAGMA</h1>
      </div>
    </div> */}
    <div className="workshop-list">
      <h2>BURGERS</h2>


      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis aperiam culpa cumque animi omnis nobis exercitationem dolorum quam sapiente accusantium officia adipisci nulla veritatis, ratione similique nemo perspiciatis illum, possimus fugit non necessitatibus. Ut dolor reiciendis recusandae accusantium quam. Vero officia porro voluptate aspernatur! Doloremque qui in recusandae sit maxime! Doloremque nisi dolorem atque, numquam, aliquid cumque ratione ipsum officia ullam officiis veniam sit maxime soluta similique sed dolorum rem neque. Optio laborum commodi deleniti cupiditate deserunt, fugiat sed! Ducimus molestiae, eum quam officia nesciunt sunt sapiente aspernatur voluptates culpa minus quasi aut quos nisi soluta eligendi suscipit in doloribus cumque. Mollitia ratione perspiciatis, hic doloremque asperiores fugiat accusamus delectus nihil quos. Laborum sed tempore non repudiandae rerum odio repellendus quas quibusdam aperiam, quod rem officiis praesentium. Non excepturi qui, aut rem, itaque vero iusto fuga delectus earum amet veritatis doloremque assumenda sapiente quia magni eius illum. Doloribus dolores molestiae quae officiis dolorem non minima qui facilis ut delectus eaque nobis id, perferendis repellat inventore. Aliquid, rerum veritatis exercitationem odit nulla alias natus. Voluptas dolorum nisi, dolorem facere quaerat sequi repudiandae vero, illum fugiat error unde laudantium ducimus aperiam, porro sint quasi repellat aliquid culpa provident consequatur. Inventore, itaque earum.</p>

    </div>
    </>
  )
};

export default Home;