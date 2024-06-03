import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function App() {
  return (
    <div className="App">
        <Box
            width={600}
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ border: '1px solid grey' }}
        >

        <TextField
            id="outlined-textarea"
            label="Good things that I have done"
            placeholder="Gratetude"
            multiline
            fullWidth
        />
            <Button>
                <SendIcon/>
            </Button>
        </Box>
    </div>
  );
}

export default App;
