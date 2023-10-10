const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с Вами свяжется!';

    const validate = (list) => {
        let success = true;

        list.forEach(input => {
            switch (input.name) {
                case 'user_name':
                    if (!/[а-яА-Я\s]/.test(input.value)) {
                        success = false
                    }
                    break;
                case 'user_message':
                    if (!/[а-яА-Я0-9\.\,\s]/.test(input.value)) {
                        success = false
                    }
                    break;
                case 'user_phone':
                    if (!/[0-9\(\)\-\+]/.test(input.value)) {
                        success = false
                    }
                    break;
            }
        });

        return success
    };

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                // "Content-Type": "multipart/form-data"
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((value, key) => {
            formBody[key] = value
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText

                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            alert('Данные не валидны!!!');
        }
    };

    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста!!!')
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            submitForm();
        })
    } catch (error) {
        console.log(error.message);
    };
}

export default sendForm