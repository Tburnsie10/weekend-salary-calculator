console.log(document.querySelector('.container'))

function submitForm(event) {

    event.preventDefault();
    // event.target is the form, with querySelector('input') we are getting all inputs inside the form.
    let inputs = event.target.querySelectorAll('input');
    
    let first = inputs[0].value
    let last = inputs[1].value
    let idNum = inputs[2].value
    let title = inputs[3].value
    let annualSal = inputs[4].value

    //assigning all the inputs a new variable.
    

    let tBody = document.querySelector('#tbody')

    tBody.innerHTML +=  `
    <tr>
        <td>${first}</td>
        <td>${last}</td>
        <td>${idNum}</td>
        <td>${title}</td>
        <td id="salary">${annualSal}</td>
        <td><button onclick="deleteRow(event)" >delete</button></td>
    </tr> 
`
    //string interpolations so when we call the tBody variable the items we type into the inputs will be applied to our rows.

    updateCost();
}  

function deleteRow(event) {
    
    event.target.parentElement.parentElement.remove()

    updateCost();
}


function updateCost() {
    let sal = document.querySelectorAll('#salary')
    let total = 0;
    for(let item of sal) {
        total += Number(item.innerHTML) 
    }

    document.querySelector('#cost').innerHTML = '$' + (total / 12).toFixed(2);

    if(total / 12 > 20000) {
        document.querySelector('#cost').style = 'background-color: red;'
    } else {
        document.querySelector('#cost').style = 'background-color: lightgreen;'
    }
    
}




