// Pseudocode:
  // create a dictionary using elements in s as property, and number of times it appears as value

    // example: s = 'weather' =>

    // s = {
    //   'w':1
    // }

    // s = {
    //   'w':1,
    //   'e':1
    // }

    // s = {
    //   'w':1,
    //   'e':1,
    //   'a':1
    // }

    // s = {
    //   'w':1,
    //   'e':1,
    //   'a':1,
    //   't':1
    // }

    // s = {
    //   'w':1,
    //   'e':1,
    //   'a':1,
    //   't':1,
    //   'h':1
    // }

    // s = {
    //   'w':1,
    //   'e':2,
    //   'a':1,
    //   't':1,
    //   'h':1,
    //   'r':1
    // }

  // iterate through t
    // if current element in t is found in dictionary 
      // concat element to result variable 
      // decrement value by 1
      // repeat until value = 0
  
  // return result

// (Revised: changed string concatenation to array map and join for O(n) time complexity)

function sortByStrings(s,t) {
    const charDict = {};
  
    s.split('').forEach((char) => {
      charDict[char] = charDict[char] ? charDict[char] + 1 : 1;
    })
  
    const result = t.split('').map((char) => {
      const count = charDict[char];
      if (count) {
        return char.repeat(count);
      }
    });
    return result.join('');
  }