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
import Drugs from "./views/Drug";
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
          <Route path="/my-app/doctors">
            <Doctors />
          </Route>
          
          <Route path="/my-app/hospitals">
            <Hospital />
          </Route>

          <Route path="/my-app/insurance">
            <InsuranceProviders />
          </Route>

          <Route path="/my-app/patients">
            <Patients />
          </Route>

          <Route path="/my-app/pharmacies">
            <Pharmacies />
          </Route>

          <Route path="/my-app/drugs">
            <Drugs />
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
