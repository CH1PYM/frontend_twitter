import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MessageIcon from '@mui/icons-material/Message';
import { Box, Button } from '@mui/material';

export const ButtonBar = () => {
  return (
    <Box sx={{/*display:"flexbox", flexDirection:"row",backgroundColor:"red"*/}}>
       <Stack direction="row" spacing={1}>
      <IconButton color="primary" aria-label="add to shopping cart">
        <MessageIcon />
      </IconButton>
      <Button sx={{marginLeft:"15px", fontSize:"15px"}} variant="outlined">Follow</Button>
    </Stack>
    </Box>
  );
};
