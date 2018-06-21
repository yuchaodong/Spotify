// Pseudocode: 
  // convert string input to nested array format with [num, letter] pairing for easier popping off of stack *this is the hard part*

  // iterate through string, 
    // if current element is '[' (aka, everything left of it is a num)
      // slice from everything to the left of the current element to current element (TODO: write helper function that determines if curr element is a letter using charCodeAt)
    // if current element is letter
      // slice from 0th index to curr index

      function codeIsLetter(code) {
        return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
      }
      
      function getBodyFromRemainder(s) {
        // keep looping until we hit a number OR right bracket
        let index = 0;
        while (true) {
          const code = s.charCodeAt(index);
          if (!codeIsLetter(code)) {
            return s.slice(0, index);
          }
          index++;
        }
      }
      
      function decodeStrings(s) {
        const stack = [];
        const result = [];
        let curr = s;
      
        while (curr.length > 0) {
          const index = curr.indexOf('[');
          if (index !== -1) {
            const count = curr.slice(0, index);
            const remainder = curr.slice(index+1);
            const body = getBodyFromRemainder(remainder);
            stack.push([count, body]);
      
            // console.log(curr, count, body)
            curr = remainder.slice(body.length);
            // console.log(curr)
          }
          
          if (curr[0] === ']') {
            const popped = stack.pop();
            // TODO: use .repeat 
              // example: [ [ '4', 'd' ], [ '3', 'e' ], [ '2', 'f' ] ]
              // 'ff'
              // 'effeffeff'
              // 'deffeffeffdeffeffeffdeffeffeffdeffeffeff'
            result.push(popped);
            curr = curr.slice(1);
          }
          // console.log('looped')
        }
        return result;
      }