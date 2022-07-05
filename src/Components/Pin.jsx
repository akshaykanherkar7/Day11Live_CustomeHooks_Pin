import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useRef } from "react";
import PinItem from "./PinItem";

const Pin = ({ length, setPinInput }) => {
  const inputRef = useRef([]);
  const [inputBoxLen] = useState(new Array(length).fill(1));
  const [inputBoxValue, setInputBoxValue] = useState(
    new Array(length).fill("")
  );

  const handleChange = (e, index) => {
    inputBoxValue[index] = e.target.value;
    setInputBoxValue(inputBoxValue);
    console.log("inputBoxValue:", inputBoxValue);
    if (e.target.value.length > 0 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    setPinInput(inputBoxValue.join(""));
  };

  const handleBackSpace = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    inputBoxValue[index] = e.target.value;
    setInputBoxValue(inputBoxValue);
    setPinInput(inputBoxValue.join(""));
  };

  const handlePaste = (e) => {
    e.preventDefault();
    // console.log(e.clipboardData.getData("text"));
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((item, index) => index < length);
    data.forEach((value, index) => {
      inputBoxValue[index] = value;
      inputRef.current[index].value = value;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    });
  };

  return (
    <div onPaste={handlePaste}>
      {inputBoxLen.map((_, index) => {
        return (
          <PinItem
            key={index}
            ref={(element) => {
              inputRef.current[index] = element;
            }}
            changeHandler={(e) => handleChange(e, index)}
            onBackSpacedHandler={(e) => handleBackSpace(e, index)}
          ></PinItem>
        );
      })}
    </div>
  );
};

Pin.propTypes = {
  length: PropTypes.number,
  onChange: PropTypes.func,
};

export default Pin;
