import React from 'react'
import PrimarySearchAppBar from '../AppBar/AppBar'
import Advsearchsidebar from '../Searchbar/Advsearchsidebar'
import { Box, IconButton, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import DissertationCard from '../DissertationCard/DissertationCard';

function AdvSearchPage() {

    const searchDisserts = useSelector(state => state.dissertations.searchedDisserts);
    const handleChange = () => {

    }
    const navData = {
        "name": "MyApp",
        "user": "None",
        "page": "AdvSearch",
        "userID": ""
    }
    return (
        <div >
            <PrimarySearchAppBar appdata={navData} />
            <div style={{ display: 'flex' }}>
                <Advsearchsidebar />
                <div className={'custdiv1'} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems:'center', flex: '2', paddingTop: '2rem' }}>

                    <TextField id="filled-basic" label="Filled" InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                        variant="filled" sx={{ width: '80%' }} />

                    <div className={'scrolldiv'}>

                        {searchDisserts && searchDisserts.map((carddata) => {
                            return <DissertationCard key={carddata.ID} CardData={carddata} />
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdvSearchPage