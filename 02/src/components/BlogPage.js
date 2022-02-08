import axios from 'axios';
import './BlogPage.css';
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import BlogList from './BlogList';

function BlogPage() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => setPosts(response.data.slice(0, 10)));
	}, []);
	return (
		<>
			<h1 style={{ textAlign: 'center' }}>This is my blog page</h1>
			<div className="blog-section">
				<BlogList posts={posts} />
				<Outlet />
			</div>
		</>
	);
}

export default BlogPage;
