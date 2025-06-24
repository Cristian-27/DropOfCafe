export function EfectoBlur() {
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const background = document.getElementById('background');

  if (button1 && button2 && background) {
    const agregarBlur = () => background.classList.add('blur');
    const quitarBlur = () => background.classList.remove('blur');

    button1.addEventListener('mouseenter', agregarBlur);
    button1.addEventListener('mouseleave', quitarBlur);
    button2.addEventListener('mouseenter', agregarBlur);
    button2.addEventListener('mouseleave', quitarBlur);
  }
}