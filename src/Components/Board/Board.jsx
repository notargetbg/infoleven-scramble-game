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
			answers: [],
			scrambledWords: [],
		};
	}

	startGame = () => {
		const firstScrambledWord = shuffle(words[0])
		
		this.setState({
			hasGameStarted: true,
			scrambledWords: [...this.state.scrambledWords, firstScrambledWord]
		});
		setTimeout(() => {

			console.log(this.state)
			console.log('ended');

		}, 1000 * 5)
	}

	giveAnswer = (e) => {
		e.preventDefault();				

		const newScrambledWord = shuffle(words[this.state.scrambledWords.length]);

		this.setState({
			answers: [...this.state.answers, this.inputEl.value],
			scrambledWords: [...this.state.scrambledWords, newScrambledWord]
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
			<div className="board">
				{this.state.scrambledWords && this.state.scrambledWords.length > 0 &&
					this.state.scrambledWords.map((word) => (
						<p>
							{word}
						</p>
					))}

				<form onSubmit={this.giveAnswer}>
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
