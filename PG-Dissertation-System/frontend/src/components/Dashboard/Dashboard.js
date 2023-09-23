import React, { useEffect } from 'react'
import PrimarySearchAppBar from '../AppBar/AppBar.js'
import DissertationCard from '../DissertationCard/DissertationCard.jsx'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import TabPanel from '../TabMenu/TabPanel.js'

function Dashboard() {
  const {isLoggedin} = useSelector(state=>state)
  const navigate = useNavigate();
  useEffect(() => {
      if(!isLoggedin)
      {
        navigate('/');
      }
  }, [isLoggedin])
  
  const navData = {
    "name": "MyApp",
    "user": "Author",
    "page": "Dashboard",
    "userID": "1234"
  }
  const carddata = {
    "title": "asdawd", "tags": [], "authors": [], "mentor": "awdawd", "date": ""
  }
  return (
    <>
      <PrimarySearchAppBar appdata={navData} />
      <TabPanel/>
    </>
  )
}

export default Dashboard