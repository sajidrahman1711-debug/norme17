
window.onload = function(){

const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth()+1).padStart(2,'0');
const day = String(today.getDate()).padStart(2,'0');

document.getElementById('date').min = `${year}-${month}-${day}`;

};

function showError(message){

const existing = document.querySelector('.apple-error');

if(existing){
existing.remove();
}

const error = document.createElement('div');

error.className = 'apple-error';

error.innerHTML = `
<div class="apple-error-box">
<div class="apple-error-dot"></div>
<p>${message}</p>
</div>
`;

document.body.appendChild(error);

setTimeout(()=>{
error.classList.add('show-error');
},10);

setTimeout(()=>{
error.classList.remove('show-error');

setTimeout(()=>{
error.remove();
},300);

},2500);

}

function nextPage(page){

if(page===2){

const email = document.getElementById('email').value;

if(!email.includes('@')){

showError('Please enter valid information.');

return;

}

}

document.querySelectorAll('.page').forEach(p=>{
p.classList.remove('active-page');
});

document.getElementById('page'+page).classList.add('active-page');

document.querySelectorAll('.tab-btn').forEach(btn=>{
btn.classList.remove('active-tab');
});

document.getElementById('s'+page).classList.add('active-tab');

if(page===3){

document.getElementById('confirmName').innerText =
document.getElementById('name').value;

document.getElementById('confirmEmail').innerText =
document.getElementById('email').value;

document.getElementById('confirmPhone').innerText =
document.getElementById('phone').value;

document.getElementById('confirmService').innerText =
document.getElementById('service').value;

document.getElementById('confirmDate').innerText =
document.getElementById('date').value;

}

}

function prevPage(page){

document.querySelectorAll('.page').forEach(p=>{
p.classList.remove('active-page');
});

document.getElementById('page'+page).classList.add('active-page');

document.querySelectorAll('.tab-btn').forEach(btn=>{
btn.classList.remove('active-tab');
});

document.getElementById('s'+page).classList.add('active-tab');

}

function submitBooking(){

const bookingBox = document.querySelector('.booking-box');

bookingBox.innerHTML = `

<div class="success-ui">

<button class="success-button">
Booking Submitted
</button>

<p>
Your consultation request has been sent successfully.
</p>

</div>

`;

setTimeout(()=>{

location.reload();

},1500);

}
