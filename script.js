// Fonction pour obtenir un caractère aléatoire d'une chaîne
function getRandomChar(characters) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return characters[array[0] % characters.length];
}

// Fonction de génération d'un mot de passe sécurisé
function newPassword(length = 12) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const signs = "!=?+$%*";
    const numbers = "0123456789";
    const allChars = letters + capitalLetters + signs + numbers;

    let passwordArray = [
        getRandomChar(letters),
        getRandomChar(capitalLetters),
        getRandomChar(signs),
        getRandomChar(numbers)
    ];

    for (let i = passwordArray.length; i < length; i++) {
        passwordArray.push(getRandomChar(allChars));
    }

    // Mélanger le mot de passe
    return passwordArray.sort(() => Math.random() - 0.5).join('');
}

// Fonction pour copier le mot de passe généré
async function copyText(password) {
    try {
        await navigator.clipboard.writeText(password);
        alert("Mot de passe copié !");
    } catch (err) {
        alert("Échec de la copie !");
    }
}

// Ecoute du click pour déclencher la génération du mot de passe
document.getElementById('generate-btn').addEventListener('click', function() {
    generatedPassword = newPassword(); 
    document.getElementById('password-display').value = generatedPassword;
    document.getElementById('copy-password').style.visibility='visible';
    copyButton();
});


// Écoute du clic pour copier le mot de passe généré
document.getElementById('copy-password').addEventListener('click', function() {
    const password = document.getElementById('password-display').value;
    if (password) {
        copyText(password);
        document.getElementById('copy-password').style.visibility = 'hidden';
        document.getElementById('password-display').value = '';
    }
});