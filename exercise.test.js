import { reverseString } from './exercise.js';

test('reverseString reverses the string', () => {
    expect(reverseString('hello')).toBe('olleh');
    // add more tests here

    expect(reverseString('world')).toBe('dlrow');

    // add more test for empty string
    expect(reverseString('')).toBe('');
    
});
 