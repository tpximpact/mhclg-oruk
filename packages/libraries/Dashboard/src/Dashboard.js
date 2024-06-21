import React,  { createContext, useContext } from 'react'

export const LevelContext = createContext(1);

export const Dashboard = () => {
	const level = useContext(LevelContext);
	
	return (
	<div>
		<h1>Dashboard tool</h1>
		<p>Hello world</p>
	</div>
)
}
