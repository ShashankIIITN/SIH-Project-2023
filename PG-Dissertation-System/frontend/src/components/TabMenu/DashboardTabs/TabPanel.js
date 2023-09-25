import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Ticket from '../../Ticket/Ticket';
import { useSelector } from 'react-redux';
import DissertationCard from '../../DissertationCard/DissertationCard';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function FullWidthTabs(props) {
    const DissCardData = useSelector(state=>state.dissertations.recentDisserts)
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const ticketData = useSelector(state => state.tickets.allTickets);
    const [checkedTik, setcheckedTik] = useState(false)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
            <AppBar position="static" color='default' sx={{ marginTop: '.2rem' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Pending Approvals" {...a11yProps(0)} />
                    <Tab label="Recently Approved" {...a11yProps(1)} />
                    <Tab label="Tickets" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    {DissCardData.map((carddata) => {
                        return <DissertationCard key={carddata.ID} CardData={carddata} />
                    })}
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    {DissCardData.map((carddata) => {
                        return <DissertationCard key={carddata.ID} CardData={carddata} />
                    })}
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    {ticketData.map((el, ind) =>
                        <Ticket ticketData={el} state={checkedTik} setState={setcheckedTik} />
                    )}
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}