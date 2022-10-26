import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Info = ({ data }) => {
    const backcolor = `card ${data.types[0].type.name}`

    return (
        <>
            {
                (!data) ? "" : (

                    <>
                        <Grid container   >
                            <Grid sm={12} sx={{ justifyContent: "center" }}>
                                <div >
                                    <Card
                                        sx={{ height: 404, width: 368, textAlign: 'center', }}>
                                        <CardMedia
                                            component="img"
                                            height={334}
                                            image={data.sprites.other.dream_world.front_default}
                                            alt={data.name}
                                            className={backcolor}
                                        />
                                        <CardHeader sx={{ textTransform: 'capitalize', textAlign: 'center' }}
                                            title={data.name}
                                            subheader={data.id}
                                            className={backcolor}

                                        />
                                        <CardContent>
                                            <Typography variant="body2" display="block">
                                                <b>Type</b> : {data.types[0].type.name}
                                                <br></br>
                                                <b>height</b> : {data.height}
                                                <br></br>
                                                <b>weight</b> : {data.weight}
                                                <br></br>
                                                <b>base_experience</b> : {data.base_experience}
                                                <br></br>
                                                <b>order</b> :{data.order}
                                            </Typography>
                                        </CardContent>

                                    </Card>
                                </div>
                                <b>Type</b> : {data.types[0].type.name}
                                <br></br>
                                <b>height</b> : {data.height}
                                <br></br>
                                <b>weight</b> : {data.weight}
                                <br></br>
                                <b>base_experience</b> : {data.base_experience}
                                <br></br>
                                <b>order</b> :{data.order}

                            </Grid>
                        </Grid>
                        {/* <h1>{data.name}</h1>
                    <h1>{data.id}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                    <div className="abilities">
                        {
                            data.abilities.map(poke=>{
                                return(
                                    <>
                                     <div className="group">
                                          <b>Type</b> : {data.types[0].type.name}
                                                    <br></br>
                                                   <b>height</b> : {data.height}
                                                    <br></br>
                                                    <b>weight</b> : {data.weight}
                                                    <br></br>
                                                   <b>base_experience</b> : {data.base_experience}
                                                    <br></br>
                                                   <b>order</b> :{data.order}                                    </div>
                                    </>
                                )
                            })
                        }
                    </div> */}
                        {/* <div className="base-stat">
                        {
                            data.stats.map(poke=>{
                                return(
                                    <>
                                    </>
                                )
                            })
                        }
                    </div> */}
                    </>
                )
            }

        </>
    )
}
export default Info;