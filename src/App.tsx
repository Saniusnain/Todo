import TodoComponent from './components/Todo/TodoComponent';
import Login from './components/Authenticate/Login';
import Signup from './components/Authenticate/Signup';

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

function App() {
	return (
		<div className='bg-blue-800'>
			{/* <TodoComponent />
			<Login /> */}
			<Signup />
		</div>
	);
}

export default App;
