import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({ input }) {
	//console.log(input);
	const resultsData = calculateInvestmentResults(input);
	const initialInvestMent =
		resultsData[0].valueEndOfYear -
		resultsData[0].interest -
		resultsData[0].annualInvestment;
	console.log(resultsData);
	return (
		<table id='result'>
			<thead>
				<tr>
					<th>Year</th>
					<th>Invested Capital</th>
					<th>Interest(Year)</th>
					<th>Total Interest</th>
					<th>Investment Value</th>
				</tr>
			</thead>
			<tbody>
				{resultsData.map((yearData) => {
					const totalInterest =
						yearData.valueEndOfYear -
						yearData.annualInvestment * yearData.year -
						initialInvestMent;

					const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
					return (
						<tr key={yearData.year}>
							<td>{yearData.year}</td>
							<td>{formatter.format(totalAmountInvested)}</td>
							<td>{formatter.format(yearData.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(yearData.valueEndOfYear)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
