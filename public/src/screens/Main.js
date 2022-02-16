import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardComponent from '../components/CardComponent';
import CreateTaskBlock from '../components/CreateTaskBlock';
import NavbarComponent from '../components/NavbarComponent';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import axios from 'axios';


function Main() {

  const [tasks, setTasks] = useState([])

  
  useEffect(() => {
    const dataForApi = {}
  
    const headers = {
      token: localStorage.getItem("TOKEN")
    }
    axios.post('http://127.0.0.1:5000/alltasks', dataForApi, {headers})
    .then(response => {
      console.log(response)
      const { STATUS, MSG, DATA } = response.data
      if(STATUS == "FAIL") {
        alert(MSG)
      }
      else if(STATUS == "OK") {
        console.log("DATA")
        console.log(DATA)
        setTasks(DATA)
      }
      
    });
  },[])

  return (
    <div>
      




      <Box sx={{ flexGrow: 1 }}>
      
      <CreateTaskBlock />
      
        <h2>Tasks: ({tasks.length})</h2>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {tasks.map((task, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <div style={{ padding:"20px" }}>
                <CardComponent task={task} />
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>

    </div>

  );
}


export default Main;
