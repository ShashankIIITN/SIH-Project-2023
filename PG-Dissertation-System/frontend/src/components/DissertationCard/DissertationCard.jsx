import { Box, Button, Card, CardContent, Paper, Stack, Typography } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import './DissertationCard.css'

export default function DissertationCard(props) {
    const { title, tags, author, mentor, date } = props.CardData
    return (
        <Card sx={{margin: 2}} elevation={5}>
            <CardContent>
                <div className="dissertation-card-container">
                    <Paper variant='outlined'>
                        <img src='https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg' />
                    </Paper>
                    <Paper variant='outlined'>
                        <div className='dissertation-card'>
                            <Typography variant='h4'>{title}</Typography>
                            <BookmarkIcon/>
                            <Typography>{tags.map(tag => '#' + tag).join(' ')}</Typography>
                            <Typography>Author: {author}</Typography>
                            <Typography>Mentor: {mentor}</Typography>
                            <Typography>{date}</Typography>
                            <Button>View</Button>
                        </div>
                    </Paper>
                </div>
            </CardContent>
        </Card>
    )
}
