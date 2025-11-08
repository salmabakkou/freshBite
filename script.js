function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display='flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display='none'
}



//contact



const form = document.querySelector('.formulaire');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const message = document.getElementById('message');

// pour valider l'email
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

//pour afficher le message d'erreur
function showError(input, message) {
    let errorElem = input.nextElementSibling;
    
    // erreur
    if (!errorElem || !errorElem.classList.contains('error-msg')) {
        errorElem = document.createElement('div');
        errorElem.classList.add('error-msg');
        errorElem.style.color = 'red';
        errorElem.style.fontSize = '14px';
        errorElem.style.marginTop = '4px';
        input.parentNode.insertBefore(errorElem, input.nextSibling);
    }

    errorElem.textContent = message;
}

//pour supprimer le message d'erreur
function clearError(input) {
    const errorElem = input.nextElementSibling;
    if (errorElem && errorElem.classList.contains('error-msg')) {
        errorElem.textContent = '';
    }
}

// submit
form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    let valid = true;

    // Validation nom
    if (nom.value.trim() === '') {
        showError(nom, 'Veuillez entrer votre nom.');
        valid = false;
    } else {
        clearError(nom);
    }

    // Validation email
    if (email.value.trim() === '') {
        showError(email, 'Veuillez entrer votre email.');
        valid = false;
    } else if (!isValidEmail(email.value.trim())) {
        showError(email, 'Veuillez entrer un email valide.');
        valid = false;
    } else {
        clearError(email);
    }

    // Validation message
    if (message.value.trim() === '') {
        showError(message, 'Veuillez entrer votre message.');
        valid = false;
    } else {
        clearError(message);
    }

    // message de validation
    if (valid) {
        alert('Merci ! Votre message a été envoyé avec succès.');
        form.reset(); 
    }
});
