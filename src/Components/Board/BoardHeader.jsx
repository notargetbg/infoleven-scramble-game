import React from 'react';

const BoardHeader = ({scrambledWords, answers}) => {
    return (
        <div className="board-header">
            <p>
                <strong><em>Instructions: </em></strong>
            </p>
            <ol>
                <li>
                    Guess as many words as possible for the time limit of 40 seconds
                </li>
                <li>
                    Every word awards you <strong>5</strong> points
                </li>               
                <li>
                    Enter the guessed word inside the input field and press <kbd>Enter &#9166;</kbd> to submit your answer
                </li>
                <li>
                    Click on start new game and a <em>scrambled</em> word will appear as well as an <code>&lt;input /&gt;</code>
                </li>
            </ol>
            <p>
                <strong>
                    Good luck!
                </strong>
            </p>
            {scrambledWords && answers &&
                <h2 className="scrambled-word">
                    {scrambledWords[answers.length]}
                </h2>
            }
        </div>
    );
};

export default BoardHeader;
