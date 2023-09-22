import React from 'react'
import PrimarySearchAppBar from '../AppBar/AppBar.js'

function Dashboard() {
  const navData = {
    "name": "MyApp",
    "user":"Author",
    "userID":"1234"
  }
  return (
    <PrimarySearchAppBar appdata={navData} />
  )
}

export default Dashboard