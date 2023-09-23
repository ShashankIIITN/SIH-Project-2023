import React from 'react'
import PrimarySearchAppBar from '../AppBar/AppBar'
import MatExtModal from '../MaterialExtModal/MatExtModal'
import DissertationCard from '../DissertationCard/DissertationCard'

function MainSearchPage() {
    const navData = {
        "name": "MyApp",
        "user":"None",
        "page":"MainPage",
        "userID":""
      }
    const DissCardData = {
        "title": "",
        "tags":[],
        "authors":[],
        "mentor":"",
        "date":""

    };
    const modData = {
        "name": "External Mentors",
    }
    return (
        <>
            <PrimarySearchAppBar appdata={navData} />
            {/* <DissertationCard CardData = {DissCardData}/> */}
            {/* <ExtModal moddata={modData} /> */}
            <MatExtModal />
        </>


    )
}

export default MainSearchPage