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
import { useNavigate } from 'react-router-dom';
const DemoPaper = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
}));
const Searchbar = () => {
  const handleEnterKey = (e) =>{
    if(e.key == "Enter" && e.target.value != "")
    {
        navigate('/advSearch')
    }
  }

  const navigate = useNavigate()

  const [checked, setChecked] = React.useState(false);


  const [back1, setback1] = React.useState('#1976d2');

  const[rad,setrad] = React.useState(0);
  const setrad1=()=>{
    if(rad==10)
    setrad((rad)=>0);
  else
  setrad((rad)=>10);
  }

  const handleback1change = () => {

    if (checked) {
      setback1((back1) => '#ffffff');
    }
    else
      setback1((back1) => '#1976d2');
    setrad1();
  }
  const handleChange = () => {
    if(expand && checked)
    toggleAcordion();
    setChecked((prev) => !prev);
  };
  const [expand, setExpand] = React.useState(false);
  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };
  return (<Collapse in={checked} timeout={500} orientation="horizontal" collapsedSize={54} onEntering={handleback1change} onExited={handleback1change}>
    <Accordion fullwidth disableGutters={true} sx={{overflow:'visible'}} expanded={expand}><TextField  onKeyDown={handleEnterKey} sx={{ background: back1, height: '3.3rem', borderRadius:rad,}}
      fullWidth disabled={!checked} InputProps={{
        startAdornment: <InputAdornment position="start"><IconButton sx={{ background: back1 }} onClick={handleChange}><SearchIcon /></IconButton></InputAdornment>,
        endAdornment: <AccordionSummary><InputAdornment position="end"><IconButton onClick={toggleAcordion}><TuneIcon /></IconButton ></InputAdornment></AccordionSummary>,
         sx: {borderRadius:10}}}></TextField>
      <AccordionDetails >
          <Advsearch  />
      </AccordionDetails>
    </Accordion></Collapse>);
};
export default Searchbar;
