import { useState, ChangeEvent, FormEvent } from 'react';
import Button from '../UtilComponents/Button';
import LogoHeader from '../UtilComponents/LogoHeader';
import axios, { AxiosResponse } from 'axios';
import { maxLength } from '../../utils/utilFunctions';
import {
	PASSWORD_ERROR,
	NAME_ERROR,
	EMAIL_ERROR,
	GENDER_ERROR,
} from '../../utils/ErrorMessages';
import { toast, ToastContainer } from 'react-toastify';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [gender, setGender] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const resetStates = () => {
		setEmail('');
		setName('');
		setPassword('');
		setGender('');
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		setErrorMessage('');
		e.preventDefault();
		if (name.length < 3) {
			setErrorMessage(NAME_ERROR);
			return;
		}

		const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if (!email.match(emailRegex)) {
			setErrorMessage(EMAIL_ERROR);
			return false;
		}

		if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,40}$/.test(password)) {
			setErrorMessage(PASSWORD_ERROR);
			return;
		}

		if (gender === '') {
			setErrorMessage(GENDER_ERROR);
			return;
		}

		const body = {
			email: email,
			name: name,
			password: password,
			gender: gender,
		};

		try {
			setLoading(true);
			const result: AxiosResponse = await axios.post(
				'http://localhost:5000/user/register',
				body
			);
			if (result && result.status === 201) {
				setLoading(false);
				toast('🦄 Registered Succesfully!', {
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
					<input
						type='text'
						placeholder='Name'
						value={name}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setName(maxLength(e.target.value))
						}
						className='px-2 py-3 mb-3 bg-transparent rounded outline-none max-sm:w-4/5 sm:w-2/4 ring-2 ring-blue-800 focus:outline-4 focus:outline-blue-300'
						required
					/>
					<select
						id='countries'
						onChange={(e: ChangeEvent<HTMLSelectElement>) =>
							setGender(
								e.target.value === 'Choose a gender' ? '' : e.target.value
							)
						}
						defaultValue={gender}
						className={` mb-3 w-1/2 px-2 py-3 ${
							gender === 'male' || gender === 'female'
								? 'text-gray-900'
								: 'text-gray-400'
						} bg-transparent rounded font-normal outline-none max-sm:text-sm max-sm:w-4/5 ring-2 ring-blue-800 focus:outline-4 focus:outline-blue-300`}
					>
						<option className='max-sm:text-sm'>Choose a gender</option>
						<option value='male' className='max-sm:text-sm '>
							Male
						</option>
						<option value='female' className='max-sm:text-sm '>
							Female
						</option>
					</select>
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

					<div className='mb-3 max-sm:px-3 sm:w-2/4'>
						<ul className='list-disc list-inside '>
							{[
								'At least 6 characters',
								'1 uppercase and 1 lowercase letter',
								'1 digit',
							].map((rule) => {
								return (
									<li key={rule} className='text-sm'>
										{rule}
									</li>
								);
							})}
						</ul>
					</div>

					<Button
						loading={loading}
						text='SignUp'
						links={[
							{ link: '/login', text: 'Login' },
							{ link: '/reset-password', text: 'Reset Password' },
						]}
					/>

					{errorMessage && (
						<h1 className='font-semibold text-center text-red-500 max-sm:px-3 sm:w-2/4 sm:text-sm'>
							{errorMessage}
						</h1>
					)}
				</form>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Signup;
