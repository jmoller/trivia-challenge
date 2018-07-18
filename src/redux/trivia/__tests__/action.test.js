import React from 'react';
import { shallow } from 'enzyme';
import { fetchTrivia } from '../actions';
import { FETCH_TRIVIA } from '../types';

it('returns an action to fetch the trivia game', () =>{ 

    const expectedOutcome = {type: FETCH_TRIVIA};

  expect(fetchTrivia()).toEqual(expectedOutcome);
});