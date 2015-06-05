// Write a function alphabetSoup that takes a single string parameter and returns the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

// var alphabetSoup = function(stringBean) {
// 	var singleBeans = stringBean.split("");
// 	var alphaBeans = singleBeans.sort();
// 	var oneBean = alphaBeans.join("");
// 	return oneBean 
// }

// console.log(alphabetSoup('please alphabetize this'));


// Write a function vowelCount that takes a single string parameter and returns the number of vowels the string contains (ie. "All cows eat grass" would return 5).

var vowelCount = function(bigString) {
	var bigString2 = bigString.toLowerCase();
	var vowelsplit = bigString2.split('');
	var vowelsOnly = vowelsplit.filter(function(element) {
		if ((element === "a") || (element === "e") || (element === "i") || (element === "o") || (element === "u")) {
			return true 
		}
		else {
			return false
		}	
	})
	return vowelsOnly.length;
}

console.log(vowelCount("All cows eat grass"));
