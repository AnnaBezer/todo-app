let addTaskButton = document.querySelector(`.add-task-button`);
let taskContainer = document.querySelector(`.task-container`);
let input = document.querySelector(`.task-input`);


let addtaskFunction = () => {
  let newTask= document.createElement(`li`);

  let p = document.createElement(`p`);
  p.innerText = input.value;
  console.log(input);

  let img= document.createElement(`img`);
  img.setAttribute(`src`, `./detele.svg`);

  img.addEventListener(`click`, () => {
    taskContainer.removeChild(newTask);
  });

  newTask.appendChild(p);
  newTask.appendChild(img);
  // newTask.innerHTML=`
  // <p> ${input.Value} <p>
  // <img src="./detele.svg">
  // `;
  taskContainer .appendChild(newTask);

};
addTaskButton.addEventListener(`click`, addtaskFunction);