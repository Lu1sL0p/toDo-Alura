const btn = document.querySelector("[data-form-btn]");

/*Arrow functions o funciones anónimas */
const createTask = (e) => {
  e.preventDefault(); /*Evitar que se re carge la página con un Submit */
  
  const input = document.querySelector("[data-form-input]");
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  task.classList.add("card");
  const content = `
    <div>
      <i class="far fa-check-square icon"></i>
      <span class="task">${input.value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;

  input.value = "";
  task.innerHTML = content;
  list.appendChild(task);

  console.log(content);
};

btn.addEventListener("click", createTask);
