import { lazy, Suspense } from 'react';
const TodoComponent = lazy(() => import('./components/Todo/TodoComponent'));
const Login = lazy(() => import('./components/Authenticate/Login'));
const Signup = lazy(() => import('./components/Authenticate/Signup'));
const ResetPassword = lazy(
	() => import('./components/Authenticate/ResetPassword')
);
import LoadingScreen from './components/UtilComponents/LoadingScreen';
import { TodoProvider, TodoTypeProvider } from './context/todoContext';

import {
	BrowserRouter,
	Routes,
	Route,
	Outlet,
	Navigate,
} from 'react-router-dom';
import NotFound from './components/UtilComponents/NotFound';

const PrivateRoutes = () => {
	const auth = localStorage.getItem('userId');
	return auth ? <Outlet /> : <Navigate to='/login' />;
};

function App() {
	return (
		<TodoTypeProvider>
			<TodoProvider>
				<div className='bg-blue-800 selection:bg-pink-400 selection:text-white'>
					<BrowserRouter>
						<Suspense fallback={<LoadingScreen />}>
							<Routes>
								<Route path='/login' element={<Login />} />
								<Route path='/signup' element={<Signup />} />
								<Route path='/reset-password' element={<ResetPassword />} />
								<Route element={<PrivateRoutes />}>
									<Route path='/' element={<TodoComponent />} />
								</Route>
								<Route path='*' element={<NotFound />} />
							</Routes>
						</Suspense>
					</BrowserRouter>
				</div>
			</TodoProvider>
		</TodoTypeProvider>
	);
}

export default App;
