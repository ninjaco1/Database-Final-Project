import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Doctors from "./views/Doctors";
import Hospital from './views/Hospital';
import InsuranceProviders from './views/InsuranceProviders';
import Patients from "./views/Patients";
import Header from "./Components/Header"
import Pharmacies from "./views/Pharmacies";
import Home from "./Components/Home";



function App() {
  return (
    <div className="App">
   
      <Router>
        {/* header on every page */}
        <Header /> 
        {/* Route */}
        <Switch>
          <Route path="/doctors">
            <Doctors />
          </Route>
          
          <Route path="/hospitals">
            <Hospital />
          </Route>

          <Route path="/insurance">
            <InsuranceProviders />
          </Route>

          <Route path="/patients">
            <Patients />
          </Route>

          <Route path="/pharmacies">
            <Pharmacies />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
