console.log("Script running...")
// Task 1: Light & Dark Mode
// Select the '☀️' and '🌑' buttons

let light = document.getElementById("lightMode")
let dark = document.getElementById("darkMode")


// Select the body element
let body = document.querySelector("body")

// Add an event listener to the ☀️ button such that when it's clicked, the body's background color is lightyellow and text color is navy

light.addEventListener("click", function(event){
  body.style.backgroundColor = "lightyellow"
  body.style.color = "navy"
})

// Add an event listener to the 🌑 button such that when it's clicked, the background and text colors are flipped (opposite of ☀️ mode)

dark.addEventListener("click", function(event){
  body.style.backgroundColor = "navy"
  body.style.color = "lightyellow"
})

// Task 2: Image size
// Select the image
let image = document.getElementById("pussInBoots")

// Add an event listener to the image such that when you move your mouse over it, the width changes to 110% 
image.addEventListener("mouseover", function(event){
  image.style.width = "110%"
})

// Add an event listener to the image such that when you move your mouse off it, the width changes back to 100%
image.addEventListener("mouseout", function(event){
  image.style.width = "100%"
})


// Task 3: Best school input
// Select the input and p tag 
let input = document.getElementById("input")
let p = document.getElementById("result")

// Add an event listener to the input such that when the user presses a key, if the input value is "CSH", change the p tag text to be "Correct" and the text color to be green. Else, change the text to be "Incorrect" and the text color to be red.
image.addEventListener("keypress",function(event){
  if(input === "CSH"){
    p.textContent = "Correct"
    p.style.color = "green"
  } else {
    p.textContent = "Incorrect"
    p.style.color = "red"
  }
})


// Task 4: RGB
// Select the red h2
let red = document.getElementById("red")

// Add an event listener to the red h2 such that when the mouse is over it, the text color changes to red and you add the active class to its class list
red.addEventListener("mouseover", function(event){
  red.style.color = "red"
})


// Add an event listener to the red h2 such that when the mouse is off it, the text color changes back to black and you remove the active class from its class list



// Set up DOM manipulation code flows for green and blue h2s to do the same thing




// Task 5: Font change
// Select the change font button


// In style.css, define a class called fancy where the font-family is set to "Lucida Handwriting", Lucida, cursive"
// Add an event listener such that when the font button is clicked, you toggle the fancy class on the body. It should alternate fonts when you click it!


