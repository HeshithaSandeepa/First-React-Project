import { Button, Input, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useState } from "react";

const UserForm = props => {

    const [id, setId] =useState(0);
    const [name, setName] =useState(''); //state variable  for re-render component

    return(
      <Grid
        container
        spacing = {2}
        sx = {{
          backgroundColor: '#ffffff',  //use key value pair style
          marginTop: '30px',
          display: 'block',
          marginLeft: '10px'

        }}
    >
        <Grid item xs = {12}>
          <Typography component = {'h1'} sx ={ {color: '#000000',display: 'flex' }}> User Form </Typography>
        </Grid>
        
        <Grid item xs={12} sm={6} sx={{ display: 'flex',alignItems: 'center'}} >
          <Typography 
          component={'label'} 
          htmlFor= "id"
          sx = {{
            color: '#000000',
            marginRight: '50px',
            fontSize : '16px',
            display: 'block',
          }}
          >
            ID
          </Typography>
          <Input
              type = "number"
              id = 'id'
              name = "id"
              sx = {{ width: '400px' }}
              value = {id}
              onChange={e => setId(e.target.value)}
          />
          
        </Grid>

        

        <Grid item xs={12} sm={6} sx={{ display: 'flex',alignItems: 'center'}} >
          <Typography 
          component={'label'} 
          htmlFor= "id"
          sx = {{
            color: '#000000',
            marginRight: '22px',
            fontSize : '16px',
            display: 'block',
          }}
          >
            Name
          </Typography>
          <Input
              type = "text"
              id = 'name'
              name = "name"
              sx = {{ width: '400px' }}
              value = {name}
              onChange={e => setName(e.target.value)}
          />
        </Grid>

        <Button
            sx={{
              margin: 'auto',
              marginBottom: '20px',
              backgroundColor: '#00c6e6',
              color: '#000000',
              marginLeft: '15px',
              marginTop: '20px',
              '&:hover' : {
                  opacity: '0.7',
                  backgroundColor: '00c6e6',
              }
            }}
        >
          Add 
        </Button>
    </Grid>
    );
}

export default UserForm;