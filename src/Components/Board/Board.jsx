import React, { Component } from 'react';
import { shuffle } from '../../Data/Helpers';
import { words } from '../../Data/words';
import { FormControl, FormGroup, Button } from 'react-bootstrap';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasGameStarted: false,
			userInput: null,
			answers: []
		};
	}

	startGame = () => {
		this.setState({hasGameStarted: true});
		
		setTimeout(() => {
			
			console.log(this.state.answers);
			console.log(words.map(answer => shuffle(answer)));
			console.log('ended');

		}, 1000 * 5)
	}

	setAnswer = (e) => {
		e.preventDefault();				
		this.setState({
            answers: [...this.state.answers, this.inputEl.value]
		});
		this.inputEl.value = "";
	}

	updateInput = (e) => {
        this.setState({
            userInput: e.target.value
        });
	}

	render() {
		return (
			<div className="roard">
				<form onSubmit={this.setAnswer}>
					<FormGroup bsSize="large">
						<FormControl type="text" inputRef={(e) => {this.inputEl = e;}} placeholder="Enter an answer" onChange={this.updateInput} />
						<Button bsStyle="primary" onClick={this.startGame}>Start game</Button>
					</FormGroup>
				</form>
			</div>
		);
	}
}

export default Board;
