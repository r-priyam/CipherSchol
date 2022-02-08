// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import BlogPage from './components/BlogPage';
import Header from './components/Header';
import Home from './components/Home';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blogs" element={<BlogPage />}>
					<Route path=':blogid' element={<Blog />}/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
