import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, FormControl, FormGroup } from 'react-bootstrap';
import * as actions from '../../Store/actions';

class ScoreModal extends React.Component {
    handleClose = () => {
        this.props.dispatch(actions.hideModal());
    };

    saveUser = (e) => {
		e.preventDefault();
		this.props.dispatch(actions.addUser(this.inputEl.value, this.props.result));
        this.props.dispatch(actions.resetGame());
    }
    
    restartGame = () => {		
        this.props.dispatch(actions.resetGame());
        this.props.dispatch(actions.startGame());
	}

    render() {
        const { result } = this.props;
        
        return (
            <Modal show={this.props.shouldShow} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    {this.props.result &&
                        <Modal.Title>
                            Your result: <big>{result}</big>
                        </Modal.Title>
                    }
                </Modal.Header>
    
                <Modal.Body>
                    <form onSubmit={this.saveUser}>                        
                        <FormGroup bsSize="small">							
                            <FormControl type="text" inputRef={(e) => {this.inputEl = e;}} placeholder="Enter your name"/>
                        </FormGroup>                        
                    </form>
                    {result >= 25 &&
                        <p>
                            You did great! If you wish you can save your score on the leaderboard.
                        </p>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="success" type="submit" onClick={this.saveUser}>Save score</Button>
                    <Button bsSize="sm" onClick={this.restartGame} >Play again?</Button>
                </Modal.Footer>            
            </Modal>
        );
    };
    
};

export default connect()(ScoreModal);
