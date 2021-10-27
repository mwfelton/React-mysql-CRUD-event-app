import './App.css';
// import Admin from "./components/Admin.js"
import { useState } from "react";
import Axios from 'axios'

//admin page figure out
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './components/Admin';


function App() {

    const [workshopList, setWorkshopList] = useState([])

      Axios.get('http://localhost:3001/home').then((response) => {
          setWorkshopList(response.data);
      })
  

return (
  <Router>
  <Switch>  
    <Route path="/admin" exact component={Admin} />
    <section className="main">
        <div className="results">
        <h2>Workshops</h2>
        </div>

        <div className="workshops">
          {workshopList.map((val, key) => {
            return (
              <div className="card">
                <img src="{val." alt=""></img>
                <h2>{val.title}</h2>
                <h4>{val.location}</h4>
                <p>{val.price}</p>
                <button>more info</button> <button>Register</button>
              </div>
            )
          })}

        </div>
    </section>
  </Switch>  
</Router>
)};
 

export default App;
