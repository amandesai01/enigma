import { Button, Input, Paper, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

const headers = {
  token: localStorage.getItem("TOKEN")
}

function TaskForm() {

  const [taskName, setTaskName] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [zipFile, setZipFile] = useState()
  const [textFile, setTextFile] = useState()
  

  const getZipFileId = async (f) => {
    
    const formData = new FormData();
    formData.append("zip_file", f);

    setTimeout(() => {
      return "randomZipFileId"
    },1000)

    // Uncomment this and replace AAAAAA in below line with actual API
    // const response = await axios.post('http://127.0.0.1:5000/AAAAAA', formData, {headers})
      
    // console.log(response)
    // const { STATUS, MSG, task_zip_file_id } = response.data
    // if(STATUS == "FAIL") {
    //   alert(MSG)
    //   return ""
    // }
    // else if(STATUS == "OK") {
    //   return task_zip_file_id 
    // }
  }

  // code not tested yet
  const submitForm = async (e) => {
    // Some validations
    
    const task_zip_file_id = await getZipFileId(zipFile)

    
    const formData = new FormData();
    formData.append("datasource_file", textFile);
    formData.append("task_name", taskName);
    formData.append("task_description", taskDescription);
    formData.append("task_zip_file_id", task_zip_file_id);
    
    axios.post('http://127.0.0.1:5000/newtask', formData, {headers})
    .then(response => {
      console.log(response)
      const { STATUS, MSG, TASK } = response.data
      if(STATUS == "FAIL") {
        alert(MSG)
      }
      else if(STATUS == "OK") {
        console.log("TASK")
        console.log(TASK)
        alert(JSON.stringify(TASK))
      }
      
    });
    

  }


  
    const onTextFileChange = (e) => {
      console.log(e.target.files[0])
      setTextFile(e.target.files[0])
    }
    const onZipFileChange = (e) => {
      console.log(e.target.files[0])
      setZipFile(e.target.files[0])
    }

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

        <TextField 
          fullWidth
          style={{ marginTop:"10px" }} 
          value={taskName} 
          onChange={(e) => setTaskName(e.target.value)} 
          label="Task Name" 
          required
          id="Title" />
        <br></br><br></br>
        <TextField
          id="outlined-multiline-static"
          label="Task Description"
          fullWidth
          multiline
          rows={4}
          defaultValue=""
          required
          value={taskDescription} 
          onChange={(e) => setTaskDescription(e.target.value)}
        />

        <br></br><br></br>
        <label htmlFor="contained-button-file1">
          <Input 
            style={{ display:"none" }} 
            accept=".zip" 
            id="contained-button-file1" 
            type="file"
            onChange={onZipFileChange} 
            required
          />
          <Button variant="contained" component="span">
            Upload zip file
          </Button>
          {zipFile && zipFile.name ? <p>Uploaded zip file: {zipFile.name}</p> : "Zip file not uploaded"}
        </label>

        <br></br><br></br>

        <label htmlFor="contained-button-file2">
          <Input 
            style={{ display:"none" }} 
            accept=".txt" 
            id="contained-button-file2" 
            type="file"
            required
            onChange={onTextFileChange} 
          />
          <Button variant="contained" component="span">
            Upload text file
          </Button>
          {textFile && textFile.name ? <p>Uploaded text file: {textFile.name}</p> : "Text file not uploaded"}
        </label>

        <div style={{
          textAlign:"center"
        }}>
          <Button 
            variant="contained"
            onClick={submitForm}
            style={{ backgroundColor: "black", color:"white" }}
          >Submit</Button>
        </div>

      </Paper>
    </div>
  );
}


export default TaskForm;
