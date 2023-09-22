import { Card, CardContent, Stack, Typography } from '@mui/material'

export default function DissertationCard(props) {
    const { title, tags, authors, mentor, date } = props.CardData
    return (
        <Card raised>
            <CardContent>
                <Typography variant='h4'>{title}</Typography>
                <Typography>{tags.map(tag => '#' + tag).join(' ')}</Typography>
                <Stack direction='row' spacing={5}>
                    <Typography>Authors: {authors.join(', ')}</Typography>
                    <Typography>Mentor: {mentor}</Typography>
                    <Typography>{date}</Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}
