
// get access to submit button
const newTodoButton = document.getElementById('newTodoButton')

//need event listener for clicking the button
newTodoButton.addEventListener('click',()=>{
    const newTodoText = getNewTodo()
    postNewTodo(newTodoText)
})

// button needs to get new to do text
function getNewTodo(){
    const thisTodo = document.querySelector('#inputToDoField').value
    return thisTodo
}

// button needs to post that todo text in the todo box.
function postNewTodo(thisText){
    const div = document.createElement('div')
    const p = document.createElement('p')
    const img = document.createElement('img')
    p.innerText = thisText
    p.className = "todoTextStyle"
    img.src = "./static/totoro.png"
    img.className = "totoroImg"
    div.className = "todoBoxStyle"
    div.append(img,p)
    document.getElementById('activeTodos').append(div)
    div.whereAmI = 0
    div.addEventListener('click', () => {
        if (div.whereAmI === 0){
            div.remove()
            img.src = "./static/doneToro.png"
            document.getElementById('completedTodos').append(div)
            div.whereAmI = 1
        }else{
            div.remove()
        }
    })
}