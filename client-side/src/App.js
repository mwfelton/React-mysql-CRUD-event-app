import './App.css';
// import Admin from "./components/Admin.js"

//admin page figure out
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './pages/admin-page/admin-page.component';
import Home from './pages/homepage/homepage.component.js';
import Yogaclasses from './components/Yogaclasses';


function App() {
  
return (
  <Router>
  {/* <Navbar /> */}
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/admin" component={Admin} />
    <Route path="/yoga-classes-zurich" component={Yogaclasses} />
    {/* <Route path="/life-coaching" component={LifeCoaching} /> */}

  </Switch>  
</Router>
)};
 

export default App;
