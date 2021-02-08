import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
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
   
      {/* <Router> */}
        {/* header on every page */}
        <Header /> 
        {/* Route */}
        {/* <Switch> */}
          {/* <Route path="/my-app/doctors">
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
          <Route exact path="/">
            <Home />
          </Route> */}
        {/* </Switch> */}

      {/* </Router> */}
      <Route exact path='/'component={Home}/>
      <Route path='/doctors' component={Doctors}/>
      <Route path='/hospitals' component={Hospital}/>
      <Route path='/insurance' component={InsuranceProviders}/>
      <Route path='/patients' component={Patients}/>
      <Route path='/pharmacies' component={Pharmacies}/>
      <Route path='/drugs' component={Drugs}/>
     
    </div>
  );
}

export default App;
