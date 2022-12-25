    const forms = document.querySelectorAll('form');
    const statusMesseges = {
        srcStatus: 'img/spinner.svg',
        success: 'Успех! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так!',
    };
    forms.forEach(form => bindPostData(form));

    const postData = async (url, data) => {
        const rezsult = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: data,
        });
        return await rezsult.json();
    };

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMesseg = document.createElement('img');
            statusMesseg.src = statusMesseges.srcStatus;
            statusMesseg.classList.add('status');
            //form.append(statusMesseg);
            form.insertAdjacentElement('afterend', statusMesseg);
            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');
            // request.setRequestHeader('Content-Type', 'application/json');
            const formData = new FormData(form);
            // const object = {};
            // formData.forEach((key, value) => object[key] = value);
            // const json = JSON.stringify(object);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            postData('http://localhost:3000/requests', json).then(() => { 
                setAnswerClient(statusMesseges.success);
                statusMesseg.remove();
                }).catch(() => {
                setAnswerClient(statusMesseges.failure);
                }).finally(() => {
                form.reset();
                });
           //request.send(json);
            //request.addEventListener('load', () => {
                //if(request.status === 200) {
                    //statusMesseg.textContent = statusMesseges.success;
                    //form.reset();
                   // setAnswerClient(statusMesseges.success);
                    //setTimeout(() => {
                    //statusMesseg.remove();
                    //}, 4000);
               // }else {
                    //statusMesseg.textContent = statusMesseges.failure;
                    //form.reset();
                    //setAnswerClient(statusMesseges.failure);
                    //setTimeout(() => {
                    //statusMesseg.remove();
                    //}, 4000);
                //}
            //});
        });
    }
    function setAnswerClient(messege) {
        const modalDialog = document.querySelector('.modal__dialog');
        modalDialog.classList.add('hide');
        addShow();
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog', 'fade');
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div data-close class="modal__close">&times;</div>
            <div class="modal__title">${messege}</div>
        </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            modalDialog.classList.add('show', 'fade');
            modalDialog.classList.remove('hide');
            modal.classList.remove('show');
            document.body.classList.remove('hidden');
            modal.classList.add('hide');
        }, 4000);
    }
//?? fetch('https://jsonplaceholder.typicode.com/posts', {
    //?? method: 'POST',
    //?? body: JSON.stringify({name: 'Alex'}),
    //?? headers: {
        //?? 'Content-type': 'application/json',
        //?? }
    //?? }).then(response => response.text()).then(text => console.log(text));

    fetch('http://localhost:3000/menu').then(response => response.json()).then(json => console.log(json));