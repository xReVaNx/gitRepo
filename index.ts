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
}

export default func;