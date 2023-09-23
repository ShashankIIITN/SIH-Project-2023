import { Button, Card, CardContent, Checkbox, Stack, Typography } from "@mui/material";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import CircleIcon from '@mui/icons-material/Circle';

const colorMap = {
  Pending: 'red',
  'in progress': 'yellow',
  resolved: 'green',

  High: 'red',
  Medium: 'yellow',
  Low: 'green',
};

export default function Ticket({checked, title, author, priority, status}) {
  return (  
    <Card sx={{margin: 2}} raised>
      <CardContent>
        <Stack alignItems='center' direction='row' justifyContent='space-between'>
            <Stack gap={5} direction='row'>
                <Checkbox checked={checked}/>
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
                </Stack>
            </Stack>
            <Button variant="outlined">Respond</Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
