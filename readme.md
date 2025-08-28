

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans:
a: getElementById
getElementById returns a specific element from the HTML document by its id.An id is written in HTML as a string, for example:
id="used-for-only-one-element"

If we want to see this element, we can go to JavaScript and log it in the console, like:
console.log(document.getElementById("used-for-only-one-element"));


b: getElementsByClassName
getElementsByClassName returns multiple elements from the HTML document by their class.A class in HTML is written as a string, for example:class="used-for-many-elements"
When logged in JavaScript, it doesn’t return an actual array but an array-like collection.
Example:console.log(document.getElementsByClassName("used-for-many-elements"));

c: querySelector
querySelector is used with CSS selectors. It can select any type of element (id, class, tag, etc.).But it only returns the first matching element.
Example:console.log(document.querySelector(".some-class"));


d: querySelectorAll
querySelectorAll is also used with CSS selectors.
Unlike querySelector, it returns all matching elements.
This also doesn’t return an array, but an array-like collection (NodeList).
Example:console.log(document.querySelectorAll(".some-class"));



2. How do you **create and insert a new element into the DOM**?

Ans: 
First, in JavaScript, you need to create a new element using createElement. Now, if you want to add a div, you can write in JavaScript like this:
let newDiv = document.createElement("div");

The div has been created. To add content inside this div, you can use JavaScript’s .textContent. For example:
newDiv.textContent = "Write your content here";


To add a CSS class to the div, you can use JavaScript’s .className. For example:
newDiv.className = "class-name";

Now, if you want to add this to the HTML file, you need to use JavaScript’s appendChild. If you want to add it to the `body`, the command will be:
document.body.appendChild(newDiv);
This will add the new div at the end of the body.

If you want to add it inside a specific section, div, or any other element inside the body, you first mark that element with a CSS id. Then you can use .getElementById in JavaScript to select it and use .append to add the new element inside it.
Example:
const target = document.getElementById("target-id");
target.append(newDiv);



3. What is **Event Bubbling** and how does it work?

Ans:
Event Bubbling is a process where an event triggered on a specific child element (or certain child elements) using .addEventListener (or other methods, though so far we’ve only used .addEventListener) gradually propagates up to the parent element, then to the grandparent element, and so on, eventually reaching all ancestor elements.

We can demonstrate this process using HTML, CSS, and JS.

Example HTML and CSS structure:
(The elements will move upward after being triggered)
<div id="parent-element">
    <button id="child-element">Click</button>
</div>

Example JS structure:
document.getElementById("child-element").addEventListener("click", function(event) {
    Here we can specify where the event should stop propagating
    and what action should happen on that element through this function
});




4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---


