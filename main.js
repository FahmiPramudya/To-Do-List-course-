const thelist = document.getElementById('list')

function onFormSubmit(e){
    e.preventDefault()
    const inputvalue = e.target.children[0].value
    // console.log(inputvalue)  
    thelist.appendChild(createListElement(inputvalue))
}

function deleteListItem(e) {
    const parent = e.target.parentElement
    thelist.removeChild(parent)
}

function createListElement(inputvalue){
    const item = document.createElement('div')
    item.innerHTML = `
    <div>
        <input type="checkbox">
        <span>${inputvalue}</span>
    </div>
    <button onclick="deleteListItem(event)">X</button>
    `
    item.setAttribute('class', 'item-list')
    return item
}