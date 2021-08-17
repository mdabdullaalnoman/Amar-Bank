// submit button click and go another html page
const submitBtn = document.getElementById('submit');


submitBtn.addEventListener('click', function () {
    const userEmail = document.getElementById('user-email').value;
    const userPass = document.getElementById('user-pass').value;
    
    // check valid user
    if(userEmail == 'noman.apparel.4003@gmail.com' && userPass == 'noman@#@#'){
        window.location.replace("http://127.0.0.1:5500/banking.html");
    }
    else{
        alert('password or email address is wrong')
    }

})