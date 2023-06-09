window.addEventListener('load', main);

function main() {
    const form = document.querySelector("form");
    const username = document.getElementById("name");
    const mail = document.getElementById("mail");
    const salary = document.getElementById("salary");
    const message = document.getElementById("message");

    const tbody = document.getElementById("tbody");

    let dataArr = [];
    let isValid = false;


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const mailValue = mail.value;
        const mailError = mail.nextElementSibling;

        const nameValue = username.value;
        const nameError = username.nextElementSibling;

        const salaryValue = salary.value;
        const salaryError = salary.nextElementSibling;

        const messageValue = message.value;
        const messageError = message.nextElementSibling;

        if (mailValue === '') {
            mail.classList.add('error');
            showError(mail, '* Requerido');
        }
        if (mailError && mailError.classList.contains('text-error')) {
            mailError.remove();
        }

        if (nameValue === '') {
            username.classList.add('error');
            showError(username, '* Requerido');
        }
        if (nameError && nameError.classList.contains('text-error')) {
            nameError.remove();
        }

        if (salaryValue === '') {
            salary.classList.add('error');
            showError(salary, '* Requerido');
        }
        if (salaryError && salaryError.classList.contains('text-error')) {
            salaryError.remove();
        }

        if (messageValue === '') {
            message.classList.add('error');
            showError(message, '* Requerido');
        }
        if (messageError && messageError.classList.contains('text-error')) {
            messageError.remove();
        }

        if (isValid) {
            dataArr.push({
                username: nameValue,
                mail: mailValue,
                salary: salaryValue,
                message: messageValue
            });

            let th = document.createElement('th');
            th.setAttribute('scope', 'row');
            th.innerText = dataArr.length;
            let td1 = document.createElement('td');
            td1.innerText = nameValue;
            let td2 = document.createElement('td');
            td2.innerText = salaryValue;
            let td3 = document.createElement('td');
            td3.innerText = Math.round(salaryValue / 484);
            let td4 = document.createElement('td');
            td4.innerText = Math.round(salaryValue / 526);

            let tr = document.createElement('tr');

            let appendedTr = tbody.appendChild(tr);

            appendedTr.appendChild(th);
            appendedTr.appendChild(td1);
            appendedTr.appendChild(td2);
            appendedTr.appendChild(td3);
            appendedTr.appendChild(td4);
            console.log("holaaaa")
            alert('enviado!');
        } else {
            alert('corrige!');
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