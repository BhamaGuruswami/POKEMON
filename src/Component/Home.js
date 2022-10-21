import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Home = ({id, image, name, type,height,weight,base_experience,_callback }) => {
    const style = type + " thumb-container";
    return (
        <div className={style}>
            {/* <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
                <br></br>
                <small>height: {height}</small>
                <br></br>
                <small>weight: {weight}</small>
                <br></br>
                <small>base_experience: {base_experience}</small>


            </div> */}
            <Card sx={{ maxWidth: 345,margin:5 }}>
            0{id}
         <CardMedia
        component="img"
        height="394"
        width={990}
        image={image}
        alt="nu"

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

        </div>
        
    )
}

export default Home
