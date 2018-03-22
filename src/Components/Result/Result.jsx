import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Result extends Component {
	render() {
	return (
		<Jumbotron>
		<h3>Your result:</h3>
		<p>
			55
		</p>
		<p>
			<Button bsStyle="primary">Try again ?</Button>
		</p>
		</Jumbotron>
	);
	}
}

export default Result;
