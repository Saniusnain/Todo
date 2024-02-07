import TodoComponent from './components/Todo/TodoComponent';
import Login from './components/Authenticate/Login';
import Signup from './components/Authenticate/Signup';


function App() {
	return (
		<div className='bg-blue-800 '>
			{/* <TodoComponent />
			<Login /> */}
			<Signup />
		</div>
	);
}

export default App;
