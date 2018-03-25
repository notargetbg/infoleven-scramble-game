import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Result extends Component {
	render() {
	return (
		<Jumbotron>
		<h3>Your result: <small>55</small></h3>
		<p>
			<Button bsStyle="default">Try again ?</Button>
		</p>
		</Jumbotron>
	);
	}
}

export default Result;
