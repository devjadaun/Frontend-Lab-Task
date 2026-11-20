
function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    // Checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.onchange = function() {
        li.classList.toggle("completed");
    };

    // Task text
    let span = document.createElement("span");
    span.innerText = task;

    // Up button
    let up = document.createElement("button");
    up.innerText = "Up";

    up.onclick = function() {
        let previous = li.previousElementSibling;

        if (previous) {
            li.parentNode.insertBefore(li, previous);
        }
    };

    // Down button
    let down = document.createElement("button");
    down.innerText = "Down";

    down.onclick = function() {
        let next = li.nextElementSibling;

        if (next) {
            li.parentNode.insertBefore(next, li);
        }
    };

    // Delete button
    let del = document.createElement("button");
    del.innerText = "Delete";

    del.onclick = function() {
        li.remove();
    };

    li.append(checkbox, span, up, down, del);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
