import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
	return (
		<nav>
			<ul>
				<li>
					<NavLink
						to={'/'}
						style={({ isActive }) => {
							return { color: isActive ? 'red' : 'green' };
						}}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to={'/blogs'}
						style={({ isActive }) => {
							return { color: isActive ? 'red' : 'green' };
						}}
					>
						Blogs
					</NavLink>
				</li>
				<li>
					<NavLink
						to={'/contacts'}
						style={({ isActive }) => {
							return { color: isActive ? 'red' : 'green' };
						}}
					>
						Contacts
					</NavLink>
				</li>
				<li>
					<NavLink
						to={'/login'}
						style={({ isActive }) => {
							return { color: isActive ? 'red' : 'green' };
						}}
					>
						Login
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Header;
