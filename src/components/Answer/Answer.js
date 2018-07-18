// @flow
import React from 'react';

type Props = {
  /* The question to the answer being displayed*/ 
  question: string,
  /* If the answer is correct or not*/
  isCorrect: boolean
}

/*
  Dsiplays the answer to the screen
*/
const Answer = ({isCorrect, question}: Props ) => {
  let liClass: string = isCorrect ? 'correct' : 'wrong';
  
  return (
    <li className={liClass}>
      {question}
    </li>
  );
};

export default Answer;