'use strict'

const todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})


document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.text.value.trim()
    if(text.length > 0) {
        todos.push({ 
            id: uuidv4(),
            text: text, 
            completed: false 
        });

    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
    }
})


document.querySelector('#hide-box').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text)
}