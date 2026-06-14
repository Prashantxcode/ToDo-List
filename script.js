document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {

  const taskText = taskInput.value.trim();

  if(taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
      <div class="left">
          <input type="checkbox" class="checkbox">
          <span>${taskText}</span>
      </div>

      <button class="delete-btn">Delete</button>
  `;

  const checkbox = li.querySelector(".checkbox");
  const text = li.querySelector("span");

  checkbox.addEventListener("change", function() {

      if(this.checked){
          text.classList.add("completed");
      }
      else{
          text.classList.remove("completed");
      }

  });

  const deleteBtn = li.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", function() {
      li.remove();
  });

  taskList.appendChild(li);

  taskInput.value = "";
}
});
