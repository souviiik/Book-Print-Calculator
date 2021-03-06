import { useState } from "react";
import InputForm from "./components/InputForm";
import GenOutput from "./components/GenOutput";
import "./App.css";

function App() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [pageCount, setPageCount] = useState(16);

  const getFieldValues = (num1, num2, pageCount) => {
    setStart(num1);
    setEnd(num2);
    setPageCount(pageCount);
  };

  return (
    <div className="container">
      <h1 className="is-size-1">Book Print Calculator</h1>
      <hr />
      <InputForm handleFieldValues={getFieldValues} />
      <hr />
      {end > 0 && <GenOutput start={start} end={end} pageCount={pageCount} />}
    </div>
  );
}

export default App;
