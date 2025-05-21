import { forwardRef, useImperativeHandle, useRef } from 'react'; //for older react before v19

const ResultModal = forwardRef(function ResultModal(
	{ result, targetTime },
	ref
) {
	const dialog = useRef();

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			},
		};
	});

	return (
		<dialog
			ref={dialog}
			className='result-modal'
		>
			<h1>You {result}</h1>
			<p>
				The target time was <strong>{targetTime} seconds.</strong>
			</p>
			<p>
				Your stopped the time with <strong> seconds left</strong>
			</p>
			<form method='dialog'>
				<button>Close</button>
			</form>
		</dialog>
	);
});

export default ResultModal;
