const elementsBox = document.getElementById("elements");

const button = document.getElementById("add-element");
let id = 1;

button.addEventListener("click", () => {
elementsBox.insertAdjacentHTML('beforeend', `
<div class="element">
<h3>Element ${id}</h3>
<h4>is an element</h4>
<button>Delete</button>
</div>
`);
id++;

const elements = document.getElementsByClassName("element");

for (const element of elements) {
element.children[2].addEventListener("click", () => {
element.remove();
})
}
}) 