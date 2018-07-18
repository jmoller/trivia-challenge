//@flow
import React from 'react';
import Button from '../uielements/button';

import TextBox from '../uielements/textbox';

type Props = {
  /** Call back function fo the begin button */
  onBeginClick: () => void
}

/*
  Dsiplays the Home to the screen
*/
const Home = ({onBeginClick}: Props) => {
  return (
    <React.Fragment>
      <h1>Welcome to the trivia challenge</h1>
      
      <TextBox>
        <p>You will be presented with 10 true or false questions</p>

        <p>Can you score 100%?</p>
      </TextBox>
      
      
      <Button primary onClick={onBeginClick} > BEGIN </Button>
    </React.Fragment>
  );
};

export default Home;