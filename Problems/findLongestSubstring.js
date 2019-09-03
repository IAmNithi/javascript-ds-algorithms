// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }

  findLongestSubstring('rithmschool');
  findLongestSubstring('thisisawesome');
  findLongestSubstring('thecatinthehat');
  findLongestSubstring('bbbbbb');
  findLongestSubstring('longestsubstring');