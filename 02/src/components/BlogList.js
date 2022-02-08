import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogList.css';

function BlogList(props) {
	const navigate = useNavigate();
	const [activePost, setActivePost] = useState(null);

	return (
		<>
			<div className="blogList">
				{props.posts.map((post, key) => (
					<div className="listItem" key={key}>
						<h1 className="title">{post.title}</h1>
						<p className="blogBody">
							{post.body.substring(0, 40)} ...{' '}
							<button
								style={{ color: activePost === post.id ? 'red' : 'green' }}
								onClick={() => {
									navigate(`/blogs/${post.id}`, { state: post });
									setActivePost(post.id);
								}}
							>
								read more
							</button>
						</p>
					</div>
				))}
			</div>
		</>
	);
}

export default BlogList;
