window.addEventListener('load', main);

function main() {
    const form = document.querySelector("form");
    const username = document.getElementById("name");
    const mail = document.getElementById("mail");
    const salary = document.getElementById("salary");
    const message = document.getElementById("message");

    let dataArr = [];
    let isValid = false;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const mailValue = mail.value;
        const nameValue = username.value;
        const salaryValue = salary.value;
        const messageValue = message.value;

        if (mailValue === '') {
            mail.classList.add('error');
            showError(mail, '* Requerido');
        }

        if (nameValue === '') {
            username.classList.add('error');
            showError(username, '* Requerido');
        }

        if (salaryValue === '') {
            salary.classList.add('error');
            showError(salary, '* Requerido');
        }

        if (messageValue === '') {
            message.classList.add('error');
            showError(message, '* Requerido');
        }

        if (isValid) {
            alert('enviado!');
            dataArr.push({
                username: nameValue,
                mail: mailValue,
                salary: salaryValue,
                message: messageValue
            });
        } else {
            alert('corrige!')
        }
    });


    mail.addEventListener('input', (e) => {
        const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const mailValue = mail.value;

        const existingError = mail.nextElementSibling;
        if (existingError && existingError.classList.contains('text-error')) {
            existingError.remove();
        }

        if (mailValue === '') {
            mail.classList.add('error');
            showError(mail, '* Requerido');
        } else if (!mailRegex.test(mailValue)) {
            mail.classList.add('error');
            showError(mail, '* Formato inválido');
        } else {
            mail.classList.remove('error');
            hideError(mail);
        }
    });

    username.addEventListener('input', (e) => {
        const nameRegex = /^[a-z ,.'-]+$/i;
        const nameValue = username.value;

        const existingError = username.nextElementSibling;
        if (existingError && existingError.classList.contains('text-error')) {
            existingError.remove();
        }

        if (nameValue === '') {
            username.classList.add('error');
            showError(username, '* Requerido');
        } else if (!nameRegex.test(nameValue)) {
            username.classList.add('error');
            showError(username, '* Formato inválido');
        } else {
            username.classList.remove('error');
            hideError(username)
        }
    });

    salary.addEventListener('input', (e) => {
        const salaryValue = salary.value;

        const existingError = salary.nextElementSibling;
        if (existingError && existingError.classList.contains('text-error')) {
            existingError.remove();
        }

        if (isNaN(salaryValue)) {
            salary.classList.add('error');
            showError(salary, 'Formato inválido');
        } else if (salaryValue < 120000) {
            salary.classList.add('error');
            showError(salary, 'Salario muy bajo');
        } else {
            salary.classList.remove('error');
            hideError(salary);
        }
    });

    message.addEventListener('input', (e) => {
        const messageValue = message.value;

        const existingError = message.nextElementSibling;
        if (existingError && existingError.classList.contains('text-error')) {
            existingError.remove();
        }

        if (messageValue === '') {
            message.classList.add('error');
            showError(message, '* Requerido');
        } else if (messageValue.length < 20) {
            message.classList.add('error');
            showError(message, '* Pocos carácteres');
        } else {
            message.classList.remove('error');
            hideError(message);
        }
    });

    function showError(element, errorMessage) {
        const error = document.createElement('p');
        error.classList.add('text-error');
        error.innerText = errorMessage;
        element.insertAdjacentElement('afterend', error);
        isValid = false;
    }

    function hideError(element) {
        const error = element.nextElementSibling;
        if (error && error.classList.contains('text-error')) {
            error.remove();
        };
        isValid = true;
    }
}