import React from 'react';
import { shallow } from 'enzyme';
import Answer from './Answer';

describe('Answer', () => {
  const answerObj = {
      question: 'This is a mock question',
      isCorrect: false,
    };
  
  const answer = shallow(<Answer {...answerObj}/>);

  it('renders correctly', () => {
    expect(answer).toMatchSnapshot();
  });

  it('displays the correct number of answers', () => {
    expect(answer.find('li').length).toEqual(1);
  });
  
  it('displays the li element with the wrong class attached to it', () => {
    expect(answer.find('li').hasClass('wrong')).toEqual(true);
  });

  

});