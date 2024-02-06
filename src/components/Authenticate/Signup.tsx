import { useState, ChangeEvent, FormEvent } from 'react';
import { TiWavesOutline } from 'react-icons/ti';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const [gender, setGender] = useState('');
	const PASSWORD_ERROR =
		'Password should be 6-40 characters long and contain at least one uppercase letter, one lowercase letter, and one digit';

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (name.length < 3) {
			setErrorMessage('Name must be at least 3 characters');
			return;
		}

		const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if (!email.match(emailRegex)) {
			setErrorMessage('Invalid Email format');
			return false;
		}

		if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,40}$/.test(password)) {
			setErrorMessage(PASSWORD_ERROR);
			return;
		}
	};

	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<h1 className='flex items-center justify-center mb-10 font-bold text-center text-white max-sm:flex-col sm:flex-row max-sm:text-3xl sm:text-5xl'>
				Task Flow{' '}
				<span className='ml-4 text-6xl'>
					<TiWavesOutline />
				</span>
			</h1>

			<div>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col items-center justify-center pt-12 pb-10 space-y-5 bg-white rounded shadow-2xl max-sm:w-72 sm:w-[36em] ring-2 ring-offset-4'
				>
					<input
						type='email'
						placeholder='email'
						value={email}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setEmail(e.target.value)
						}
						className='px-2 py-3 bg-transparent rounded outline-none sm:w-2/4 ring-2 ring-blue-800 focus:outline-4 focus:outline-blue-300'
						required
					/>
					<input
						type='text'
						placeholder='name'
						value={name}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setName(e.target.value)
						}
						className='px-2 py-3 bg-transparent rounded outline-none sm:w-2/4 ring-2 ring-blue-800 focus:outline-4 focus:outline-blue-300'
						required
					/>
					<input
						type='password'
						placeholder='password'
						value={password}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							setPassword(e.target.value)
						}
						className='px-2 py-3 bg-transparent rounded outline-none sm:w-2/4 ring-2 ring-blue-800 focus:outline-4 focus:outline-blue-300'
						required
					/>
					<button
						className='max-sm:px-2 max-sm:py-1 max-sm:text-lg sm:px-4 sm:py-2 my-4 sm:text-xl font-semibold text-white transition bg-pink-300 rounded  hover:translate-y-0.5 hover:bg-pink-400'
						type='submit'
					>
						Register
					</button>
					{errorMessage && (
						<h1 className='font-semibold text-red-500 sm:text-xl'>
							{errorMessage}
						</h1>
					)}
				</form>
			</div>
		</div>
	);
};

export default Signup;
