import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PrimarySearchAppBar from '../AppBar/AppBar'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import OutlinedCard from './sponsorshipcards/SponsorshipCards'
import DissertationCard from '../DissertationCard/DissertationCard'


const cardData = [{
    "companyName": "Zomato",
    "title": "Deep Learn model for customer Analysis",
    "institute": "IIIT Nagpur",
    "author": "Saitama",
    "mentor": "Albert"
}, {
    "companyName": "Zomato",
    "title": "Deep Learn model for customer Analysis",
    "institute": "IIIT Nagpur",
    "author": "Saitama",
    "mentor": "Albert"
},
{
    "companyName": "Zomato",
    "title": "Deep Learn model for customer Analysis",
    "institute": "IIIT Nagpur",
    "author": "Saitama",
    "mentor": "Albert"
},
{
    "companyName": "Zomato",
    "title": "Deep Learn model for customer Analysis",
    "institute": "IIIT Nagpur",
    "author": "Saitama",
    "mentor": "Albert"
},
{
    "companyName": "Zomato",
    "title": "Deep Learn model for customer Analysis",
    "institute": "IIIT Nagpur",
    "author": "Saitama",
    "mentor": "Albert"
},
{
    "companyName": "Zomato",
    "title": "Deep Learn model for customer Analysis",
    "institute": "IIIT Nagpur",
    "author": "Saitama",
    "mentor": "Albert"
},
{
    "companyName": "Zomato",
    "title": "Deep Learn model for customer Analysis",
    "institute": "IIIT Nagpur",
    "author": "Saitama",
    "mentor": "Albert"
},
{
    "companyName": "Zomato",
    "title": "Deep Learn model for customer Analysis",
    "institute": "IIIT Nagpur",
    "author": "Saitama",
    "mentor": "Albert"
}
]

function Sponsorship() {
    const { isLoggedin } = useSelector(state => state)
    const recentDisserts = useSelector(state => state.dissertations.recentDisserts)
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedin) {
            navigate('/');
        }
    }, [isLoggedin])

    const navData = {
        "name": "MyApp",
        "user": "None",
        "page": "Sponsorship",
        "userID": ""
    }
    return (
        <div>
            <PrimarySearchAppBar appdata={navData} />
            <Box margin={2}>
                <Typography variant="h4" color="initial"><u>Sponsorship Requests</u></Typography>
                <div className='spcards'>
                    {cardData.map((cardData) => {
                        return <OutlinedCard cardData={cardData} />
                    })}
                </div>
            </Box>
            {/* <div className="spcards">

<OutlinedCard />
<OutlinedCard />
<OutlinedCard />
                    <OutlinedCard />
                    <OutlinedCard />
                    <OutlinedCard />
                    <OutlinedCard />
                    <OutlinedCard />
                    <OutlinedCard />
                    <OutlinedCard />
                    <OutlinedCard />
                    
                </div> */}
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Typography variant="h4" color="initial"><u>Sponsored Dissertations</u></Typography>

                {recentDisserts.map((carddata) => {
                    return <DissertationCard key={carddata.ID} CardData={carddata} />
                })}
            </Box>
        </div>
    )
}

export default Sponsorship