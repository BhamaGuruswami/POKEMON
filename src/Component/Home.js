import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
// import '../App.css'

const Home = ({id, image, name, type,height,weight,base_experience,_callback }) => {
    const backcolor =`thumb-container ${type}` ;
    return (
        <div >
          <Grid container spacing={2}>
            <Grid item xs={12}>
          <Card className={backcolor}  sx={{ maxWidth: 345,margin:5,display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
            0{id}
         <CardMedia
        component="img"
        height={394}
        width={1090}
        image={image}
        alt={name}

      />
      <CardHeader
          // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          //   R
          // </Avatar>
       
        title={name}
        // subheader="S"
      />
   
      <CardContent>
        <Typography variant="body2" display="block" color="text.secondary">
        Type: {type}    
        <br></br>  
        height: {height}    
        <br></br>  
        weight: {weight}  
        <br></br>  
        base_experience: {base_experience}        </Typography>
      </CardContent>
    </Card>
    
          </Grid>
          </Grid>

        </div>
        
    )
}

export default Home
