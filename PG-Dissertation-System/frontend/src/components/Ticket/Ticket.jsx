import { Button, Card, CardContent, Checkbox, Hidden, Stack, Typography } from "@mui/material";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from "react";
import { useSelector } from "react-redux";
import { CalendarIcon } from "@mui/x-date-pickers";

const colorMap = {
  Pending: 'red',
  'in progress': 'yellow',
  resolved: 'green',

  High: 'red',
  Medium: 'yellow',
  Low: 'green',
};

export default function Ticket(props) {
 const { title, author, priority, status , date} = props.ticketData;

 console.log(title)
 
 const checked = props.state
 const setter = props.setState
  return (  
    <Card sx={{margin: 2}} raised>
      <CardContent>
        <Stack alignItems='center' direction='row' justifyContent='space-between'>
            <Stack gap={5} direction='row'>
                <Checkbox checked={checked} 
                onChange={()=>{setter(!checked)}}/>
                <Stack>
                    <Typography variant="h5">{title}</Typography>
                    <Stack direction='row'>
                        <LocalPhoneOutlinedIcon />
                        <Typography>{author}</Typography>
                    </Stack>
                </Stack>
                <Stack justifyContent='space-between'>
                    <Stack gap={1} direction="row">
                        <CircleIcon sx={{color: colorMap[priority]}}/>
                        <Typography>{priority}</Typography>
                    </Stack>
                    <Stack gap={1} direction="row">
                        <CircleIcon sx={{color: colorMap[status]}}/>
                        <Typography>{status}</Typography>
                    </Stack>
                    <Stack gap={1} direction="row">
                        <CalendarIcon sx={{color: colorMap[status]}}/>
                        <Typography>{date}</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Button variant="outlined">Respond</Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
