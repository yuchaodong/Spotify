// Pseudocode: (* Recursion)
  // *start from the largest denomination, and work our way towards the smallest*
  // when trying different combos of denominations, start with largest and smallest integers (to ensure that by the time the largest pointer points to a new denomination (the next largest), all possibilities involving the previous largest denomination have already been tried)
  // create variables that keep track of: current, smallest, count
  // example: amount = 4, denomination = [1, 2, 3]
    // iterate through denomination, from end to front
      // is 3 more than half of 4? Yes (do not add itself)
      // is 3 + 1 = 4? Yes (increment count (count = 1, current = 3, smallest = 1 ), move to next largest denomination, because 3 + 1 is === 4 (not more, not less))
      // is 2 more than half of 4? No (add itself)
      // 2 + 2 = 4 (increment count (count = 2, current = 2))
      // is 2 + 1 = 4? No, it's less
      // is 2 + 1 + 1 = 4? Yes (increment count (count = 3), move to next largest denomination(current = 1))
      // is 1 more than half of 4? No (add itself)
      // is 1 + 1 = 4? No, it's less
      // is 1 + 1 + 1 = 4? No, it's less
      // is 1 + 1 + 1 = 4? Yes (increment count (count = 4))
    // return count