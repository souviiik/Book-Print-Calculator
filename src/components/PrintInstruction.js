import React, { useState } from "react";
import "./PrintInstruction.css";

export default function PrintInstruction({ o }) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((prevState) => !prevState);
  };

  return (
    <li onClick={handleClick} className={click ? "cutthrough" : undefined}>
      Print from page {o.task.start} to {o.task.printTill} as booklet.
    </li>
  );
}
