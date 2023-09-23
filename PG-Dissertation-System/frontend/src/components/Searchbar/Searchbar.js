import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import TuneIcon from '@mui/icons-material/Tune';
import { Collapse, Grid, Paper } from '@mui/material';
import Advsearch from './Advsearch';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import React from "react";
import { styled } from '@mui/material/styles';
import "./searchbar.css"
const DemoPaper = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
}));
const Searchbar = () => {
  const [checked, setChecked] = React.useState(false);


  const [back1, setback1] = React.useState('#1976d2');

  const handleback1change = () => {

    if (checked) {
      setback1((back1) => '#ffffff');
    }
    else
      setback1((back1) => '#1976d2');
  }
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (<Collapse in={checked} timeout={500} orientation="horizontal" collapsedSize={54} onEntering={handleback1change} onExited={handleback1change}>
    <Accordion fullwidth disableGutters={true}><TextField sx={{ background: back1, height: '3.3rem' }}
      fullWidth disabled={!checked} InputProps={{
        startAdornment: <InputAdornment position="start"><IconButton sx={{ background: back1 }} onClick={handleChange}><SearchIcon /></IconButton></InputAdornment>,
        endAdornment: <AccordionSummary><InputAdornment position="end"><IconButton ><TuneIcon /></IconButton ></InputAdornment></AccordionSummary>,
      }}></TextField>
      <AccordionDetails >
          <Advsearch  />
      </AccordionDetails>
    </Accordion></Collapse>);
};
export default Searchbar;
