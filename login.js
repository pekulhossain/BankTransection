const submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', function(){
    const mailField = document.getElementById('user-mail');
    const eMail = mailField.value;

    const passwordField = document.getElementById('user-password');
    const Password = passwordField.value;

    if(eMail === 'pekulhossain@gmail.com'){
        window.location.href = 'bank.html';
    } else{
            alert('invalid User');
    }
});
    
