var btn = document.querySelector('button');
var body = document.querySelector('body');
var span = document.querySelector('span');
//Create a alert with your group name.
alert('Sharif Hossain');

var colorArr = ['red', 'yellow', 'pink', 'green', 'teal', 'blue']

var rand = Math.floor(Math.random()* colorArr.length)
//we will use this array to pick a color from the color array

btn.addEventListener("click", () => body.style.background= colorArr[rand]);
