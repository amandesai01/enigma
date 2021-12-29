import { Grid } from '@mui/material';
import React from 'react';
import CardComponent from '../components/CardComponent';
import CreateTaskBlock from '../components/CreateTaskBlock';
import NavbarComponent from '../components/NavbarComponent';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';


function Main() {
  return (
    <div>
      




      <Box sx={{ flexGrow: 1 }}>
      
      <CreateTaskBlock />
      
      
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <div style={{ padding:"20px" }}>
                <CardComponent />
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>

    </div>

  );
}


export default Main;
