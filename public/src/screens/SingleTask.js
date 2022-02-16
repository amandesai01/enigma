import { Button, Card, CardActions, CardContent, Container, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import CardComponent from '../components/CardComponent';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

function SingleTask() {
  const { id } = useParams();
  console.log(id);

  const [task, setTask] = React.useState()

  useEffect(() => {
  
    const headers = {
      token: localStorage.getItem("TOKEN")
    }
    axios.post(`http://127.0.0.1:5000/task?task_id=${id}`, {}, {headers})
    .then(response => {
      const { STATUS, MSG, TASK } = response.data
      console.log(response)
      if(STATUS == "FAIL") {
        alert(MSG)
      }
      else if(STATUS == "OK") {
        setTask(TASK)
      }
      
    });
  },[])

  if(!task){
    return <div>
      Loading...
    </div>
  }

  return (
    <Container>
      <h1> {task.task_name} </h1>
      <p>ID: {id}</p>
      <hr></hr>

      <h3 style={{
        fontStyle:"italic",
        fontWeight:"lighter"
      }}>{task.task_description}</h3>

      <br></br>
      <h2>Task Status: {task.task_status}</h2>      

      <br></br>
      <h2>Progress</h2>
      <LinearProgressWithLabel value={70} />


      <br></br>
      <h2>Zip file link</h2>
      <a href="https://www.gyaanibuddy.com/">https://www.gyaanibuddy.com/</a>

      <br></br><br></br>
      <h2>Tasks alloted</h2>
      {[1,2,3,4,5,6,7].map((k) => {
        return (
          <div style={{ margin:"20px" }}>
            <Card>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  be nev o lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>

          </div>
        )
      })}
      

    </Container>
  );
}


export default SingleTask;
