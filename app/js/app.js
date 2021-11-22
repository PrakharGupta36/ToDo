let todoWrapper = document.getElementById("todo-wrapper");
let input = document.getElementById("input");
let row = 0;
let tasksLeft = document.getElementById("tasksleft");
let todoInfo = document.getElementById("todo-info");
let clear = document.getElementById("clear");
let completed = document.getElementById("completed");

tasksLeft.textContent = "0 Task(s) left";
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13 && input.value.length > 0) {
    tasksLeft.textContent = `${todoWrapper.childElementCount + 1} task(s) left`;

    let task = document.createElement("div");
    task.setAttribute("id", `task${row}`);
    task.setAttribute("class", `task`);

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox");

    let taskName = document.createElement("p");
    taskName.textContent = input.value;

    let removeButton = document.createElement("button");
    removeButton.innerText = "x";
    removeButton.setAttribute("class", "remove");

    todoWrapper.appendChild(task);
    task.appendChild(checkbox);
    task.appendChild(taskName);
    task.appendChild(removeButton);

    function registerClickHandler(e) {
      // Implement the click handler here for button of class 'remove'
      let target = e.target;
      target.parentNode.parentNode.removeChild(target.parentNode);

      tasksLeft.textContent = `${todoWrapper.childElementCount} task(s) left`;
    }

    let removeBtn = document.querySelectorAll(".remove");
    var checkBtn = document.querySelectorAll(".checkbox");

    for (let i = 0; i < removeBtn.length; i++) {
      removeBtn[i].addEventListener("click", registerClickHandler, false);
    }

    let leftAfterCheck;

    checkBtn.forEach((e) => {
      clear.onclick = () => {
        if (e.parentElement.className === "task checked") {
          console.log(e.parentElement);
        } else {
          console.log("Fuck You");
        }
      };
      e.onclick = () => {
        if (e.checked === true) {
          console.log(e.parentElement);
          e.parentElement.style.backgroundColor =
            "var(--very-dark-grayish-blue)";
          completed.appendChild(e.parentElement);
          e.parentElement.setAttribute("class", "task checked");
        } else {
          e.parentElement.setAttribute("class", "task");
          todoWrapper.appendChild(e.parentElement);
          e.parentElement.style.backgroundColor =
            "var(--very-dark-desaturated-blue)";
        }
      };
    });

    row++;

    input.value = "";
  }
});
