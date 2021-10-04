import './App.css';
import {useEffect} from "react";
import {setApi} from "./Global/Redux/Redux.actions";
import Navbar from "./Global/Navbar";
import {connect} from "react-redux";
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import routes from './routes';

const axios = require('axios')
const api = axios.create({
  baseURL: 'http://localhost:5001/',
  timeout: 10000
})


function App(props) {
  useEffect( () =>{
    props.dispatch(setApi(api))
  },[])
  const content = useRoutes(routes);

  return (
     <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {content}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default connect()(App);
