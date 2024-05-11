let btn=document.querySelector('reset');
let inputs=document.querySelectorAll('input');
 btn=document.addEventListener('click',() =>{
     inputs.forEach(input => input.value='');
 })