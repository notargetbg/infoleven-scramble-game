import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Store/actions';
import { Jumbotron, Button, FormControl, FormGroup } from 'react-bootstrap';
import ScoreBoard from './ScoreBoard';

class Result extends Component {
	saveUser = (e) => {
		e.preventDefault();
		this.props.dispatch(actions.addUser(this.inputEl.value, this.props.currentResult));
		this.props.dispatch(actions.resetGame());
	}

	render() {
		const { currentResult, players } = this.props;

		return (
			<Jumbotron>
				{currentResult && 
					<form onSubmit={this.saveUser}>
						<h3>Your result: <small>{currentResult}</small></h3>						
						<FormGroup bsSize="small">							
							<FormControl type="text" inputRef={(e) => {this.inputEl = e;}} placeholder="Enter your name"/>
						</FormGroup>		
						<Button bsStyle="success" bsSize="sm" type="submit">Save your score?</Button>
						<hr/>
					</form>
				}
				<ScoreBoard players={players} />
			</Jumbotron>
		);
	}
};

const mapStateToProps = (state) => {
    return { 
		answers: state.game.answers,
		currentResult: state.game.currentResult,
		players: state.user
    }
};

export default connect(mapStateToProps)(Result);
