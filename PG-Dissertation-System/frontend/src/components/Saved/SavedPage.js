import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PrimarySearchAppBar from '../AppBar/AppBar'
import CustomizedAccordions from './PlaylistAccordian/SavedAccordian'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import {styled} from '@mui/system'

// const newContainer = styled('div')(() => ({
//   margin: 'auto',
//   border: '2px solid red',
//   color:'red'
// }));
const MyComponent = styled('div')({
  display:'flex',
  justifyContent:'center',
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
});


function SavedPage() {
  const cardData = useSelector(state => state.dissertations.recentDisserts)
  const playdata = useSelector(state => state.playlists.playdata)
  const { isLoggedin } = useSelector(state => state)
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedin) {
      navigate('/');
    }
  }, [isLoggedin])

  const navData = {
    "name": "MyApp",
    "user": "Author",
    "page": "Saved",
    "userID": ""
  }
  return (
    <div>
      <PrimarySearchAppBar appdata={navData} />
      <MyComponent>
        <Typography variant="h4" color="initial" ><u>Saved Lists</u></Typography>
      </MyComponent>
      <CustomizedAccordions playlistData={playdata} />
    </div>
  )
}

export default SavedPage