/*If the final result is longer than 140 chars it must return false.*/
//If the input is a empty string it must return false.
//It must start with a hashtag (#).
/*All words must have their first letter capitalized.*/


function generateHashtag(str){
    
    return (str === null || str.length === 0 || str.length > 140 || str === '')? false : "#" + str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() +  txt.substr(1).toLowerCase()}).replace(/\s+/g, '');
}

console.log(generateHashtag('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'));

console.log(generateHashtag('#hello world'));
console.log(generateHashtag('hello world'));
console.log(generateHashtag('hello world I am a baller with a plan'));
console.log(generateHashtag(''));
