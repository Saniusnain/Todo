import { useState, ChangeEvent } from 'react';
import { TiWavesOutline } from 'react-icons/ti';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className='flex flex-col items-center justify-center h-screen font-mono '>
			<h1 className='flex items-center justify-center mb-10 font-bold text-center text-white max-sm:flex-col sm:flex-row max-sm:text-3xl sm:text-5xl'>
				Task Flow{' '}
				<span className='ml-4 text-6xl'>
					<TiWavesOutline />
				</span>
			</h1>

			<div className='flex flex-col items-center justify-center py-10 space-y-3 bg-white rounded shadow-2xl max-sm:w-72 sm:w-2/4 sm:h-2/4 ring-2 ring-offset-4'>
				<input
					type='email'
					placeholder='email'
					value={email}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setEmail(e.target.value)
					}
					className='w-2/4 px-2 py-3 bg-transparent rounded outline-none ring-2 ring-blue-800'
					required
				/>
				<input
					type='text'
					placeholder='name'
					value={name}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setName(e.target.value)
					}
					className='w-2/4 px-2 py-3 bg-transparent rounded outline-none ring-2 ring-blue-800'
					required
				/>
				<input
					type='password'
					placeholder='password'
					value={password}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setPassword(e.target.value)
					}
					className='w-2/4 px-2 py-3 bg-transparent rounded outline-none ring-2 ring-blue-800'
					required
				/>
				<button className='px-4 py-2 my-4 text-xl font-semibold text-white transition bg-pink-300 rounded hover:translate-x-1 hover:translate-y-1 hover:bg-pink-400'>
					Register
				</button>
			</div>
		</div>
	);
};

export default Signup;
