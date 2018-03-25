import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import Board from './Board/Board';
import Result from './Result/Result';
import './styles/main.css';

class ScrambleGame extends Component {
	render() {
		return (
			<div className="game-container">
				<Grid>
					<PageHeader>
						Scramble Game
					</PageHeader>
					<Row>
						<Col xs={12} md={8}>
							<Board />
						</Col>
						<Col xs={6} md={4}>
							<Result />
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default ScrambleGame;
