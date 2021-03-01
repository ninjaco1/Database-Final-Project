import './App.css';
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import Doctors from "./views/Doctors";
import Hospital from './views/Hospital';
import InsuranceProviders from './views/InsuranceProviders';
import Patients from "./views/Patients";
import Drugs from "./views/Drug";
import Header from "./Components/Header"
import Pharmacies from "./views/Pharmacies";
import Relationships from "./views/Relationships";
import Home from "./Components/Home";



function App() {
  return (
    <div className="App">
   
      {/* <Router> */}
        {/* header on every page */}
        <Header /> 

      {/* </Router> */}
      <Route exact path='/'component={Home}/>
      <Route path='/doctors' component={Doctors}/>
      <Route path='/hospitals' component={Hospital}/>
      <Route path='/insurance' component={InsuranceProviders}/>
      <Route path='/patients' component={Patients}/>
      <Route path='/pharmacies' component={Pharmacies}/>
      <Route path='/drugs' component={Drugs}/>
      <Route path='/relationships' component={Relationships}/>
     
    </div>
  );
}

export default App;
