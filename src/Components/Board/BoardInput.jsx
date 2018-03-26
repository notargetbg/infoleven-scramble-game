import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Store/actions';
import { FormControl, FormGroup } from 'react-bootstrap';

class BoardHeader extends Component {
    updateInput = (e) => {
        this.setState({
            userInput: e.target.value
        });
    }

    saveAnswer = (e) => {
		e.preventDefault();
        const { answers, wordsData } = this.props;

		if (answers.length >= wordsData.length) {
			return;
		}
        
        this.props.dispatch(actions.saveAnswer(this.inputEl.value));
		this.inputEl.value = "";
    }

	render() {        
        if (!this.props.hasGameStarted) {
            return null;
        }

		return (
			<form onSubmit={this.saveAnswer}>               
                <FormGroup bsSize="large">
                    <FormControl type="text" inputRef={(e) => {this.inputEl = e;}} placeholder="Enter an answer" onChange={this.updateInput} />
                </FormGroup>
            </form>
		);
	}
}

const mapStateToProps = (state) => {
    return { 
		answers: state.game.answers
    }
};

export default connect(mapStateToProps)(BoardHeader);