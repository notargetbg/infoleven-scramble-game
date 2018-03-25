import React from 'react';
import { sortByScore } from '../../Data/Helpers';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const ScoreBoard = ({players}) => {
    if (players.length === 0) {
        return (
            <h4 className="text-warning">There are no top players yet!</h4>
        )
    }
    
    if(players) {
        console.log(players);
    }

    return (

        <div>
            <h4 className="text-info">Top players:</h4>
            <ListGroup>
                {sortByScore(players).map((player) => (
                    <ListGroupItem key={player.id}>
                        {player.name} - {player.score}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
};

export default ScoreBoard;
