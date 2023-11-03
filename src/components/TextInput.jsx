/* eslint-disable react/prop-types */
import React from "react";
import { Box, FormHelperText, InputBase, styled } from "@mui/material";


const CustomInputMUI = styled(InputBase)(({ theme, error, size }) => ({
 
  "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: "#fff",
      border:  `1px solid ${error ? "red" : "#ced4da"}`,
      fontSize: 16,
      padding: size === "small" ? "5px 6px" : "10px 12px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      "&:focus": {
        boxShadow: error ? "red": "#ced4da",
        borderColor: error ? "red": "#ced4da",
      },
    },
  }));

  const Label = styled("label")(() => ({
    display: "block",
    color: "#6b7280",
    fontWeight: 600,
  }));

  export default function TextInput(props) {
    const {
      label,
      error,
      helperText,
      required,
      additionalText,
      ...inputProps
    } = props;
  
    const idStr = React.useMemo(() => {
      const random = Math.random().toString(36).substring(7);
      return `${props.type}-${random}`;
    }, [props.type]);
  
    return (
      <Box sx={{ my: 1, width: "100%" }}>
        <Label htmlFor={idStr}>
          {label} {required ? <span style={{color:"red"}} >*</span> : null}
        </Label>
        <CustomInputMUI
          {...inputProps}
          id={idStr}
          size="small"
          fullWidth
          error={error}
        />
        <FormHelperText error={error}>
          {helperText ? helperText : additionalText || ""}
        </FormHelperText>
      </Box>
    );
  }

  export {Label}