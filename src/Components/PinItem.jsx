import React from "react";
import { forwardRef } from "react";

const PinItem = forwardRef(({ changeHandler, onBackSpacedHandler }, ref) => {
  const handleKeyUp = (e) => {
    if (e.keyCode === 8) {
      onBackSpacedHandler(e);
    } else {
      changeHandler(e);
    }
  };
  return (
    <>
      <input ref={ref} maxLength={1} onKeyUp={handleKeyUp} />
    </>
  );
});

export default PinItem;
