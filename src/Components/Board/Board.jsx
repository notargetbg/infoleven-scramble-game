import React, { Component } from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';

class Board extends Component {
	render() {
		return (
			<div className="roard">
				<form>
					<FormGroup bsSize="large">
						<FormControl type="text" placeholder="Enter an answer" />
					</FormGroup>
				</form>
			</div>
		);
	}
}

export default Board;
