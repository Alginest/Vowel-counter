// selectors
const text = document.getElementById('counter');
const button = document.querySelector('.btn');
const answer = document.querySelector('.number');
let texting = '';


//functions
function countVowels (){
    let counter = 0;
   const arr = Array.from(texting.toUpperCase());
   const result = arr.map( l => {
       if(l === 'A' || l === 'E' || l === 'I'|| l === 'O'|| l === 'U'){
           counter++;
       }
   })
   answer.textContent = `There are ${counter} of vowels in the word`;
   return counter;
}


//liseners
text.addEventListener('change', () => {
    texting = text.value;
});
button.addEventListener('click', countVowels);