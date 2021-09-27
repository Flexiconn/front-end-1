import './App.css';
import {useEffect} from "react";
import {setApi} from "./Global/Redux/Redux.actions";
import Navbar from "./Global/Navbar";
import {connect} from "react-redux";

const axios = require('axios')
const api = axios.create({
  baseURL: 'http://localhost:5001/',
  timeout: 10000
})


function App(props) {
  useEffect( () =>{
    props.dispatch(setApi(api))
  },[])

  return (
    <div>
      <Navbar/>
    </div>
  );
}

export default connect()(App);
