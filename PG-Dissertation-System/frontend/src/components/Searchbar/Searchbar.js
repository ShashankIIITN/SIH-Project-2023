import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import TuneIcon from '@mui/icons-material/Tune';
import { Collapse, Grid,Paper } from '@mui/material';
import Advsearch from './Advsearch';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import React from "react";
import "./searchbar.css"
const Searchbar = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
    return (<Collapse in={checked} orientation="horizontal" collapsedSize={55}><Paper elevation={24}><Accordion><TextField fullWidth InputProps={{
        startAdornment: <InputAdornment position="start"><IconButton onClick={handleChange}><SearchIcon/></IconButton></InputAdornment>,
        endAdornment: <AccordionSummary><InputAdornment position="end"><IconButton><TuneIcon/></IconButton></InputAdornment></AccordionSummary>,
      }}></TextField>
      <AccordionDetails>
      <Advsearch/>
      </AccordionDetails>
    </Accordion></Paper></Collapse>);
};
export default Searchbar;
