import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UtilComponents/Button';
import LogoHeader from '../UtilComponents/LogoHeader';
import axios, { AxiosResponse } from 'axios';
import {
	maxLength,
	setUserGender,
	setUserId,
	getUserId,
} from '../../utils/utilFunctions';
import { EMAIL_ERROR } from '../../utils/ErrorMessages';

const Login = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const userId = getUserId();
		if (userId) {
			navigate('/');
		}
	}, [navigate]);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const resetStates = () => {
		setEmail('');

		setPassword('');
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
			password: password,
		};

		try {
			setLoading(true);
			const result: AxiosResponse = await axios.post(
				'http://localhost:5000/user/login',
				body
			);
			if (result && result.status === 200) {
				setLoading(false);
				setUserId(result.data.data.user._id);
				setUserGender(result.data.data.user.gender);
				resetStates();
				navigate('/');
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

					<input
						type={showPassword ? 'text' : 'password'}
						placeholder='Password'
						value={password}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setPassword(maxLength(e.target.value))
						}
						className='px-2 py-3 mb-3 bg-transparent rounded outline-none max-sm:w-4/5 sm:w-2/4 ring-2 ring-blue-800 focus:outline-4 focus:outline-blue-300'
						required
					/>
					<div className='flex items-center w-2/4 mb-3 max-sm:w-4/5'>
						<input
							id='default-checkbox'
							type='checkbox'
							value=''
							className='text-blue-600 bg-gray-100 border-gray-300 rounded '
							onChange={() => setShowPassword(!showPassword)}
						/>
						<label
							htmlFor='default-checkbox'
							className='text-sm font-medium text-black ms-2 '
						>
							Show Password
						</label>
					</div>

					<Button
						loading={loading}
						text='Login'
						links={[
							{ link: '/signup', text: 'SignUp' },
							{ link: '/reset-password', text: 'Reset Password' },
						]}
					/>
					{errorMessage && (
						<h1 className='mt-3 font-semibold text-center text-red-500 max-sm:px-3 sm:w-2/4 sm:text-sm'>
							{errorMessage}
						</h1>
					)}
				</form>
			</div>
		</div>
	);
};

export default Login;
