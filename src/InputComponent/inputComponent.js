import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";


export default function InputComponent() {
    const [input, setInput] = useState('')
    const isEditing = useSelector(state => state.input.isEditing)
    let itemToEdit = useSelector(state => state.input.itemEditing)
    const dispatch = useDispatch()

    useEffect(() => {
        if(itemToEdit){
            setInput(itemToEdit.input)
        } else {
            setInput('')
        }
    }, [itemToEdit])

    function handleSaveEditedItem() {
        let editItem = {...itemToEdit}
        editItem.input = input

        dispatch({type: 'SET_ITEM', payload: editItem})
        setInput('')
    }

    function handleEmitInput() {
        let date = new Date().toJSON()
        const id = date
        date = date.substring(0, 10)
        dispatch({
            type: 'ADD_ITEM', payload:
                {
                    input, date, id
                }
        })
        setInput('')
    }

    return (
        <Box
            width={700}
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
        >

            <TextField
                id="gratitude-text"
                value={input}
                label="Good things that I have done"
                placeholder="Gratetude"
                multiline
                fullWidth
                onChange={(event)=> setInput(event.target.value)}
            />
            <Button onClick={() => isEditing ? handleSaveEditedItem() : handleEmitInput()}>
                <SendIcon/>
            </Button>
        </Box>
    )
}