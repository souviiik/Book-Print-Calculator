import React from "react";
import PrintInstruction from "./PrintInstruction";

export default function GenOutput({ start, end }) {
  const output = [];
  const populateList = () => {
    for (start; start <= end; start += 16) {
      var printTill = start + 15 > end ? end : start + 15;

      output.push({
        task: { start, printTill },
        isDone: false,
      });
    }
  };

  populateList();

  // const handleClick = () => {
  //   console.log('clicked');
  // }

  return (
    <ol className="px-5">
      {output.map((o) => {
        return <PrintInstruction o={o} key={o.task.start} />;
      })}
    </ol>
  );
}
