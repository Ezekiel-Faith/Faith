const input = document.querySelector('.input-mail');
var hold;
// const mssg = document.querySelector('message');

document.querySelector('.error-img').style.display = 'none';
document.querySelector('.error-text').style.display = 'none'
;
document.querySelector('.submit').addEventListener('click', function (e) {
    // alert('btn clicked');
    if (input.value === '') {
        document.querySelector('.error-img').style.display = 'block';
        document.querySelector('.error-text').style.display = 'block';
    } else {
        document.querySelector('.error-img').innerHTML = 'Success!!';
        // clear list
        input.value = '';
    }
    // console.log('Please provide a valid email');
});

// function onSubmit(){
//     alert('bttn clicked');
//     // if (input == '') {
//     //     document.querySelector('#error-mssg').src = 'error' + '.svg';
//     //     document.querySelector('#error-text').innerHTML = 'Please provide a valid email';
//     // }
// }