import React from 'react'
import PrimarySearchAppBar from '../AppBar/AppBar'

function SavedPage() {
    const navData = {
        "name": "MyApp",
        "user":"Author",
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