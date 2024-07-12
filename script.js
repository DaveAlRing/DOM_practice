const container = document.querySelector("#container");

//New div element
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

//new p element
const newParagraph = document.createElement("p");
newParagraph.classList.add("newParagraph");
newParagraph.textContent = "Hey I'm Red!";
newParagraph.style.color = "red";

container.appendChild(newParagraph);

//new h3 element
const newH3 = document.createElement("h3");
newH3.classList.add("newH3");
newH3.textContent = "I'm a blue h3";
newH3.style.color = "blue";

container.appendChild(newH3);

//Another div
const newDiv = document.createElement("div");
newDiv.classList.add("newDiv");
newDiv.setAttribute("style", "border-style: solid; border-color: black; background-color: pink");

container.appendChild(newDiv);

//nested h1 in newDiv
const nestedH1 = document.createElement("h1");
nestedH1.classList.add("nestedH1");
nestedH1.textContent = "I'm in a div";

newDiv.appendChild(nestedH1);

//nested p in newDiv
const nestedP = document.createElement("p");
nestedP.classList.add("nestedP");
nestedP.textContent = "ME TOO";

newDiv.appendChild(nestedP);

//button 2
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

//button 3
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    alert("Hello World");
});