import React from 'react'
import PrimarySearchAppBar from '../AppBar/AppBar'
import MatExtModal from '../MaterialExtModal/MatExtModal'

function MainSearchPage() {
    const navData = {
        "name": "MyApp",
    }
    const modData = {
        "name": "External Mentors",
    }
    return (
        <>
            <PrimarySearchAppBar appdata={navData} />
            {/* <ExtModal moddata={modData} /> */}
            <MatExtModal />
        </>


    )
}

export default MainSearchPage