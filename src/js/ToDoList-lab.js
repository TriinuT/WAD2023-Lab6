
let myNodelist = document.getElementsByTagName("LI");

//task 1
for (let li of myNodelist){
    console.log(li)
    const button = document.createElement('button')
    button.textContent = 'Delete'
    button.className = 'close'
    li.appendChild(button)
}

//task 2
let closeButtons = document.getElementsByClassName("close");
for (let close of closeButtons){
    close.addEventListener('click', function(event) {
        const li = event.target.parentElement
        li.style.display='none'
    })
}

//task 3 
let list = document.querySelector('ul');
list.addEventListener('click', function(event){
    const targetEI = event.target
    if (targetEI.tagName === 'LI'){
        targetEI.classList.toggle('checked')
    }
})

//task 4
function newTask() {
    const input = document.querySelector('#myImput')
    const text = input.value
    input.value = ''

    if (text===''){
        alert('palun sisesta tekst')
        return
    }
    const li = document.createElement('LI')
    li.textContent = text
    list.appendChild(li)
    const button = document.createElement('button')
    button.textContent = 'Delete'
    button.className = 'close'
    button.addEventListener('click', function(event){
        constli = event.target.paretElement
        li.style.display = 'none'
    })
    li.appendChild(button)
    
};

//et töötaks enteri vajutamisega ka 
const input = document.querySelector('#myInput')
input.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        newTask()
    }
})








