import React from "react";
import TextField from "@mui/material/TextField";

export function Textfield({ id,label, variant, width, type, value, set }) {
  return (
    <TextField
    required
      id={"outlined-basic"+"-"+id}
      autoComplete="off"
      label={label}
      variant={variant}
      fullWidth
      type={type}
      value={value}
      onChange={(e) => set(e.target.value)}
      sx={{
        zIndex: "1",
        width: width,
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "black",
            borderWidth: "2px",
            borderRadius: "0.9rem",
            height: "4rem",
          },
          "&:hover fieldset": {
            borderColor: "gray",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#1565c0",
          },
        },
        "& .MuiOutlinedInput-input": {
          color: "gray",
          fontFamily: "Playwrite IT Moderna",
          fontWeight: "500",
        },
        "& .MuiInputLabel-outlined": {
          color: "gray",
          fontSize: "1rem",
          fontWeight: "500",
          fontFamily: "Playwrite IT Moderna",
        },
      }}
    />
  );
}