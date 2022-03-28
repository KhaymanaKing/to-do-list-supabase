export function renderTodo(todo) {
    // create a div and a p tag
    const div = document.createElement('div');
    const todoItem = document.createElement('p');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    if (todoItem.complete){
        todoItem.classList.add('complete');
    } else {
        todoItem.classList.add('incomplete');
    }
    // add the 'todo' css class no matter what
    todoItem.classList.add('todo');
    // put the todo's text into the p tag
    todoItem.textContent = todo.todo;
    // append stuff
    div.append(todoItem);
    // return the div
    return div;
}