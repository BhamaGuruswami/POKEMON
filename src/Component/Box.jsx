import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';

const Box = ({ pokemon, loading, infoPokemon }) => {
    // console.log(pokemon);

    return (
        <>
            {
                loading ? <h1>Loading...</h1> :
                    pokemon.map((item) => {
                        const backcolor = `Card ${item.types[0].type.name}`;

                        return (
                            <>
                                <div
                                    // className="card"
                                    key={item.id}
                                    onClick={() => infoPokemon(item)}

                                >

                                    <Grid container   >
                                        <Grid sm={12} sx={{ justifyContent: "center" }}>
                                            <div >
                                                <Card className={backcolor}
                                                    sx={{ height: 314, width: 268, textAlign: 'center', }}>
                                                    <CardMedia
                                                        component="img"
                                                        height={244}
                                                        width={390}
                                                        image={item.sprites.other.dream_world.front_default}
                                                        alt={item.name}
                                                        className={backcolor}
                                                    />
                                                    <CardHeader sx={{ textTransform: 'capitalize', textAlign: 'center' }}
                                                        title={item.name}
                                                        subheader={item.id}
                                                        className={backcolor}
                                                    />
                                                </Card>
                                            </div>

                                        </Grid>

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