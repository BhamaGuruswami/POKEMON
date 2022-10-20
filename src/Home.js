import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Home({ pokemon }) {
  return (
    <div>
      {pokemon.map(p => (
        <div key={p}>{p}</div>
      ))}
    </div>
  )
}