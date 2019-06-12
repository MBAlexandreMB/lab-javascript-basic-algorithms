// Names and Input
const hacker1 = 'Felipe';
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = prompt('What\'s the navigator\s name?');
console.log(`The navigator's name is ${hacker2}.`);

if (hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`);
}

console.log(hacker1.toUpperCase().split('').join(' '));

console.log(hacker2.split('').reverse().join(''));

let compareNames = hacker1.localeCompare(hacker2)
if (compareNames === 1) {
  console.log("The driver's name goes first");
} else if (compareNames === -1) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

//Palindrome
const newString = prompt('What\'s the phrase you want me to check?');
let palindrome = newString.toUpperCase().split('');
let supArr = palindrome.splice(0, Math.floor(palindrome.length / 2)).reverse();
supArr.join('') === palindrome.join('') ? console.log('It\'s a palindrome!') : console.log('It\'s not a palindrome');

//Lorem Ipsum
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare justo velit, ut congue tellus commodo quis. In quis justo eget enim dictum iaculis at non purus. Nullam in ligula porta, pharetra sem vel, commodo mi. Curabitur nec ipsum a massa ornare egestas in pharetra massa. Fusce suscipit quam eget magna efficitur dignissim. Nullam ac sem pellentesque, faucibus lorem sit amet, mollis nisi. Mauris sit amet lectus eu mi gravida egestas. In efficitur congue neque non luctus. Nullam dictum congue elit. Duis non placerat sapien. Nunc fringilla arcu vitae facilisis iaculis. In hac habitasse platea dictumst. Suspendisse sagittis libero eget tellus auctor sollicitudin. Etiam iaculis ante eu magna tempus sagittis. Donec in dolor est. Integer vitae pellentesque tellus. Morbi nisl risus, pharetra nec elementum eu, luctus auctor sem. Aliquam nec enim turpis. Nulla nec tristique est. Cras accumsan enim erat, ut interdum urna lobortis nec. Vivamus accumsan felis eget faucibus ultrices. Cras sit amet lorem egestas odio fermentum tincidunt at vel dui. Nunc lectus ipsum, suscipit sed magna nec, finibus vestibulum leo. Aliquam sit amet nunc ac nulla condimentum euismod. Vivamus ut fermentum quam. Etiam auctor tempus lacus, vitae viverra lorem dictum id. Ut quis odio in ipsum consequat convallis. Aenean hendrerit leo eu mauris pellentesque, non euismod leo consectetur. Aliquam ac justo in nibh tincidunt posuere a eu elit. Morbi id velit tortor. Nam sit amet quam vel quam faucibus varius at sit amet est. Etiam pretium sodales lectus, ut mattis nibh porttitor non. Vestibulum varius magna sed erat gravida malesuada efficitur id ex. Nam quis lacinia tellus. Vestibulum rutrum vulputate neque, vitae tincidunt nisl molestie id. Pellentesque non mollis arcu, porta vulputate turpis. Praesent eu orci convallis est pellentesque hendrerit vitae ac libero. Aliquam erat volutpat. Pellentesque blandit augue magna, in fringilla ipsum lacinia sed.";


let ar = lorem.split(' ');
console.log(ar.length);

let lastIndex = 0;
let numOfTimes = 0;
while (ar.indexOf('et', lastIndex) !== -1) {
  lastIndex = ar.indexOf('et', lastIndex) + 1;
  numOfTimes += 1;
}

console.log(`The word "et" appeared ${numOfTimes} times.`);