namespace ToDo {

window.addEventListener("load", () =>{
    const form = <HTMLFormElement>document.querySelector("#new-task-form");
    const inputTask = <HTMLInputElement>document.querySelector("#new-task-input");
    const inputName = <HTMLInputElement>document.querySelector("#new-name-input");
    const inputDate = <HTMLInputElement>document.querySelector("#new-date-input");
    const inputComment = <HTMLInputElement>document.querySelector("#new-comment-input");
    const list_el = document.querySelector("#tasks");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("submit form");
        const task = inputTask.value;
        const name = inputName.value;
        const date = inputDate.value;
        const comment = inputComment.value;
        if (!task) {
           alert("Please fill out task");
           return; 
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');
        task_content_el.innerText = task;
        task_el.appendChild(task_content_el);
        
        const task_name_el = document.createElement('div');
		task_content_el.classList.add('name');
        task_name_el.innerText = name;
        task_el.appendChild(task_name_el);

        const task_date_el = document.createElement('div');
		task_content_el.classList.add('date');
        task_date_el.innerText = date;
        task_el.appendChild(task_date_el);
        
        const task_comment_el = document.createElement('div');
		task_content_el.classList.add('comment');
        task_comment_el.innerText = comment;
        task_el.appendChild(task_comment_el);
    

        const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');

        const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el)

        task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
    })
})



























}