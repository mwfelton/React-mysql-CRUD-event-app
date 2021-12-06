import './App.css';
// import Admin from "./components/Admin.js"

//admin page figure out
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './components/admin-page/Admin';
import Home from './components/Home';
import Yogaclasses from './components/Yogaclasses';


function App() {
  
return (
  <Router>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/admin" component={Admin} />
    <Route path="/yoga-classes-zurich" component={Yogaclasses} />

  </Switch>  
</Router>
)};
 

export default App;
