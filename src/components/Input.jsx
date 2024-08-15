import React, { forwardRef } from "react";
import { makeStyles } from "@mui/styles";
import { Input as MuiInput } from "@mui/material";

const useInputStyles = makeStyles((theme) => ({
  input: {
    "&::placeholder": {
      color: "#CED0D3",
      fontFamily: "Euclid Circular A !important"
    },
    height: "48px",
    padding: "0rem 1.5rem !important",
    border: "1px solid #EDEDED",
    borderRadius: "8px",
    "&:hover": {
      border: "1px solid #777",
    },
    "&.MuiInputBase-root::before, .MuiInputBase-root:hover::before": {
      border: "none !important",
    },
    "&.MuiInputBase-root::after": {
      border: "none !important",
      transform: "scaleX(0) !important",
    },
  },
}));

export const Input = ({errormessage, ...props }) => {
  const classes = useInputStyles();

  return (
    <div>
      {props?.label && (
        <label className="block text-base leading-[20.29px] text-gray-400 mb-[5px]">
          {props.label}
        </label>
      )}
      <MuiInput className={classes.input} {...props} />
      {errormessage && <p className="error__msg mt-[1px]">{errormessage}</p>}
    </div>
  );
};

export const OtpInput = forwardRef(function OtpRefInput(props, ref) {
  return (
    <div>
      {props?.label && (
        <label className="block text-base leading-[20.29px] text-gray-400 mb-[5px]">
          {props.label}
        </label>
      )}
      <input
        ref={ref}
        type="text"
        maxLength={1}
        className="w-full h-12 border border-[#EDEDED] rounded-lg px-4"
        {...props}
      />
    </div>
  )});
