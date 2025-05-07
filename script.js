function filtrarProjetos(categoria) {
  const projetos = document.querySelectorAll('#projetos > div');
  projetos.forEach(projeto => {
    if (categoria === 'todos' || projeto.classList.contains(categoria)) {
      projeto.style.display = 'block';
    } else {
      projeto.style.display = 'none';
    }
  });
}
