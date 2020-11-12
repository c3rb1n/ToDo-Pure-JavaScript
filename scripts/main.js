const onAddClick = () => {
	const toDoTasks = document.getElementById("toDo__tasks");

	const input = document.getElementById("toDo__input");
	const inputValue = input.value;

	if (inputValue) {
		const newTask = document.createElement("div");
		newTask.className = "toDo__task";

		const newTaskButton = document.createElement("button");
		newTaskButton.className = "toDo__remove";
		newTaskButton.innerHTML = "Remove";
		newTaskButton.addEventListener("click", onRemoveClick);

		const newTaskText = document.createElement("span");
		newTaskText.className = "toDo__task-text";
		newTaskText.innerHTML = inputValue;

		newTask.append(newTaskText);
		newTask.append(newTaskButton);
		toDoTasks.append(newTask);

		input.value = "";
	}
};

const onRemoveClick = function () {
	this.parentElement.remove();
}

const button = document.getElementById("toDo__add");
button.addEventListener("click", onAddClick);