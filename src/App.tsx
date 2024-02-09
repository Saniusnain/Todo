import TodoComponent from './components/Todo/TodoComponent';
import Login from './components/Authenticate/Login';
import Signup from './components/Authenticate/Signup';
import ForgotPassword from './components/Authenticate/ForgetPassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='bg-blue-800 '>
			<BrowserRouter>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/forgot-password' element={<ForgotPassword />} />
					<Route path='/'
						element={
							//   <RequireAuth>
							<TodoComponent />
							//   </RequireAuth>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

// import React from 'react';
// import { AuthProvider } from './AuthContext'; // Import your AuthContext

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route
//             path="/todos"
//             element={
//               <RequireAuth>
//                 <TodoComponent />
//               </RequireAuth>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

// export default App;

// // RequireAuth component (conditional rendering based on authentication)
// function RequireAuth({ children }) {
//   const { isLoggedIn } = React.useContext(AuthContext);

//   return isLoggedIn ? children : <Navigate to="/" replace />;
// }


// ---------------------------------------------------------------------------------------------------


// import React, { createContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// function AuthProvider({ children }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Replace with your actual authentication logic (e.g., fetch/store tokens)
//   useEffect(() => {
//     const storedToken = localStorage.getItem('authToken');
//     if (storedToken) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const login = () => {
//     setIsLoggedIn(true);
//     localStorage.setItem('authToken', 'some-token-value'); // Replace with real token
//   };

//   const logout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem('authToken');
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export { AuthContext, AuthProvider };

export default App;
