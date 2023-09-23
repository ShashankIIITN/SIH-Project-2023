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

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (<Collapse in={checked} orientation="horizontal" collapsedSize={55}><DemoPaper elevation={0}><Accordion><TextField sx={{background:'#1976d2', height:'3.3rem'}}
   fullWidth InputProps={{
    startAdornment: <InputAdornment position="start"><IconButton sx={{background:'#1976d2'}} onClick={handleChange}><SearchIcon /></IconButton></InputAdornment>,
    endAdornment: <AccordionSummary ><InputAdornment position="end"><IconButton ><TuneIcon /></IconButton ></InputAdornment></AccordionSummary>,
  }}></TextField>
    <AccordionDetails >
    <Advsearch />
    </AccordionDetails>
  </Accordion></DemoPaper></Collapse>);
};
export default Searchbar;
