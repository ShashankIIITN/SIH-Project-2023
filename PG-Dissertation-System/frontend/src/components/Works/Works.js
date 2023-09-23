import React from 'react'
import PrimarySearchAppBar from '../AppBar/AppBar'

function Works() {
    const navData = {
        "name": "MyApp",
        "user":"None",
        "page":"Works",
        "userID":""
      }
  return (
    <div>
        <PrimarySearchAppBar appdata = {navData} />
    </div>
  )
}

export default Works