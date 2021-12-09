// IMPORT MODULES under test here:
import { renderFriend, renderMushroom } from '../render-utils.js';
// import { displayFriends } from '../app.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="mushroom"></div>';
    const expected1 = '<div class="friend"><span></span><p></p></div>';
    // const expected2 = '';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMushroom();
    const actual1 = renderFriend('');
    // const actual2 = displayFriends('');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
    expect.equal(actual1.outerHTML, expected1);
});
