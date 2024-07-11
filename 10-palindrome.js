palindromeString = "malayalam";
// palindromeString='onam'

splitPalindrome = palindromeString.split("");
reversePalindrome = splitPalindrome.reverse();
joinPalindrome = reversePalindrome.join("");

if (joinPalindrome == palindromeString) {
  console.log(`The ${palindromeString} is palindrome`);
} else {
  console.log(`The ${palindromeString} is not palindrome`);
}
