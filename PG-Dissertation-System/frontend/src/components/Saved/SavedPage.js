import React from 'react'
import PrimarySearchAppBar from '../AppBar/AppBar'

function SavedPage() {
    const navData = {
        "name": "MyApp",
        "user":"None",
        "page":"Saved",
        "userID":""
      }
  return (
    <div>
        <PrimarySearchAppBar appdata ={navData}/>
    </div>
  )
}

export default SavedPage