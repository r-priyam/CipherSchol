import React from 'react';
import './Blog.css';
import { useLocation } from 'react-router-dom';

function Blog() {
	const location = useLocation();
	const post = location.state;

	return (
		<div className='blog'>
			<h1 className='post-title'>{post.title}</h1>
			<p className='post-body'>{post.body}</p>
		</div>
	);
}

export default Blog;
