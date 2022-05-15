console.log('Welcome')

const contactForm = document.querySelector('.contact-form');

let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
let address = document.getElementById('address');
let city = document.getElementById('city');
let country = document.getElementById('country');
let eMail = document.getElementById('eMail');
let question = document.getElementById('question');


contactForm.addEventListener('submit' , (e) => {

    e.preventDefault();
    console.log('you submited')

    let formData = {
        fName: fName.value,
        lName: lName.value,
        address: address.value,
        city: city.value,
        country: country.value,
        eMail: eMail.value,
        question: question.value
    }


    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader ('content-type', 'application/json');
    xhr.onload = function(){

        console.log(xhr.responseText);

        if (xhr.responseText == 'success' ){

            alert('Email sent');
            fName.value = '';
            lName.value = '';
            address.value = '';
            city.value = '';
            country.value = '';
            eMail.value = '';
            question.value = '';
        } else{
            alert('You need to try again!')
        }
    }
    xhr.send(JSON.stringify(formData));



    console.log(formData);
})