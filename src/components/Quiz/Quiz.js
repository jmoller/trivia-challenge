//@flow
import React from "react";
import Button from "../uielements/button";
import TextBox from '../uielements/textbox';

// Utility library to decode html entities
const Entities = require('html-entities').XmlEntities; 
const entities = new Entities();

type Props = {
  // The current question being shown to the user
  currentQuestion: {category: string, question: string},
  // The current question number to show
  currentQuestionNumber: number,
  // True or False button click handler
  onTrueFalseClickHandler: (flag: boolean) => void
}

const Quiz = ({
  currentQuestion: { category, question },
  currentQuestionNumber,
  onTrueFalseClickHandler
}: Props) => {
  return (
    <React.Fragment>
      <h2>{category}</h2>

      <TextBox>
        {/*Decode the html entities from the question*/}
        <p>{entities.decode(question)}</p>
        <span>{currentQuestionNumber} of 10</span>
      </TextBox>

      <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
        <Button className="btn-false" onClick={onTrueFalseClickHandler.bind(this, false)} falsy>False</Button>
        <Button className="btn-true" onClick={onTrueFalseClickHandler.bind(this, true)} truthy>True</Button>
      </div>
    </React.Fragment>
  );
};


export default Quiz;
