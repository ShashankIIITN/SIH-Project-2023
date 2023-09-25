import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './cards.css';

const bull = (
    <Box
        component="div"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const card = (props) =>(
    <React.Fragment>
        <CardContent sx={{bgcolor:'lightgrey'}}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                { props.companyName}
            </Typography>
            <Typography variant="h5" component="div">
                {props.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.institute}
            </Typography>
            <Typography variant="body2">
               {`Author: ` + props.author }
                <br />
                {`Mentor: `+props.mentor}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);

export default function OutlinedCard(props) {
    return (
        <Box sx={{ minWidth: 250,  overflow:'hidden', scrollSnapAlign:'center', bgcolor:'grey' }}>
            <Card variant="outlined" >{card(props.cardData)}</Card>
        </Box>
    );
}