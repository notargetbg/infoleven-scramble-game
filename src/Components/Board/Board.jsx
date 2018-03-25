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
			wordsData: words,
			correctAnswers: []
		};
	}

	startGame = () => {
		const firstScrambledWord = shuffle(words[0]);
		
		this.setState({
			hasGameStarted: true,
			scrambledWords: [firstScrambledWord],
			correctAnswers: [],
			answers: []
		});
		setTimeout(() => {
			const correctAnswers = this.calculateScore();
			this.setState({
				correctAnswers
			});

		}, 1000 * 10);
	}

	saveAnswer = (e) => {
		e.preventDefault();
		const { answers, wordsData } = this.state;

		if (answers.length >= wordsData.length) {
			return;
		}
		
		this.setState({answers: [...this.state.answers, this.inputEl.value]});
		this.inputEl.value = "";


		if (this.state.scrambledWords.length === 0 || !wordsData[this.state.scrambledWords.length]) {
			return;
		}

		const newScrambledWord = shuffle(wordsData[this.state.scrambledWords.length]);
		this.setState({scrambledWords: [...this.state.scrambledWords, newScrambledWord]});
	}

	updateInput = (e) => {
        this.setState({
            userInput: e.target.value
        });
	}

	calculateScore = () => {
		return this.state.wordsData.filter((scrambledWord, index) => {
			return scrambledWord === this.state.answers[index];
		});
	}

	render() {		
		const lastScrambledWord = this.state.scrambledWords[this.state.scrambledWords.length - 1];

		return (
			<div className="board">
				{lastScrambledWord &&
					<p>
						{lastScrambledWord}
					</p>
				}

				<form onSubmit={this.saveAnswer}>
					<FormGroup bsSize="large">
						<FormControl type="text" inputRef={(e) => {this.inputEl = e;}} placeholder="Enter an answer" onChange={this.updateInput} />
						<Button bsStyle="primary" onClick={this.startGame}>Start game</Button>
					</FormGroup>					
				</form>

				<h3>Your score:
					<small>
						{this.state.correctAnswers.length * 5}
					</small>
				</h3>
			</div>
		);
	}
}

export default Board;
