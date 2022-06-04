window.addEventListener('DOMContentLoaded', () => {
    const page = document.querySelectorAll(
      ".chat_app__illustration__mobile__inner__message > *"
    );

   page.forEach((el, i) => {
       el.style.transform = 'translateY(0)'
       el.style.transition = `a ${i}s`;
       el.style.opacity = 1;
   })
})