import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './global/components/Navigation/Navigation';
import Chat from './global/components/Chat/Chat';
import About from './pages/About/About';
import Add from './pages/Add/Add';
import Blog from './pages/Blog/Blog';
import Discover from './pages/Discover/Discover';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ResetPassword from './pages/Login/components/ResetPassword';
import SignUp from './pages/SignUp/SignUp';
import PageNotFound from './global/components/PageNotFound/PageNotFound';
import Profile from './pages/Profile/Profile';
import MyProfile from './pages/Profile/MyProfile';
import Post from './pages/Post/Post';
import Test from './pages/Test/Test';

function App() {
	return (
		<>
			<BrowserRouter>
				<div className='gradient-background'></div>
				<div className='white-overlay'></div>
				<header>
					<Navigation />
				</header>

				<Chat />

				<Routes>
					<Route path='PetPals/' element={<Home />} />
					<Route path='PetPals/users/:uid' element={<Profile />} />
					<Route path='PetPals/users/me' element={<MyProfile />} />
					<Route path='PetPals/posts/:postId' element={<Post />} />
					<Route path='PetPals/about' element={<About />} />
					<Route path='PetPals/add' element={<Add />} />
					<Route path='PetPals/blog' element={<Blog />} />
					<Route path='PetPals/discover' element={<Discover />} />
					<Route path='PetPals/login' element={<Login />} />
					<Route path='PetPals/forgot-password' element={<ResetPassword />} />
					<Route path='PetPals/signup' element={<SignUp />} />
					<Route path='PetPals/PetPals' element={<Test />} />
					<Route path='PetPals/*' element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
