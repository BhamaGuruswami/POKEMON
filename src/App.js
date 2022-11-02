import React from 'react';
import Home from './Home.jsx';
import './App.css'
import Modal from './Component/Modal.jsx';
import { Grid } from '@mui/material';
function App() {
  return (
    <>
    <Grid>          
      <Home/>
      {/* <Modal/> */}
    </Grid>
    </>

  );
}

export default App;