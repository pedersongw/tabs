This is the third project I worked on incorporating all three basic languages (HTML, CSS, and Javascript) into a functioning webpage.

This project is based on an exercise from the book "Eloquent Javascript" by Marijn Haverbeke.

The challenge is to create a set of tabs that can be used as buttons in a navigation bar. When a button is pressed the corresponding section is displayed, while all others are hidden.

I used div elements instead of button elements, though I've read some material that suggests it is better to use button elements.

When a click event on a div-button bubbles outward and reaches an event listener on the body a function determines the event target. If it was any button all content-divs have their display attribute set to none, and the div that corresponds to the clicked button has its display attribute set to whatever will make it visible in context.