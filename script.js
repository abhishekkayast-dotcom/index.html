fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    document.getElementById("facts").innerText = data.text;
});
function addtask(){
    let title = document.getElementById('taskinput').value;
    let div = document.createElement('div')

    div.innerHTML =  `<div class="task">
    <h4 id = "task-title">${title}</h4>
    <button onclick="deletetask(this)" id="deletebtn">Delete</button>
</div>`

document.getElementById('sidebar').appendChild(div)
document.getElementById('taskinput').value = ""

}
function deletetask(button){
    button.parentElement.remove()
}