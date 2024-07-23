import Box from '@mui/material/Box';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import {useDispatch} from "react-redux";
import {Container, Fab} from "@mui/material";


export default function CardComponent(card) {
    const dispatch = useDispatch()

    function removeCard() {
        dispatch({type: 'REMOVE_ITEM', payload: card.card.id})
    }

    function editCard() {
        dispatch({type: 'EDIT_ITEM', payload: card.card})
    }

    return (
        <Container maxWidth="sm">
            <Card sx={{minWidth: 500}}>
                <CardContent>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        {card.card.date}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {card.card.input}
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    alignSelf: "stretch",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                }}>
                    <Fab color="info" aria-label="edit" size='small' onClick={() => editCard()}>
                        <EditIcon/>
                    </Fab>
                    <Fab color="error" aria-label="remove" size='small' onClick={() => removeCard()}>
                        <DeleteIcon/>
                    </Fab>
                </CardActions>
            </Card>
        </Container>
    );
}
