/**
 * This was a "describe" questions so no code here
 */

/*

I think a better approach, than the ones mentioned in the book, 
is to use a hybrid of the two approaches mentioned in the book.

Two of the stacks could be fixed at the opposite ends of the array and grow inwards (much like the stack and heap in memory, or at least how it's
draw in diagrams as growing towards each other).

The third stack could sit in the middle and would be the only one that could
require shifting. 

However, too many additions and removals to the outer two
stacks, and under conditions of low space, would mean shifting the middle 
stack frequently. But you'd have to shift stacks frequently in the 
Approach 2 under the same conditions anyways so I'd say it's a win.

*/

export default true;
// used for a test, so I can still use test count as an indicator of questions solved
