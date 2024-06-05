import Box from '@mui/material/Box';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CancelIcon from '@mui/icons-material/Cancel'
import EditIcon from '@mui/icons-material/Edit'


export default function CardComponent() {
    let date = new Date().toJSON()//.substring(0, 10)
    date = date.substring(0, 10)

    return (
        <Box
            width={600}
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{border: '1px solid grey'}}
        >
            <Card sx={{minWidth: 275}}>
                <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        {date}
                    </Typography>
                    <Typography variant="h5" component="div">
                        Card content
                    </Typography>
                </CardContent>
                <CardActions sx={{border : '1px solid black', alignItems: 'end'}} disableSpacing>
                    <IconButton aria-label="edit card">
                        <EditIcon/>
                    </IconButton>
                    <IconButton aria-label="delete card">
                        <CancelIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    );
}
