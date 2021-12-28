import { Button, Input, Paper, TextField } from '@mui/material';
import React from 'react';

function TaskForm() {
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"80vh",
      // backgroundColor:"pink"
    }}>
      <Paper style={{
        minWidth: "50%",
        maxWidth: "100%",
        padding:"30px"
      }} elevation={5} >

        <div style={{ textAlign:"center" }}>
          <h2>
            Create Task 
          </h2>
        </div>

        <TextField fullWidth style={{ marginTop:"10px" }} label="Title" id="Title" />
        <TextField fullWidth style={{ marginTop:"10px" }} label="Something" id="Something" />
        <br></br><br></br>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          fullWidth
          multiline
          rows={4}
          defaultValue=""
        />

        <br></br><br></br>
        <label htmlFor="contained-button-file">
          <Input style={{ display:"none" }} accept="image/*" id="contained-button-file" multiple type="file" />
          <Button variant="contained" component="span">
            Upload zip file
          </Button>
        </label>

        <div style={{
          textAlign:"center"
        }}>
          <Button 
            variant="contained"
            style={{ backgroundColor: "black", color:"white" }}
          >Submit</Button>
        </div>

      </Paper>
    </div>
  );
}


export default TaskForm;
