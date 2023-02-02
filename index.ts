<<<<<<< HEAD
import React from 'react';
import { useState } from 'react';

const func = (): ReactComponent => {
const [state, setState] = useState(true);
	const text = "Hello World";
	return(
	<div>
	<h1>{text}</h1>
	</div>
	)
=======
const func = (): boolean => {
	console.log("Hello World");
	return true;
>>>>>>> parent of c5fbdf6 (Second changes)
}

func();