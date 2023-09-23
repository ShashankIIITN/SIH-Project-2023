import React from 'react'
import PrimarySearchAppBar from '../AppBar/AppBar.js'
import DissertationCard from '../DissertationCard/DissertationCard.jsx'

function Dashboard() {
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
      <DissertationCard CardData={carddata} />
    </>
  )
}

export default Dashboard