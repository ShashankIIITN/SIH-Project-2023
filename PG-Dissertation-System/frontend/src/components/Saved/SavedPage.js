import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PrimarySearchAppBar from '../AppBar/AppBar'

function SavedPage() {
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