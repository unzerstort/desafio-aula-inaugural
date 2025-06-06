const form = document.getElementById('groupForm');
const nameInputs = [];

document.querySelectorAll('input[name^="nome"]').forEach(input => {
    nameInputs.push(input);
});

const messageTextarea = document.querySelector('textarea[name="historia"]');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const names = [];
    nameInputs.forEach(input => {
        names.push(input.value);
    });

    const message = messageTextarea.value;

    const data = {
        names: names,
        message: message
    };

    try {
        const response = await fetch('https://fsdt-contact.onrender.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Enviado com sucesso!');
            nameInputs.forEach(input => input.value = '');
            messageTextarea.value = '';
        } else {
            alert('Ocorreu um erro ao enviar.');
        }
    } catch (error) {
        alert('Ocorreu um erro ao enviar.');
    }
});