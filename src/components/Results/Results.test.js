import React from 'react';
import { shallow, mount } from 'enzyme';
import Results from './Results';


describe('Results', () => {
  const correctAnswers = 1;
  const mockFn = jest.fn();
  const results = [
    {
      question: 'This is a mock question',
      isCorrect: false,
    },
    {
      question: 'This is a second mock question',
      isCorrect: true,
    }
  ]
  const props = {correctAnswers, results, };
  const res = mount(<Results playAgainHandler={mockFn} {...props}/>);

  it('renders propertly', () => {
    expect(res).toMatchSnapshot();
  })

  it('should be a title displaying how many correct answers the user has', () => {
    expect(res.find('h1').exists()).toBeTruthy();
    expect(res.find('h1').text()).toEqual('You scored  1 / 10');
  })

  it('displays the questions correctly', () => {
    expect(res.find('li').length).toEqual(2);
  });

  it('displays a play again button', () => {
    expect(res.find('button').exists()).toBeTruthy();
  });

  describe('when user clicks on play again button', () => {
    beforeEach(() => {
      res.find('button').simulate('click');
    });

    it('calls the mock function callback', () => {

      expect(mockFn).toHaveBeenCalledTimes(1);
    });

  });

});