import { useState, ChangeEvent } from 'react';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className='flex flex-col items-center justify-around h-screen font-mono '>
			<h1 className='text-5xl font-bold text-center'>Task Flow</h1>
			<div className='flex flex-col items-center justify-center w-2/4 py-10 space-y-3 bg-white rounded shadow-2xl ring-2 ring-offset-4 ring-amber-500'>
				<input
					type='email'
					placeholder='email'
					value={email}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setEmail(e.target.value)
					}
					className='px-2 py-3 bg-transparent rounded outline-none ring-2 ring-slate-700 focus:'
					required
				/>
				<input
					type='text'
					placeholder='name'
					value={name}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setName(e.target.value)
					}
					className='px-2 py-3 bg-transparent rounded outline-none ring-2 ring-slate-700 focus:'
					required
				/>
				<input
					type='password'
					placeholder='password'
					value={password}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setPassword(e.target.value)
					}
					className='px-2 py-3 bg-transparent rounded outline-none ring-2 ring-slate-700 focus:'
					required
				/>
				<button className='px-4 py-2 my-4 text-xl font-semibold text-white rounded bg-amber-500 hover:bg-amber-600'>
					Register
				</button>
			</div>
		</div>
	);
};

export default Signup;
