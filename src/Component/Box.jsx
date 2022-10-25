import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Box = ({ pokemon, loading, infoPokemon }) => {
    // console.log(pokemon);
    return (
        <>
            {
                loading ? <h1>Loading...</h1> :
                    pokemon.map((item) => {
                        return (
                            <>
                                <div 
                                // className="card"
                                 key={item.id} onClick={() => infoPokemon(item)}>

                                    <Grid container >
                                        <Card  sx={{ height:500,marginBottom:0}}>
                                            0{item.id}
                                            <CardMedia
                                                component="img"
                                                // height={394}
                                                // width={1090}
                                                image={item.sprites.other.dream_world.front_default}
                                                alt={item.name}
                                            />
                                            <CardHeader sx={{textTransform:'capitalize'}}
                                                title={item.name}
                                            />
                                            <CardContent>
                                                <Typography variant="body2" display="block">
                                                   <b>Type</b> : {item.types[0].type.name}
                                                    <br></br>
                                                   <b>height</b> : {item.height}
                                                    <br></br>
                                                    <b>weight</b> : {item.weight}
                                                    <br></br>
                                                   <b>base_experience</b> : {item.base_experience}
                                                    <br></br>
                                                   <b>order</b> :{item.order}
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