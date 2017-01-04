/**
 * This is code block for getting length of the longest sequence contains non-repeated characters
 * input: 112234567189
 * output: 9
 */

const solution = (str) => {
  let longest = 0;
  let longestStr = "";
  let seen = {};
  let start = 0;
  let next = 0;
  
  while (next < str.length) {
    let char = str[next];

    if (seen[char])
      start = Math.max(start, seen[char]);
    
    if (longest < next - start + 1) {
      longest = next - start + 1;
      longestStr = str.slice(start, next + 1);
    }

    seen[char] = next + 1;
    next ++;
  }

  return longest;
}

const n = 11223456789;
console.log(solution(String(n)));
// output: 8

const str = "xdw3sadsgwesra34tasdftgh";
console.log(solution(str));
// output: 9