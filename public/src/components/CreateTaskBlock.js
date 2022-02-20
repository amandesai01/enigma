import { Button } from '@mui/material';
import React from 'react';
// import NavbarComponent from '../components/NavbarComponent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router-dom';

function CreateTaskBlock() {
  let history = useHistory();
    return (
        <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('https://source.unsplash.com/random')`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {/* {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />} */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Doing task quickly and efficiently
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum
            </Typography>
            {/* <Link variant="subtitle1" href="#">
              Link for something
            </Link> */}

            <Button 
                variant="contained"
                onClick={() => {
                  history.push("/TaskForm")
                }}
            >Create New Task</Button>

          </Box>
        </Grid>
      </Grid>
    </Paper>
    )
}


export default CreateTaskBlock;
