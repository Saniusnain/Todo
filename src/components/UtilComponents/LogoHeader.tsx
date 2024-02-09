import { TiWavesOutline } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

const LogoHeader = () => {
    const navigate = useNavigate();
	return (
		<h1 onClick={() => navigate('/login')} className='flex items-center justify-center font-bold text-center text-white cursor-pointer max-sm:mb-5 sm:mb-10 max-sm:flex-col sm:flex-row max-sm:text-3xl sm:text-5xl'>
			Task Flow{' '}
			<span className='text-6xl max-sm:text-5xl sm:ml-4'>
				<TiWavesOutline />
			</span>
		</h1>
	);
};

export default LogoHeader;
