function toggleCard(card) {
    // Fecha todos os outros
    document.querySelectorAll('.presente-card').forEach(c => {
        if(c !== card) c.classList.remove('ativo');
    });
    // Abre/fecha o clicado
    card.classList.toggle('ativo');
}