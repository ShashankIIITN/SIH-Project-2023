import { Button, Card, CardContent, Modal, Stack, Typography } from '@mui/material'
import React from 'react'

function MentorCard({ name, approved }) {
    return (
        <Card raised>
            <CardContent>
                <Typography variant='h5'>{name}</Typography>
                <Typography>Status: {approved ? 'Approved' : 'Pending'}</Typography>
            </CardContent>
        </Card>
    )
}

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4
};

export default function ExternalMentorModal({ mentors, open, onClose }) {
    return (
        <Modal open={open} onClose={onClose}>
            <Stack sx={modalStyle} gap={2}>
                <Button variant='outlined'>+ External Mentor</Button>
                {mentors.map(mentor => <MentorCard key={mentor.id} {...mentor} />)}
                <Stack justifyContent='space-between' direction='row'>
                    <Button variant='outlined'>Approve</Button>
                    <Button variant='outlined'>Reject</Button>
                </Stack>
            </Stack>
        </Modal>
    )
}
