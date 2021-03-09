'use strict';

let form=document.getElementById('carInfo');
let divContainer=document.getElementById('tableContainer');
let table=document.createElement('table');
// let trHead=document.createElement('tr')
// table.appendChild(trHead);
// let th1=document.createElement('th');
// let th2=document.createElement('th');
// let th3=document.createElement('th');
// trHead.append(th1.th2,th3)
// th1.textContent="Car Type"
// th2.textContent="Renting Days"
// th3.textcontent="price"

divContainer.appendChild(table);
let td_delete;
let arrayOfObjects=[];


function Cars(type,days){
    this.type=type;
    this.days=days;
    arrayOfObjects.push(this);
}


function getRndInteger() {
    return Math.floor(Math.random() * (2000 - 1000) ) + 1000;
  }

  function saveResultsLocalStorage(a,b){
      new Cars(a,b)
      localStorage.setItem('arrayOfCars',JSON.stringify(arrayOfObjects))
  }

form.addEventListener('submit', displayResults)

function displayResults(event){
    event.preventDefault();
    let carSelected=event.target.cars.value;
    let numberOfRentedDays=event.target.days.value;

    // render(carSelected,numberOfRentedDays);
    saveResultsLocalStorage(carSelected,numberOfRentedDays);
    let gettingFromStorage=JSON.parse(localStorage.getItem('arrayOfCars'))
    table.innerHTML=''
    for (let i = 0; i < gettingFromStorage.length; i++) {
        render(gettingFromStorage[i].type, gettingFromStorage[i].days)
        
    }
}


function render(a,b){
let tr=document.createElement('tr');
table.appendChild(tr);
let td_type=document.createElement('td');
let td_days=document.createElement('td');
let td_price=document.createElement('td');
let td_delete=document.createElement('td');
tr.append(td_type,td_days,td_price,td_delete);
td_type.textContent=a;
td_days.textContent=b;
td_price.textContent=b*getRndInteger();
td_delete.textContent="X"
td_delete.setAttribute('id','tdDelete')

td_delete.addEventListener('click', deletingSpecifcRow)

function deletingSpecifcRow(event){
    this.parentElement.remove();
    console.log('mmmmmm')


}
}