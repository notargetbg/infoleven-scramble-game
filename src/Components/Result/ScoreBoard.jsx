import React from 'react';
import { sortByScore } from '../../Data/Helpers';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const ScoreBoard = ({players}) => {
    if (players.length === 0) {
        return (
            <h4 className="text-warning">There are no top players yet!</h4>
        )
    }

    return (
        <div className="results-scoreboard">
            <h4 className="text-info">Top players:</h4>
            <ListGroup>
                {sortByScore(players).map((player) => (
                    <ListGroupItem key={player.id} className="result-item">
                        {player.name} - <big>{player.score}</big>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
};

export default ScoreBoard;
