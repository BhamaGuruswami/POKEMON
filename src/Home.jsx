import React from "react";
import Box from "./Component/Box";
import Info from './Component/Info'
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Heading from "./Component/Heading";
const Home = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();

    const pokeFun = async () => {
        setLoading(true)
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)
            setPokeData(state => {
                state = [...state, result.data]
                state.sort((a, b) => a.id > b.id ? 1 : -1)
                return state;
            })
        })
    }
    useEffect(() => {
        pokeFun();
    }, [url])
    return (
        <>

            <div className="container">
                <Grid>
                    <Typography sx={{ marginLeft: '23px', }}>

                        <Typography sx={{ marginRight:'3px' }}>
                            <h1>Pokedex</h1>
                            <p> Search for a pokemon
                        
                            </p>
                        </Typography>
                        <Grid item xs={12}>
                            <Heading />

                        </Grid>
                    </Typography>

                </Grid>

            </div>
            <div className="container">
                <Grid container spacing={2}>
                    <Grid item xs={6} >
                        <div className="left-content">

                            <Box pokemon={pokeData} loading={loading}
                                infoPokemon={poke => setPokeDex(poke)}
                            />

                            <div className="btn-group">
                                {prevUrl && <button onClick={() => {
                                    setPokeData([])
                                    setUrl(prevUrl)
                                }}>Previous</button>}

                                {nextUrl && <button onClick={() => {
                                    setPokeData([])
                                    setUrl(nextUrl)
                                }}>Next</button>}

                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={4}>
                        <Info data={pokeDex} />
                    </Grid>


                </Grid>

            </div>
        </>
    )
}
export default Home;