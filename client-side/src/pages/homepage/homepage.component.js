import background from "../../assets/src-imgs/bg-overlay.jpg";
import Navbar from './Navbar';


  const Home = () => (
    <section>
      <div className="main-bg" style={{ backgroundImage: `url(${background})` }}>
        <Navbar />
          <div className="title-container">
            <h1 className="title">YOGAAGMA</h1>
            <h2 className="sub-heading">ISHA HATHA YOGA ZURICH,</h2>
            <h2 className="sub-heading">SWITZERLAND</h2>
          </div>
      </div>
    </section>
  );

export default Home;