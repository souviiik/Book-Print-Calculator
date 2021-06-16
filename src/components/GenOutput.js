import React from "react";
import PrintInstruction from "./PrintInstruction";

export default function GenOutput({ start, end, pageCount }) {
  console.log(`pageCount`, pageCount);
  const output = [];
  const populateList = () => {
    for (start; start <= end; start += pageCount) {
      var printTill =
        start + (pageCount - 1) > end ? end : start + (pageCount - 1);

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
