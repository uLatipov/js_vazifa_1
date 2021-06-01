const input = document.querySelector('.input')
const form = document.querySelector('.form')
const button = document.querySelector('.button')
const tbody = document.querySelector('.tbody')
let myCount = 0;

form.addEventListener('submit', event =>{
    event.preventDefault()
    myCount++
    let array  = []
    let date = Date();
    const now1 = Date.now()
    for(let count = 1; count <= input.value; count++){
        array.push(count)
    }
    const now2 = Date.now()
    const time = now2 - now1
    console.log(time)
    const trElement = document.createElement('tr')
    const thElement = document.createElement('th')
    const tdElement = document.createElement('td')
    thElement.setAttribute('scope', 'row')
    thElement.textContent = myCount;
    tdElement.textContent = `${time}ms`;
    trElement.appendChild(thElement)
    trElement.appendChild(tdElement)
    
    const DeleteButton= document.createElement('button')
    DeleteButton.setAttribute('type', 'button')
    DeleteButton.textContent= 'Remove'
    DeleteButton.classList.add('btn','btn-danger')
    DeleteButton.addEventListener('click', event =>{
        trElement.remove()
    })
    const newTdElement = document.createElement('td');
    newTdElement.appendChild(DeleteButton)
    trElement.appendChild(newTdElement)
    tbody.appendChild(trElement)
    form.reset()
})