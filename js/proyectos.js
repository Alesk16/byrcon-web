// Filtro de proyectos por tipo
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('#projectGrid .project-card');
const emptyMsg = document.getElementById('projectEmpty');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const filter = btn.dataset.filter;
    let visibleCount = 0;

    projectCards.forEach(card => {
      const match = filter === 'all' || card.dataset.type === filter;
      card.style.display = match ? '' : 'none';
      if (match) visibleCount++;
    });

    if (emptyMsg) emptyMsg.hidden = visibleCount > 0;
  });
});
