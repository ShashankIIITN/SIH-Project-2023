import { Divider, Drawer, Grid, Hidden, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { DatePicker } from '@mui/x-date-pickers';
import Switch from '@mui/material/Switch';
import InputAdornment from '@mui/material/InputAdornment';
import React from "react";
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import "./searchbar.css"
import { useRef } from 'react';

const CustomDiv = styled('div')(() => ({
  width: '25%',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  height: '91vh',
  overflow: 'auto',
}));
const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));
const Advsearchsidebar = () => {
  const [checked, setChecked] = React.useState(true);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  const [chipData, setChipData] = React.useState([
  ]);
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  const insertchip = (chiptoinsert) => {
    setChipData([...chipData, { key: chipData.length, label: chiptoinsert }]);
  };
  const [chipData1, setChipData1] = React.useState([
  ]);
  const [textv, settextv] = React.useState();
  const setValue = (e) => {
    settextv(e);
  };
  const handleDelete1 = (chipToDelete) => () => {
    setChipData1((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  const insertchip1 = (chiptoinsert, inc1, ev) => {
    setChipData1([...chipData1, { key: chipData1.length, label: chiptoinsert, inc: inc1 }]);
    setValue('');
    ev.target.value = '';
  };
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <CustomDiv >
      <Typography variant="h4" sx={{ bgcolor: 'aliceblue', textAlign: 'center', width: '100%' }} gutterBottom>
        Filters
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={1} />
        <Grid item xs={10} sx={{ overflow: 'hidden' }}>
          <TextField variant="standard" fullWidth label="ISSN/DOI Number"></TextField>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid item xs={10} sx={{ overflow: 'hidden' }}>
          <Autocomplete variant="standard"
            options={top100Films} fullWidth label="Tags" onChange={(ev, v, reason) => {
              if (reason === "selectOption") {
                insertchip(v.label);
                ev.preventDefault();
              }
            }}
            renderInput={(params) => <TextField variant="standard" {...params} label="Tags" />}></Autocomplete>
          <Paper
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              listStyle: 'none',
            }}
          >
            {chipData.map((data) => {
              return (
                <ListItem key={data.key}>
                  <Chip
                    sx={{
                      height: 'auto',
                      '& .MuiChip-label': {
                        display: 'block',
                        whiteSpace: 'normal',
                      },
                    }}
                    label={data.label}
                    onDelete={handleDelete(data)}
                  />
                </ListItem>
              );
            })}
          </Paper>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid item xs={10} sx={{ overflow: 'hidden' }}>
          <TextField variant="standard" inputRef={inputRef} fullWidth label="Keywords" onChange={(v) => setValue(v.target.value)} onKeyDown={(ev) => {
            if (ev.key === 'Enter' && textv.length > 0) {
              let x = 0;
              if (checked)
                x = 1;
              insertchip1(textv, x, ev);
              ev.preventDefault();
            }
          }} InputProps={{
            endAdornment: <InputAdornment position="end"><FormGroup>
              <FormControlLabel control={<Switch checked={checked} onChange={toggleChecked} onClick={handleClick} />} label={`${checked ? 'Include' : 'Exclude'}`} /></FormGroup></InputAdornment>
          }}></TextField>
          <Paper
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              listStyle: 'none',
            }}
          >
            {chipData1.map((data) => {
              let icon;
              if (data.inc === 1) {
                icon = <DoneIcon />;
              }
              else {
                icon = <CloseIcon />;
              }
              return (
                <ListItem key={data.key}>
                  <Chip
                    sx={{
                      height: 'auto',
                      '& .MuiChip-label': {
                        display: 'block',
                        whiteSpace: 'normal',
                      },
                    }}
                    icon={icon}
                    label={data.label}
                    onDelete={handleDelete1(data)}
                  />
                </ListItem>
              );
            })}
          </Paper>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={2} />
        <Grid item xs={8}>
          Date of Publication
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DemoContainer sx={{ overflow: 'hidden' }} components={['DatePicker']} >
              <DatePicker label="From" slotProps={{ textField: { variant: "standard" } }} />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={2} />
        <Grid item xs={8}>

          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DemoContainer sx={{ overflow: 'hidden' }} components={['DatePicker']} >
              <DatePicker label="To" slotProps={{ textField: { variant: "standard" } }} />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={1} />
        <Grid item xs={10} sx={{ overflow: 'hidden' }}>
          <Autocomplete variant="standard"
            freeSolo
            id="Institute"
            options={top100Films}
            renderInput={(params) => <TextField variant="standard" {...params} label="Institute" />}
          />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid item xs={10} sx={{ overflow: 'hidden' }}>
          <Autocomplete variant="standard"
            freeSolo
            id="Department"
            options={top100Films}
            renderInput={(params) => <TextField variant="standard" {...params} label="Department" />}
          />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid item xs={10} sx={{ overflow: 'hidden' }}>
          <Autocomplete variant="standard"
            freeSolo
            id="Author"
            options={top100Films}
            renderInput={(params) => <TextField variant="standard" {...params} label="Author" />}
          />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid item xs={10} sx={{ overflow: 'hidden' }}>
          <Autocomplete variant="standard"
            freeSolo
            id="Mentor"
            options={top100Films}
            renderInput={(params) => <TextField variant="standard" {...params} label="Mentor" />}
          />
        </Grid>
      </Grid>
    </CustomDiv>
  );
};
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },
  { label: 'Like Stars on Earth', year: 2007 },
  { label: 'Taxi Driver', year: 1976 },
  { label: 'Lawrence of Arabia', year: 1962 },
  { label: 'Double Indemnity', year: 1944 },
  {
    label: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { label: 'Amadeus', year: 1984 },
  { label: 'To Kill a Mockingbird', year: 1962 },
  { label: 'Toy Story 3', year: 2010 },
  { label: 'Logan', year: 2017 },
  { label: 'Full Metal Jacket', year: 1987 },
  { label: 'Dangal', year: 2016 },
  { label: 'The Sting', year: 1973 },
  { label: '2001: A Space Odyssey', year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: 'Toy Story', year: 1995 },
  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];
export default Advsearchsidebar;
