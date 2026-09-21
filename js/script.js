const links = document.querySelectorAll('.topbar nav a');
const sections = [...document.querySelectorAll('main section[id]')];
const setActive = () => {
  const y = window.scrollY + 100;
  let current = sections[0]?.id;
  sections.forEach(section => { if (y >= section.offsetTop) current = section.id; });
  links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
};
window.addEventListener('scroll', setActive, {passive:true});
setActive();
