import logo from './logo.svg';
import './App.css';
import CurrencyConverter from './components/CurrencyConverter';
import Check from './components/Check';
import FormValidation from './components/FormValidation';
import ColorButtons from './components/ColorButtons';
import Test from './components/Test';
import Formik_formValidaion from './components/Formik_formValidaion';
import Task from './components/Task';
// import UseEffect from './components/UseEffect';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Career from './components/Career';
import AboutUs from './components/AboutUs';
import Task2 from './components/Task2';
function App() {
  return (
    <>
      {/* <CurrencyConverter/> */}
      {/* <Check/> */}
      {/* <FormValidation/> */}
      {/* <ColorButtons/> */}
      {/* <Formik_formValidaion/> */}
      {/* <S/> */}
        {/* <Test/> */}
      {/* <UseEffect/> */}
      <BrowserRouter>
        <Task/>
        <Switch>
          <Route exact path="/career" component={Career}/>
          <Route path="/aboutus" component={AboutUs}/>
          <Route path="/task2" component={Task2}/>
        </Switch>
      </BrowserRouter>
    </>    
  );
}

export default App;
