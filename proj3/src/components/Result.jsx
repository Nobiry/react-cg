import { calculateInvestmentResults, formatter } from "../util/investment";

function Result({ inputValues }) {
  let calcValues = calculateInvestmentResults(inputValues);

  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Totoal Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {calcValues.map((row, index) => (
          <tr>
            <td>{row.year}</td>
            <td>{formatter.format(row.valueEndOfYear)}</td>
            <td>{formatter.format(row.interest)}</td>
            <td>{formatter.format(row.valueEndOfYear - (inputValues.initialInvestment + row.annualInvestment * (index+1)))}</td>
            <td>{formatter.format(inputValues.initialInvestment + row.annualInvestment * (index+1))}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Result;
