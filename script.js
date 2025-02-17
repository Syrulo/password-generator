let generatedPassword = '';

function newPassword () {
    let word = '';
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let signs = "!=?+$%*";
    let allChars = letters + capitalLetters + signs;

    let randomLetter = letters[Math.floor(Math.random() * letters.length)];
    let randomCapital = capitalLetters[Math.floor(Math.random() * capitalLetters.length)];
    let randomSign = signs[Math.floor(Math.random() * signs.length)];

    word += randomLetter;
    word += randomCapital;
    word += randomSign;

    for (let i = 0; i < 10; i++){
        let randomChar = allChars[Math.floor(Math.random() * allChars.length)];
            word += randomChar;
    }

    word = word.split('').sort(() => Math.random() - 0.5).join('');

    return word;
}

function copyText() {
    navigator.clipboard.writeText(generatedPassword).then(function() {
        alert("Mot de passe copié");
    })
}

function copyButton() {
    if (generatedPassword !== '') {
        document.getElementById('copy-password').style.visibility='visible';
    }
}

document.getElementById('generate-btn').addEventListener('click', function() {
    generatedPassword = newPassword(); 
    document.getElementById('password-display').value = generatedPassword;
    copyButton();
});



document.getElementById('copy-password').addEventListener('click', function() {
    copyText();
    document.getElementById('copy-password').style.visibility='hidden';
    document.getElementById('password-display').value = '';
})