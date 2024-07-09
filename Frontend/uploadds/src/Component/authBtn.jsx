import React from "react";
import Button from "@mui/material/Button";


export function AuthBtn({ text, width, height}) {
    return <Button
    type="submit"
    sx={{
      background: 'black',
      fontFamily: 'Playwrite IT Moderna',
      fontWeight: '600',
      color: 'white',
      width: width,
      height: height,
      fontSize: '0.7rem',
      borderRadius: '2rem',
      '&:hover': {
        border: '2px solid gray',
        background: 'gray',
        color: 'white',
      }
    }}
  >
    {text}
  </Button>
}