import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={4}>
  
      </Grid>
      <Grid item xs={8}>
       
      </Grid>

    </Grid>
  );
}

export default App;
