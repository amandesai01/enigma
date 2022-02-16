import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

// const card = (
//   <React.Fragment>
    
//   </React.Fragment>
// );

export default function CardComponent({ task }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">

      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {task.task_created_ts}
      </Typography>
      <Typography variant="h5" component="div">
        {task.task_name}
      </Typography>
      <Typography variant="h6" component="div">
        {task.task_description}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {task.task_status}
      </Typography>
      
    </CardContent>
    <CardActions>
      <Button size="small" href={`/task/${task.task_id}`}>Learn More</Button>
    </CardActions>


      </Card>
    </Box>
  );
}