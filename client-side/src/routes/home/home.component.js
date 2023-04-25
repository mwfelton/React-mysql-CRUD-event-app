import AdminSignIn from "../../components/authentication/admin-signIn.component";
import Workshops from "../workshops/workshops-page.component";

const Home = () => (
    <div className="title-container">
      <h1 className="title">YOGAAGMA</h1>
      <h2 className="sub-heading">ISHA HATHA YOGA ZURICH,</h2>
      <h2 className="sub-heading">SWITZERLAND</h2>
      <AdminSignIn />
      <Workshops />
    </div>
);

export default Home;