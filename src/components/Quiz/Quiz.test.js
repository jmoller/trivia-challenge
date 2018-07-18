import React from 'react';
import { shallow, mount } from 'enzyme';
import Quiz from './Quiz';

describe('Quiz', () => {
  
  const mockFn = jest.fn();
  const currentQuestion = {
    category: "Entertainment: Video Games",
    question: "TF2: Sentry rocket damage falloff is calculated based on the distance between the sentry and the enemy, not the engineer and the enemy"
  };
  const currentQuestionNumber = 1;
  const props = { currentQuestion, currentQuestionNumber};
  const quiz = shallow(<Quiz {...props} onTrueFalseClickHandler={mockFn}/>);

  it('should display the category of the question', () =>{
    expect(quiz.find('h2').text()).toEqual(currentQuestion.category);
  });

  it('should display the current question', () => {
    expect(quiz.find('p').text()).toEqual(currentQuestion.question);
  });
  
  it('should display the current question number', () => {
    expect(quiz.find('span').text()).toEqual('1 of 10');
  });

  it('should display true and false buttons', () => {
    expect(quiz.find('Button').length).toEqual(2);
  });

  describe('user clicks on true/false button', () => {
    
    beforeEach(() => {
      quiz.find('Button').at(0).simulate('click');
      quiz.find('Button').at(1).simulate('click');
    });

    it('calls the onTrueFalseClickHandler callback', () => {
      expect(mockFn).toHaveBeenCalledTimes(2);
    });

    it('calls the callback function with false if clicks the false button', () =>{
      expect(mockFn).toHaveBeenCalledWith(false);
    });

    it('calls the callback function with true if clicks the true button', () =>{
      expect(mockFn).toHaveBeenCalledWith(true);
    });
  });

  

});