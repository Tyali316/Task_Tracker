alert("Welcome to Tyali's Task Tracker. Click okay, to begin.");

window.addEventListener('load', function () {
        const form = document.querySelector("#task-form");
        const input = document.querySelector("#new-task-input");
        const list_element = document.querySelector("#task-list");

        form.addEventListener('submit', function (f) {
                f.preventDefault();

                const task = input.value;

                if (!task) {
                    alert("Please enter a task.");
                    return;
                    //Adding the data validation to alert viewers, that they haven't entered any data./
                }

              const task_element = document.createElement("div");
                task_element.classList.add("task");

                const task_content_element = document.createElement("div");
                task_content_element.classList.add("content");

                task_element.appendChild(task_content_element);

                const task_input_element = document.createElement("input");
                task_input_element.classList.add("text");
                task_input_element.type = "text";
                task_input_element.value = task;
                task_input_element.setAttribute("readonly", "readonly");

                task_content_element.appendChild(task_input_element);

                // time to add the edit and delete actions to the task so the viewers can add,edit, or delete task from app.//
                const task_actions_element = document.createElement("div");
                task_actions_element.classList.add("actions");
                
                const task_edit_element = document.createElement("button");
                task_edit_element.classList.add("edit");
                task_edit_element.innerHTML = "Edit";

                const task_delete_element = document.createElement("button");
                task_delete_element.classList.add("delete");
                task_delete_element.innerHTML = "Delete";
                
                task_actions_element.appendChild(task_edit_element);
                task_actions_element.appendChild(task_delete_element);
                
                task_element.appendChild(task_actions_element);
                
                list_element.appendChild(task_element);
                
                input.value = "";

                task_edit_element.addEventListener('click', function () {
                    if (task_edit_element.innerText.toLowerCase() == "edit") {
                        task_input_element.removeAttribute("readonly");
                        task_input_element.focus();
                        task_edit_element.innerText = "Save";
                    } else {
                        task_input_element.setAttribute("readonly", "readonly");
                        task_edit_element.innerText = "Edit";
                    }
                });
                
                task_delete_element.addEventListener('click', function () {
                    list_element.removeChild(task_element);
                });
            });
    });