import React from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

//   const  backcolor = `Container-all ${data.types[0].type.name}`
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
  const Info = ({ data }) => {
  
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    
    return (
        <>
            {
                (!data) ? "" : (

                    <>
                        <Grid container   >
                            <Grid sm={12} sx={{ justifyContent: "center" }}>
                                    <Card
                                        sx={{ height: 654, width: 368, textAlign: 'center',marginLeft:10}}>
                                        <CardMedia
                                            component="img"
                                            height={334}
                                            image={data.sprites.other.dream_world.front_default}
                                            alt={data.name}

                                        />
                                        <CardHeader sx={{ textTransform: 'capitalize', textAlign: 'center' }}
                                            title={data.name}
                                            subheader={data.id}

                                        />
                                        <CardContent>
                                            <Typography variant="body2" display="block">
                                                <b>Type</b> : {data.types[0].type.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <b>height</b> : {data.height}
                                                <br></br>
                                                <b>weight</b> : {data.weight} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <b>order</b> :{data.order}
                                                <br></br>
                                                <b>base_experience</b> : {data.base_experience}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>

<ExpandMore
  expand={expanded}
  onClick={handleExpandClick}
  aria-expanded={expanded}
  aria-label="show more"
>
  <ExpandMoreIcon />
</ExpandMore>
</CardActions>
<Collapse
 in={expanded}
 timeout="auto" unmountOnExit>
<CardContent>
  <Typography paragraph>species:</Typography>
  <Typography paragraph>
  {data.form_description}
  </Typography>

</CardContent>
</Collapse>

                                    </Card>

                            </Grid>
                        </Grid>
                  
                    </>
                )
            }

        </>
    )
}
export default Info