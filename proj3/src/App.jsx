import { useState } from "react";

import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  const [valToCalc, setValToCalc] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  return (
    <>
      <UserInput inputValues={valToCalc} setVal={setValToCalc} />
      <Result inputValues={valToCalc}/>
    </>
  );
}

export default App;
