//IIEF
import checkComplete from "./Components/checkComplete.js";
import deleteIcon from "./Components/deleteIcon.js";

(() => {
  const btn = document.querySelector("[data-form-btn]");

  /*Arrow functions o funciones anónimas */
  const createTask = (e) => {
    e.preventDefault(); /*Evitar que se re carge la página con un Submit */

    const input = document.querySelector("[data-form-input]");
    const list = document.querySelector("[data-list]");

    const task = document.createElement("li");
    task.classList.add("card");

    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());

    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = input.value;

    taskContent.appendChild(titleTask);

    input.value = "";
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
  };

  btn.addEventListener("click", createTask);
})() /*Llamando a la función*/;
