import React, { useState, useEffect } from 'react';
import {
    Button,
    Avatar,
    Card,
    CardContent,
    Typography,
    Container,
    Box,
    CardActions,
  } from "@mui/material";
  import useFetch from "../hooks/useFetch";
  interface Props {
    id: number;
  }
  /*interface Username {
    username:string
  }*/
export function PostHeader(props:Props) {
  const [imageSrc, setImageSrc] = useState('');
  const [username, setUsername] = useState('');
  const { data, error } = useFetch<string>(`${process.env.REACT_APP_API_KEY}/users/get-username/${props.id}`);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_KEY}/users/downloadk`)
      .then(response => response.blob())
      .then(blob => {
        const objectUrl = URL.createObjectURL(blob);
        setImageSrc(objectUrl);
      });
  }, []);

  console.log(data)
  return (
    <Box sx={{display:'flex',flexDirection:'row', justifyContent:'flex-start ',alignItems: 'center',gap:'20px'}}>
    <Avatar
      alt="Remy Sharp"
      src={imageSrc}
      sx={{ width: 56, height: 56 }}
    />
    <Typography sx={{ alignContent: 'center'}} color="textSecondary" gutterBottom>
      {data}
    </Typography>
    </Box>

  );
}
//    <img src={imageSrc} alt="Downloaded from backend" />