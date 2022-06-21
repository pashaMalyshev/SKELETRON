document.querySelector('.cards')
  .addEventListener('click', async (event) => {
    if (event.target.classList.contains('delete')) {
      event.preventDefault();
      const { href } = event.target;
      console.log(href);
      const responce = await fetch(href, {
        method: 'DELETE',
      });
      await responce.text();
      event.target.closest('.div-card').remove();
    }
  });
