export default function UserInput({ onChange, userInput }) {
	return (
		<section id='user-input'>
			<div className='input-group'>
				<p>
					<label>Initial investment</label>
					<input
						type='number'
						value={userInput.initialInvestment}
						required
						onChange={(e) => onChange('initialInvestment', e.target.value)}
					/>
				</p>
				<p>
					<label>Annual Investment</label>
					<input
						type='number'
						value={userInput.annualInvestment}
						required
						onChange={(e) => onChange('annualInvestment', e.target.value)}
					/>
				</p>
			</div>
			<div className='input-group'>
				<p>
					<label>Expected Return</label>
					<input
						type='number'
						value={userInput.expectedreturn}
						required
						onChange={(e) => onChange('expectedReturn', e.target.value)}
					/>
				</p>
				<p>
					<label>Duration</label>
					<input
						type='number'
						value={userInput.duration}
						required
						onChange={(e) => onChange('duration', e.target.value)}
					/>
				</p>
			</div>
		</section>
	);
}
