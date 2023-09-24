import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import DissertationCard from '../../DissertationCard/DissertationCard';
import Container from '@mui/material/Container'
import { Box } from '@mui/material';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `4px solid ${theme.palette.text.secondary}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    margin: 'auto',
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '2rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions(props) {
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            {props.playlistData && props.playlistData.map((el, ind) => {
                return <Accordion expanded={expanded === `panel${ind}`} onChange={handleChange(`panel${ind}`)}>
                    <AccordionSummary aria-controls={`panel${ind}d-content`} id={`panel${ind}d-header`}>
                        <Typography variant='h5'>{el.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography  >
                            {el.cardData.map((carddata) => {
                                return <DissertationCard key={carddata.ID} CardData={carddata} />
                            })}
                        </Typography>

                    </AccordionDetails>
                </Accordion>
            })}

        </div>
    );
}