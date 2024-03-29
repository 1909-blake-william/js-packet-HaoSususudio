// 1. USA
// Define function getUSA()
// Find the html element that contains "USA" in the data-customAttr.
// Print that element's contents.
function getUSA() {
    return document.querySelector('[data-customAttr="USA"]');
}
console.log('Answer to Q1. USA:');
console.log(getUSA().innerText);

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales() {
    let allPeople = document.querySelectorAll('td.empName');
    let allDept = document.querySelectorAll('td.empName + td');
    let allPeopleInSales = [];
    for (let i = 0; i < allDept.length; i++) {
        if (allDept[i].innerText === 'Sales') {
            allPeopleInSales.push(allPeople[i].innerText)
        }
    }
    return allPeopleInSales;
}
console.log('Answer to Q2. Sales:');
console.log(getPeopleInSales());

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>

function getAnchorChildren() {
    let spansWithinAnAnchor = document.querySelectorAll('a > span');
    for (let i = 0; i < spansWithinAnAnchor.length; i++) {
        console.log(spansWithinAnAnchor[i].innerText);
    }
    return spansWithinAnAnchor;
}
console.log('Answer to Q3. Click Here:');
getAnchorChildren();

// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'hobbies' select element.
// Print the value and the contents.
function getHobbies() {
    let selectedHobbies = document.querySelectorAll('select[name="hobbies"] option[selected="selected"]')
    selectedHobbies.forEach(
        function (element) {
            console.log(element);
            console.log(element.innerHTML);
        }
    )
    return selectedHobbies;
}
console.log('Answer to Q4. Hobbies:');
getHobbies();

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.
function getCustomAttribute() {
    let elementsWithDataCustomAttr = document.querySelectorAll('[data-customAttr]');
    elementsWithDataCustomAttr.forEach(
        (element) => {
            console.log(element.getAttribute('data-customAttr'));
            console.log(element);
        }
    )
}
console.log('Answer to Q5. Custom Attribute:');
getCustomAttribute()

// 6. Sum Event
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>
// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element

let num1Ele = document.getElementById('num1');
let num2Ele = document.getElementById('num2');
let sumEle = document.getElementById('sum');

num1Ele.addEventListener('input', upDateSumInnerText);
num2Ele.addEventListener('input', upDateSumInnerText);

function upDateSumInnerText() {
    let num1 = Number(num1Ele.value);
    let num2 = Number(num2Ele.value);
    if (!num1 || !num2) {
        InnerText = 'Cannot add';
    } else {
        let sum = num1 + num2;
        InnerText = num1Ele.value + ' + ' + num2Ele.value + ' = ' + sum;
    }
    sumEle.innerText = InnerText;
}

// 7. Skills Event
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
let skillMenu = document.querySelector('select[name="skills"]');
skillMenu.addEventListener('change', () => {
    skill = skillMenu.selectedOptions[0].innerText;
    alert(`Are you sure ${skill} is one of your skills?`);
});

// 8. Favorite Color Event
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

let favColorRadios = document.querySelectorAll('input[name="favoriteColor"]');
let oldColor = getCheckedColorText();

favColorRadios.forEach((colorRadio) => {
    colorRadio.addEventListener('change', () => {
        let newColorRadio = getCheckedColorRadio();
        let newColor = getCheckedColorText();
        let newColorAttr = newColorRadio.value;
        favColorRadios.forEach((ele) => changeRadioBackgroundColor(ele, newColorAttr));
        alert(`So you like ${newColor} more than ${oldColor} now?`);
        oldColor = newColor;
    })
});

function getCheckedColorRadio() {
    let checkedColorRadio = document.createElement('input');
    favColorRadios.forEach((colorRadio) => {
        if (colorRadio.checked) {
            checkedColorRadio = colorRadio;
        }
    })
    return checkedColorRadio;
}

function getCheckedColorText() {
    let checkedColorRadio = getCheckedColorRadio();
    return checkedColorRadio.nextSibling ? checkedColorRadio.nextSibling.textContent : 'Anything';
    // Alternate guard operator verion. Will return null instead of 'Anything':
    // return checkedColorRadio.nextSibling && checkedColorRadio.nextSibling.textContent; 
}

function changeRadioBackgroundColor(colorRadio, newColorAttribute) {
    let replacementNode = document.createElement('span');
    let colorText = colorRadio.nextSibling.textContent;
    replacementNode.innerHTML = `<span style="background-color:${newColorAttribute}">${colorText}</span>`;
    colorRadio.nextSibling.replaceWith(replacementNode);
}

// 9. Show/Hide Event
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
let allEmployees = document.querySelectorAll('td.empName');
allEmployees.forEach((employee) => {
    employee.addEventListener('mouseover', () => {
        if (employee.style.color === 'white') {
            employee.style.color = 'black';
        } else {
            employee.style.color = 'white'
        }
    })
});

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
function startTime() {
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    hour = padZero(hour);
    minute = padZero(minute);
    second = padZero(second);
    document.getElementById('currentTime').innerHTML =
        hour + ":" + minute + ":" + second + ' ' + ampm;
    setTimeout(startTime, 500);
}
function padZero(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
startTime();

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
let helloWorld = document.getElementById('helloWorld');
helloWorld.addEventListener('click', () => {
    setTimeout(changeHelloWorldTextColor, 3000);
});

function changeHelloWorldTextColor() {
    helloWorld = document.getElementById('helloWorld');
    helloWorld.style.color = `rgb(${rdn0To255()}, ${rdn0To255()}, ${rdn0To255()})`;
}

function rdn0To255() {
    return Math.floor(Math.random() * 256);
}

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
// function walkTheDOM(node, func) {
function walkTheDOM(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walkTheDOM(node, func);
        node = node.nextSibling;
    }
}

console.log('Answer to Q12. Walk the DOM:');
walkTheDOM(document.documentElement, function (node) {
    if (node.nodeName) {
        console.log(node.nodeName);
    }
});
