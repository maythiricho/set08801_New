function addDestination() {
    let input = document.getElementById("new-destination");
    let list = document.getElementById("bucket-list");

    if (input.value.trim() !== "") {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${input.value} <button onclick="removeItem(this)">Remove</button>`;
        list.appendChild(listItem);
        input.value = "";
    }
}

function removeItem(element) {
    element.parentElement.remove();
}
