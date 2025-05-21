import { useRef, useImperativeHandle, forwardRef } from 'react';
const Form = forwardRef(({ ...props }, ref) => {
	const formRef = useRef();

	useImperativeHandle(
		ref,
		() => {
			return {
				clear() {
					const inputs = formRef.current.querySelectorAll('input');
					inputs.forEach((input) => (input.value = ''));
				},
			};
		},
		[]
	);
	return (
		<form
			{...props}
			ref={formRef}
		>
			<p>
				<label>Name</label>
				<input type='text' />
			</p>

			<p>
				<label>Email</label>
				<input type='email' />
			</p>
			<p id='actions'>
				<button>Save</button>
			</p>
		</form>
	);
});

export default Form;
