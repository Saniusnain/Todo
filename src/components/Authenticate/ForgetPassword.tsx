import { useState, ChangeEvent, FormEvent } from 'react';
import Button from '../UtilComponents/Button';
import LogoHeader from '../UtilComponents/LogoHeader';
import axios, { AxiosResponse } from 'axios';
import { maxLength } from '../../utils/utilFunctions';
import { EMAIL_ERROR } from '../../utils/ErrorMessages';
import { toast, ToastContainer } from 'react-toastify';

const ForgetPassword = () => {
	const [email, setEmail] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const resetStates = () => {
		setEmail('');
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		setErrorMessage('');
		e.preventDefault();

		const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if (!email.match(emailRegex)) {
			setErrorMessage(EMAIL_ERROR);
			return false;
		}

		const body = {
			email: email,
		};

		try {
			setLoading(true);
			const result: AxiosResponse = await axios.post(
				'http://localhost:5000/user/forget-password',
				body
			);
			if (result && result.status === 200) {
				setLoading(false);
				toast('📨 Check Email!', {
					position: 'top-right',
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					draggable: true,
					theme: 'light',
				});
				resetStates();
			}
		} catch (error) {
			setLoading(false);
			if (axios.isAxiosError(error)) {
				console.log('error message: ', error.message);
				setErrorMessage(error.response?.data.error);
			} else {
				console.log('unexpected error: ', error);
				setErrorMessage('An unexpected error occurred');
			}
		}
	};

	return (
		<div className='flex flex-col items-center justify-center h-screen font-space'>
			<LogoHeader />

			<div>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col items-center justify-center max-sm:py-8 sm:pt-12 sm:pb-10   bg-white rounded shadow-2xl max-sm:w-72 sm:w-[36em] ring-2 ring-offset-4'
				>
					<input
						type='email'
						placeholder='Email'
						value={email}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setEmail(maxLength(e.target.value))
						}
						className='px-2 py-3 mb-3 bg-transparent rounded outline-none max-sm:w-4/5 sm:w-2/4 ring-2 ring-blue-800 focus:outline-4 focus:outline-blue-300'
						required
					/>

					<Button
						loading={loading}
						text='Submit'
						links={[
							{ link: '/signup', text: 'SignUp' },
							{ link: '/login', text: 'Login' },
						]}
					/>
					{errorMessage && (
						<h1 className='mt-3 font-semibold text-center text-red-500 max-sm:px-3 sm:w-2/4 sm:text-sm'>
							{errorMessage}
						</h1>
					)}
				</form>
			</div>
			<ToastContainer />
		</div>
	);
};

export default ForgetPassword;
