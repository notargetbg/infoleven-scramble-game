import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'react-bootstrap';
import ScoreBoard from './ScoreBoard';
import ScoreModal from './ScoreModal';

class Result extends Component {
	render() {
		const { currentResult, players, shouldShowModal } = this.props;

		return (
			<Jumbotron>
				{currentResult > 0 && 
					<h3>Your result: <big>{currentResult}</big></h3>						
				}
				<ScoreModal shouldShow={shouldShowModal} result={currentResult} />
				<ScoreBoard players={players} />
			</Jumbotron>
		);
	}
};

const mapStateToProps = (state) => {
    return {
		currentResult: state.game.currentResult,
		players: state.user,
		shouldShowModal: state.game.shouldShowModal
    }
};

export default connect(mapStateToProps)(Result);
