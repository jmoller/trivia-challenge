//@flow
import React from "react";
import ResultsHolder from './Results.style';
import Button from '../uielements/button';
import Answer from '../Answer/Answer';

type Props = {
  // Amount of correct answers 
  correctAnswers: number,
  // Array of answers to display
  results: Array<{isCorrect: boolean, question: string}>,
  // Play again button click handler
  playAgainHandler: () => void
}

const Results = ({ correctAnswers, results, playAgainHandler }: Props) => {
  return (
    <ResultsHolder>
      <h1 style={{color: '#4B3A4F'}}>You scored <br></br> {correctAnswers} / 10</h1>

      <ul className="results__list">
        {results.map((r,i) => <Answer key={i} question={r.question} isCorrect={r.isCorrect}/>)}
      </ul>

      <Button secondary onClick={playAgainHandler}>Play Again?</Button>
    </ResultsHolder>
  );
};

export default Results;
