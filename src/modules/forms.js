const forms = () => {
    const forms = document.querySelectorAll('[name="user_form"]');

    forms.forEach(form => {
        const inptsForm = form.querySelectorAll('input');

        inptsForm.forEach(input => {
            switch (input.type) {
                case 'text':
                    input.addEventListener('blur', (e) => {
                        e.target.value = e.target.value.replace(/[^а-яА-Я\s\-]/g, "").replace(/^(\s*)|(\s*)$/g, '').replace(/\s+/g, ' ').replace(/\-+/g, '-').replace(/( |^)[а-я]/g, (x) => x.toUpperCase());
                    }, true);
                    break;
                case 'email':
                    input.addEventListener('blur', (e) => {
                        e.target.value = e.target.value.replace(/[^A-Za-z0-9\@\-\_\.\!\~\*\']/g, "").replace(/\-+/g, '-')
                    }, true);
                    break;
                case 'tel':
                    input.addEventListener('blur', (e) => {
                        e.target.value = e.target.value.replace(/[^0-9\(\)\-]/g, "").replace(/\-+/g, '-')
                    }, true);
                    break;
            }
        })
    });
}

export default forms