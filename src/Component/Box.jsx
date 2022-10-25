import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Box = ({ pokemon, loading,infoPokemon}) => {
   // console.log(pokemon);
    return (
        <>
        {
            loading ? <h1>Loading...</h1> :
                pokemon.map((item) => {
                    return (
                        <>

    

                            <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                                {/* <h2>{item.id}</h2>
                                <img src={item.sprites.front_default} alt="" />
                                <h2>{item.name}</h2> */}
                                          <Grid container spacing={4}>

                                      <Card  sx={{ maxWidth: 445,margin:5}}>
            0{item.id}
         <CardMedia
        component="img"
        // height={394}
        // width={1090}
        image={item.sprites.other.dream_world.front_default}
        alt={item.name}

      />
      <CardHeader
          // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          //   R
          // </Avatar>
       
        title={item.name}
        // subheader="S"
      />
   
      <CardContent>
        <Typography variant="body2" display="block" color="text.secondary">
        Type: {item.types[0].type.name}    
        <br></br>  
        height: {item.height}    
        <br></br>  
        weight: {item.weight}  
        <br></br>  
        base_experience: {item.base_experience} 
        <br></br>   
        order:{item.order} 
              </Typography>
      </CardContent>
    </Card>
    </Grid>

                            </div>
                        </>
                    )
                })
        }

        </>
    )
}
export default Box;