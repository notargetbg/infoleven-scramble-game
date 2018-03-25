import React, { Component } from 'react';
import { shuffle } from '../../Data/Helpers';
import { connect } from 'react-redux';
import * as actions from '../../Store/actions';
import { words } from '../../Data/words';
import randomWords from 'random-words';

import BoardHeader from './BoardHeader';
import BoardInput from './BoardInput';

console.log(randomWords({ exactly: 120 }));
class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasGameStarted: false,
			scrambledWords: []
		};
	}

	startGame = () => {
		this.setState({
			hasGameStarted: true,
			scrambledWords: words.map((word) => shuffle(word))
		});
		this.props.dispatch(actions.resetGame());
		this.gameTimeout();
	}

	gameTimeout = () => setTimeout(() => {
		this.setState({
			hasGameStarted: false,
			scrambledWords: []
		});
		this.props.dispatch(actions.saveResult(this.calculateScore()));
	}, 1000 * 10);

	calculateScore = () => {
		const correctAnswers = words.filter((correctWord, index) => {
			return correctWord === this.props.answers[index];
		});
		return correctAnswers.length * 5;
	}

	render() {
		return (
			<div className="board">
				<BoardHeader scrambledWords={this.state.scrambledWords} />
				<BoardInput startGameFn={this.startGame} wordsData={words} hasGameStarted={this.state.hasGameStarted} />				
			</div>
		);
	}
};

const mapStateToProps = (state) => {
    return { 
		answers: state.game.answers
    }
};

export default connect(mapStateToProps)(Board);