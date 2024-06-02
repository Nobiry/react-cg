import Input from "./Input";

function UserInput({ inputValues, setVal }) {
  function deriveVals(val, key) {
    setVal((prevCalcVals) => {
      return {
        ...prevCalcVals,
        [key]: val*1,
      };
    });
  }
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          id='initialInvestment'
          onChange={deriveVals}
          value={inputValues.initialInvestment}
          label="Initial investment"
          type="number"
        />
        <Input
          id='annualInvestment'
          onChange={deriveVals}
          value={inputValues.annualInvestment}
          label="Annual investment"
          type="number"
        />
      </div>
      <div className="input-group">
        <Input
          id='expectedReturn'
          onChange={deriveVals}
          value={inputValues.expectedReturn}
          label="Expected return"
          type="number"
        />
        <Input
          id='duration'
          onChange={deriveVals}
          value={inputValues.duration}
          label="Duration"
          type="number"
        />
      </div>
    </div>
  );
}

export default UserInput;
