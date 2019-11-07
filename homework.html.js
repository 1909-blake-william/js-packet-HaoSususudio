// 1. USA
// Define function getUSA()
// Find the html element that contains "USA" in the data-customAttr.
// Print that element's contents.
function getUSA() {
    return document.querySelector('[data-customAttr="USA"]');
}
//console.log(getUSA().innerText);

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
//console.log(getPeopleInSales());

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
// getAnchorChildren();

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
// getHobbies()
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
// getCustomAttribute()

// 6. Sum Event
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>
// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element

// let num22 = document.getElementById('num2');
let num1Ele = document.getElementById('num1');
let num2Ele = document.getElementById('num2');
let sumEle = document.getElementById('sum');

num1Ele.addEventListener('input', upDateSumInnerText())
num2Ele.addEventListener('input', upDateSumInnerText());

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

// let favColorRadios = document.querySelectorAll('input[name="favoriteColor"]');
// let oldColor = getCheckedColorText();
// let newColor = '';


// function getCheckedColor() {
//     let checkedColor = '';
//     favColorRadios.forEach((colorRadio) => {
//         if (colorRadio.checked) {
//             checkedColor = colorRadio.nextSibling.textContent;
//         }
//     })
//     return checkedColor;
// }

function getCheckedColorRadio() {
    favColorRadios.forEach((colorRadio) => {
        if (colorRadio.checked) {
            return colorRadio;
        }
    })
}
console.count(getCheckedColorRadio());

// function getCheckedColorText() {
//     let checkedColorRadio = getCheckedColorRadio();
//     return checkedColorRadio.nextSibling.textContent;
// }



// favColorRadios.forEach((colorRadio) => {
//     colorRadio.addEventListener('change', () => {
//         newColor = getCheckedColorText();
//         alert(`So you like ${newColor} more than ${oldColor} now?`);
//         oldColor = newColor;
//     })
// });




//////////////////////////Why this won't work????????????//////////
// firstForm.addEventListener('change', alertColorChange());
// function alertColorChange() {
//     newColor = getCheckedColor();
//     alert(`So you like ${newColor} more than ${oldColor} now?`);
//     oldColor = newColor;
// }
////////////////////////////////////////////////////////

// 9. Show/Hide Event
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.


// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.


// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.


// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).