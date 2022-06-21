document.querySelector('#edit-form')
  .addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const mail = event.target.mail.value;
    const password = event.target.password.value;
    const passwordConfirm = event.target.passwordConfirm.value;

    // console.log(nameInput);
    // console.log(mailInput);
    const id = event.target.dataset.userid;

    const responce = await fetch(`/profile/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name,
        mail,
        password,
        passwordConfirm,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const html = await responce.text();
    document.querySelector('.stat').insertAdjacentHTML('afterend', html);
    document.querySelector('.stat').remove();
  });
