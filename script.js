let generatedPassword = '';

function newPassword () {
let word = '';
let letters = "abcdefghijklmnopqrstuvwxyz";
let signs = "!=?+$%*";
let allChars = letters + signs;
for (let i = 0; i < 10; i++){
    let randomChar = allChars[Math.floor(Math.random() * allChars.length)];
        word += randomChar;
}
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
    // Appeler la fonction et afficher le mot de passe dans le champ input
    generatedPassword = newPassword(); 
    document.getElementById('password-display').value = generatedPassword;
    copyButton();
});



document.getElementById('copy-password').addEventListener('click', function() {
    copyText();
    document.getElementById('copy-password').style.visibility='hidden';
})