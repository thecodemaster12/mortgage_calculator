import { Container,Stack } from '@mui/material'
import React from 'react';

const Footer = () => {
  return (
    <>
    <Stack 
    direction="row"
    spacing={{ xs: 1, sm: 1.5, md: 2 }}
    my={{xs: 6, sm: 5, md: 12, lg: 15}}
    justifyContent="end"
    >
      <a href="https://github.com/thecodemaster12" target='_blank'><i class="fa-brands fa-github fa-xl" style={{color: "#fff"}}></i></a>
      <a href="https://www.linkedin.com/in/saifur-rahman-shihab/" target='_blank'><i class="fa-brands fa-linkedin fa-xl" style={{color: "#fff"}}></i></a>
    </Stack>
    </>
  )
}

export default Footer