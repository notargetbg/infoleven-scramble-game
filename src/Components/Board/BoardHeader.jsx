import React from 'react';

const BoardHeader = ({scrambledWords}) => {

    if(!scrambledWords) {
        return null;
    }

    const currentScrambledWord = scrambledWords.splice(0, 1);

    return (
        <div className="board-header">        
            <em>Instructions: </em>
            <ol>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </li>
                <li>
                    Libero exercitationem rerum amet accusamus illo laudantium nisi ratione molestias deleniti tempore.
                </li>
                <li>
                    Laborum blanditiis labore nesciunt eveniet temporibus, facilis sequi accusantium. Earum!
                </li>
            </ol>
            <p>
                Good luck!
            </p>
            {currentScrambledWord &&
                <h4>
                    {currentScrambledWord}
                </h4>
            }
        </div>
    );
};

export default BoardHeader;
