import Input from './Input';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation';
import { useInput } from '../hooks/useInput';

console.clear();

export default function StateLogin() {
	const {
		value: emailValue,
		handleInputChange: handleEmailChange,
		handleInputBlur: handleEmailBlur,
		hasError: emailHasError,
	} = useInput('', (value) => isEmail(value) && isNotEmpty(value));

	const {
		value: passwordValue,
		handleInputChange: handlePasswordChange,
		handleInputBlur: handlePasswordBlur,
		hasError: passwordHasError,
	} = useInput('', (value) => hasMinLength(value, 6));

	// const [enteredEmail, setEnteredEmail] = useState('');
	// const [enteredPwd, setEnteredPwd] = useState('');

	// const [enteredValues, setEnteredValues] = useState({
	// 	email: '',
	// 	password: '',
	// });

	// const [didEdit, setDidEdit] = useState({
	// 	email: false,
	// 	password: false,
	// });

	// const emailIsInvalid =
	// 	didEdit.email &&
	// 	!isEmail(enteredValues.email) &&
	// 	!isNotEmpty(enteredValues.email);
	// const passwordIsInvalid =
	// 	didEdit.password && !hasMinLength(enteredValues.password, 6);

	function handleSubmit(event) {
		event.preventDefault();
		// console.log('Submitted!');
		// console.log(`User email: ${enteredEmail}`);
		//console.log(enteredValues);

		// setEnteredValues({
		// 	email: '',
		// 	password: '',
		// });

		if (emailHasError || passwordHasError) {
			return;
		}

		console.log(emailValue, passwordValue);
	}

	// function handleEmailChange(event) {
	// 	setEnteredEmail(event.target.value);
	// }

	// function handlePwdChange(event) {
	// 	setEnteredPwd(event.target.value);
	// }

	// function handleInputChange(identifier, value) {
	// 	setEnteredValues((prevValues) => ({
	// 		...prevValues,
	// 		[identifier]: value,
	// 	}));

	// 	//while typing inside the input
	// 	setDidEdit((prevEdit) => ({
	// 		...prevEdit,
	// 		[identifier]: false,
	// 	}));
	// }

	// //validation on input blur
	// function handleInputBlur(identifier) {
	// 	setDidEdit((prevEdit) => ({
	// 		...prevEdit,
	// 		[identifier]: true,
	// 	}));
	// }

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className='control-row'>
				<Input
					label='Email'
					id='email'
					type='email'
					name='email'
					onChange={handleEmailChange}
					onBlur={handleEmailBlur}
					value={emailValue}
					error={emailHasError && 'Please enter a valid email!'}
				/>

				<Input
					label='Password'
					id='password'
					type='password'
					name='password'
					onChange={handlePasswordChange}
					onBlur={handlePasswordBlur}
					value={passwordValue}
					error={passwordHasError && 'Please enter a valid password!'}
				/>
			</div>

			<p className='form-actions'>
				<button className='button button-flat'>Reset</button>
				<button className='button'>Login</button>
			</p>
		</form>
	);
}
