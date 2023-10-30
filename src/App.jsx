import { useState } from 'react';
import Navbar from './components/Navbar';
import SliderSelect from './components/SliderSelect';
import TenureSelect from './components/TenureSelect';
import Result from './components/Result';
import { Container, Grid } from '@mui/material';


function App() {

  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmmount: 3000 * 0.8,
    loanTerm:5,
    interestRate:5
  });

  return (
    <>
    <Navbar/>
    <Container maxWidth="xl" sx={{mt:4}}>
      <Grid container spacing={5} alignItems="center">
        <Grid item md={6} xs={12}>
          <SliderSelect data={data} setData={setData}/>
          <TenureSelect data={data} setData={setData}/>
        </Grid>
        <Grid item md={6} xs={12}>
          <Result data={data}/>
        </Grid>
      </Grid>
    </Container>
      
    </>
  )
}

export default App
