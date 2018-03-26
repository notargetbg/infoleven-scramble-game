import React, { Component } from 'react';
import { shuffle, calculateScore } from '../../Data/Helpers';
import { connect } from 'react-redux';
import * as actions from '../../Store/actions';
// import { words } from '../../Data/words';
import randomWords from 'random-words';
import BoardHeader from './BoardHeader';
import BoardInput from './BoardInput';
import { Button } from 'react-bootstrap';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scrambledWords: [],
			words: []
		};
	}

	startGame = () => {
		const generatedWords = randomWords({ exactly: 100 });
		const scrambledWords = generatedWords.map((word) => shuffle(word));
		
		this.setState({
			scrambledWords: [...scrambledWords],
			words: [...generatedWords]
		});

		this.startGameCountdown();
		this.props.dispatch(actions.gameStarted());
	}
	
	startGameCountdown = () => setTimeout(() => {
		const score = calculateScore(this.state.words, this.props.answers);
		this.props.dispatch(actions.saveResult(score));	
		this.props.dispatch(actions.showModal());
		this.props.dispatch(actions.endGame());

		this.setState({
			scrambledWords: [],
			words: []
		});		
	}, 1000 * 40);

	componentDidUpdate() {
		if (this.props.shouldStartGame) {
			this.startGame();
		}
	}

	render() {
		return (
			<div className="board">
				<BoardHeader scrambledWords={this.state.scrambledWords} answers={this.props.answers} />
				<BoardInput wordsData={this.state.words} hasGameStarted={this.props.hasGameStarted} />
				{!this.props.hasGameStarted &&
					<Button bsStyle="primary" onClick={this.startGame}>Start new game</Button>
				}				
			</div>
		);
	}
};

const mapStateToProps = (state) => {
    return { 
		answers: state.game.answers,
		shouldStartGame: state.game.shouldStartGame,
		hasGameStarted: state.game.hasGameStarted
    }
};

export default connect(mapStateToProps)(Board);