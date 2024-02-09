import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<div className='flex flex-col items-center justify-center w-screen h-screen bg-blue-800 '>
			<h1 className='font-mono font-bold text-white text-9xl'>404</h1>
			<p className='font-mono text-4xl font-medium text-white'>
				Page not found{' '}
			</p>
			<button
				onClick={() => navigate('/login')}
				className='flex items-center justify-center px-4 py-2 font-mono font-bold text-blue-800 bg-white rounded cursor-pointer animate-bounce w-44 mt-9'
			>
				<span>
					<BiArrowBack className='flex mr-3 text-blue-800 -4xl' />
				</span>
				Take me back
			</button>
		</div>
	);
};

export default NotFound;
