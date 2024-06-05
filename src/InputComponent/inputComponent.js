import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {useState} from "react";


export default function InputComponent() {
    const [input, setInput] = useState('')

    function handleEmitInput() {
        console.log(input)
        setInput('')
        // send input
        // clear input field
    }

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

            <TextField
                id="gratitude-text"
                value={input}
                label="Good things that I have done"
                placeholder="Gratetude"
                multiline
                fullWidth
                onChange={(event)=> setInput(event.target.value)}
            />
            <Button onClick={() => handleEmitInput()}>
                <SendIcon/>
            </Button>
        </Box>
    )
}