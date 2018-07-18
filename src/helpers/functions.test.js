import functions from './functions';

describe('toBool function', () => {

  it('returns true if the string is `True`', () => {
    const string = 'True';
    expect(functions.toBool(string)).toBeTruthy();
  });

  it('returns false if the string is `False`', () => {
    const string = 'False';
    expect(functions.toBool(string)).toBeFalsy();
  });
});