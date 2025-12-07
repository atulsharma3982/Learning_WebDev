// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

// let str = "The quick brown fox jumps over the lazy dog."
let str = "myths";
function countVowels(str){
    let no=0;
    for (const  char of str) {
        if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U'){
            no++;
        }
    }
    return no;
}
console.log(countVowels(str));