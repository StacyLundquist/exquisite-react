import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const [lines, setLines] = useState([]);
  const [playerNumber, setPlayerNumber] = useState(1);
  

  const newPhrase = (phrase) => {
    const phrases = [
      ...lines,
    ];
    const newPhrase = [
      ...phrase,
    ];

    const newString = stringFormat(newPhrase);
    phrases.push(newString);
    setLines(phrases)

    let newPlayer = playerNumber + 1;
    setPlayerNumber(newPlayer);
  }

 
  
  const stringFormat = (fields) => FIELDS.map((field) => {
    if (field.key) {
      return (field.userInput ?  field.userInput : field.placeholder);
    } else {
      return field;
    }
  }).join(' ');

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { stringFormat }
      </p>

      <RecentSubmission  /> 

      <PlayerSubmissionForm index={playerNumber} fields={FIELDS} sendSubmission={newPhrase}/>

      <FinalPoem  />

    </div>
  );
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
