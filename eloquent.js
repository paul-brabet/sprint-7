// Minimum exercise

// Your code here.
var min = function(a, b) {
	if (a < b) {
      return a
    }
  	else {
      return b
    }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10



//Recursion exercise

// Your code here.
var isEven = function(number) {
  if (number == 0) {
    return true
  }
  else if (number == 1) {
	return false
  }
  else if (number < 0) {
    return isEven(number += 2)
  }
  else {
    return isEven(number -= 2)
  }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false


//Bean counting

// Your code here.
var countChar = function(string, character) {
  var total = 0
  for (var i = 0; i <= string.length; i++) {
    if (string.charAt(i) == character) {
      total++
    }
  }
  return total
}

var countBs = function(string) {
  return countChar(string, "B")
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
