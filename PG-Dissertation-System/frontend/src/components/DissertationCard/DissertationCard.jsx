import { Box, Button, Card, CardContent, Paper, Stack, Typography } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import './DissertationCard.css'

export default function DissertationCard(props) {
    const { title, tags, author, mentor, date } = props.CardData
    return (
        // <Card sx={{margin: 2}} elevation={5}>
        //     <CardContent>
                <div className="dissertation-card-container">
                    <Paper variant='outlined'>
                        <div className='disseration-image' src='https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg' />
                    </Paper>    
                    <Paper variant='outlined'>
                        <div className='dissertation-card'>
                            <Typography variant='h5' textAlign={'left'}>{title}</Typography>
                            <BookmarkIcon/>
                            
                            <div className="tag-container">
                                {
                                    tags.map(tag =>
                                        <div className="topic-tag">
                                            <Typography>{tag}</Typography>
                                        </div>)
                                }
                            </div>
                            {/* <Typography textAlign={'left'}>{tags.map(tag => '#' + tag).join(' ')}</Typography> */}
                            <Typography >Author: {author}</Typography>
                            <Typography marginLeft={2}>Mentor: {mentor}</Typography>
                            <Typography marginLeft={2}>{date}</Typography>
                            <Button>View</Button>
                        </div>
                    </Paper>
                </div>
        //     </CardContent>
        // </Card>
    )
}
