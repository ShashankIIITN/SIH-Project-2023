import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';


export default function ExtMentCard() {
    return (
        <Card sx={{ minWidth: '100%', border: '1px solid black', padding:'0%', background:'lightgrey'}}>
            <CardContent>
                <Typography variant="subtitle1" color="initial">
                    Dr. Nilesh Pikle
                </Typography>
                <Typography variant="caption" color="initial">
                September 14, 2016
                </Typography>
            </CardContent>
        </Card>
    );
}