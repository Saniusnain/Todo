import { Link } from "react-router-dom";
import Loader from "./Loader";

interface ButtonProps {
    loading:boolean,
    text:string,
    links:[{link:string, text:string},{link:string, text:string}]
}
const Button = ({loading, text, links}:ButtonProps) => {
	return (
		<>
			<button
				className='max-sm:w-4/5 sm:w-2/4 max-sm:px-2 max-sm:py-1 max-sm:text-md sm:px-4 sm:py-2 sm:text-xl font-semibold text-white transition rounded  hover:translate-y-0.5 bg-pink-500 hover:bg-pink-500/95'
				type='submit'
			>
				{loading ? <Loader /> : text}
			</button>
			<div className='flex justify-between mt-2 text-sm border-white max-sm:w-4/5 sm:w-2/4'>
				<p className='text-black underline cursor-pointer hover:no-underline decoration-black'>
					<Link to={links[0].link}>{links[0].text}</Link>
				</p>
				<p className='text-black underline cursor-pointer hover:no-underline decoration-black'>
                <Link to={links[1].link}>{links[1].text}</Link>
				</p>
			</div>
		</>
	);
};

export default Button;
