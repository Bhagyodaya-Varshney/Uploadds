import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import ClearIcon from "@mui/icons-material/Clear";

export function Input({ id, label, variant, width, type, value, set }) {
  const handleClear = () => set("");

  return (
    <TextField
      required
      id={"outlined-basic" + "-" + id}
      autoComplete="off"
      label={label}
      variant={variant}
      fullWidth
      type={type}
      value={value}
      onChange={(e) => set(e.target.value)}
      InputProps={{
        endAdornment: value && (
          <InputAdornment position="end">
            <IconButton onClick={handleClear}>
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        width: width,
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "black",
            borderWidth: "2px",
            borderRadius: "0.9rem",
            height: "3rem",
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
          fontSize: "0.8rem",
        },
        "& .MuiInputLabel-outlined": {
          color: "gray",
          fontSize: "0.8rem",
          fontWeight: "500",
          fontFamily: "Playwrite IT Moderna",
        },
      }}
    />
  );
}
