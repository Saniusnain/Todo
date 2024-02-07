import { useState, ChangeEvent, FormEvent } from 'react';
import { TiWavesOutline } from 'react-icons/ti';
import Loader from '../UtilComponents/Loader';
import axios from 'axios';
import { maxLength } from '../../utils/utilFunctions';
import {
	PASSWORD_ERROR,
	NAME_ERROR,
	EMAIL_ERROR,
	GENDER_ERROR,
} from '../../utils/ErrorMessages';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [gender, setGender] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [loading, setLoading] = useState(false);

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

		console.log(body);
		try {
			setLoading(true);
			const result = await axios.post(
				'http://localhost:5000/user/register',
				body
			);
			if (result && result.status === 201) {
				setLoading(false);
			}
			console.log(result);
		} catch (error: any) {
			setLoading(false);
			console.log(error.response.data.error);
			setErrorMessage(error.response.data.error);
		}
	};

	return (
		<div className='flex flex-col items-center justify-center h-screen font-space'>
			<h1 className='flex items-center justify-center font-bold text-center text-white max-sm:mb-5 sm:mb-10 max-sm:flex-col sm:flex-row max-sm:text-3xl sm:text-5xl'>
				Task Flow{' '}
				<span className='ml-4 text-6xl'>
					<TiWavesOutline />
				</span>
			</h1>

			<div
				id='toast-success'
				className='flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow animate-pulse'
				role='alert'
			>
				<div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg animate-pulse '>
					<svg
						className='w-5 h-5'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 20 20'
					>
						<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
					</svg>
					<span className='sr-only'>Check icon</span>
				</div>
				<div className='text-sm font-semibold ms-3'>Registered successfully.</div>
				<button
					type='button'
					className='ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8'
					data-dismiss-target='#toast-success'
					aria-label='Close'
				>
					<span className='sr-only'>Close</span>
					<svg
						className='w-3 h-3'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 14 14'
					>
						<path
							stroke='currentColor'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
						/>
					</svg>
				</button>
			</div>

			<div>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col items-center justify-center max-sm:py-8 sm:pt-12 sm:pb-10 space-y-3 bg-white rounded shadow-2xl max-sm:w-72 sm:w-[36em] ring-2 ring-offset-4'
				>
					<input
						type='email'
						placeholder='Email'
						value={email}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setEmail(maxLength(e.target.value))
						}
						className='px-2 py-3 bg-transparent rounded outline-none max-sm:w-4/5 sm:w-2/4 ring-2 ring-blue-800 focus:outline-4 focus:outline-blue-300'
						required
					/>
					<input
						type='text'
						placeholder='Name'
						value={name}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setName(maxLength(e.target.value))
						}
						className='px-2 py-3 bg-transparent rounded outline-none max-sm:w-4/5 sm:w-2/4 ring-2 ring-blue-800 focus:outline-4 focus:outline-blue-300'
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
						className={`w-1/2 px-2 py-3 ${
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
						className='px-2 py-3 bg-transparent rounded outline-none max-sm:w-4/5 sm:w-2/4 ring-2 ring-blue-800 focus:outline-4 focus:outline-blue-300'
						required
					/>
					<div className='flex items-center w-2/4 max-sm:w-4/5'>
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

					<div className=' max-sm:px-3 sm:w-2/4'>
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

					<button
						className='max-sm:px-2 max-sm:py-1 max-sm:text-md sm:px-4 sm:py-2 my-4 sm:text-xl font-semibold text-white transition bg-pink-300 rounded  hover:translate-y-0.5 hover:bg-pink-400'
						type='submit'
					>
						{loading ? <Loader /> : 'Register'}
					</button>
					{errorMessage && (
						<h1 className='font-semibold text-center text-red-500 max-sm:px-3 sm:w-2/4 sm:text-sm'>
							{errorMessage}
						</h1>
					)}
				</form>
			</div>
		</div>
	);
};

export default Signup;
