function mostrarPlanos() {
    var x = document.getElementById("meusPlanos");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
const fadeElements = document.querySelectorAll('.fade-element');

    // Cria um 'Observador' que verifica quando os elementos entram na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o elemento estiver visível na tela
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Adiciona a classe que faz aparecer
                observer.unobserve(entry.target); // Para de observar depois que já apareceu (anima só 1 vez)
            }
        });
    }, {
        threshold: 0.15 // O elemento começa a aparecer quando 15% dele está na tela
    });

    // Manda o observador olhar cada um dos elementos
    fadeElements.forEach(element => {
        observer.observe(element);
    });

function toggleFaq(elemento) {
    const pai = elemento.parentElement;
    
    // Opcional: Fecha todos os outros antes de abrir o novo
    document.querySelectorAll('.faq-modulo').forEach(item => {
        if (item !== pai) item.classList.remove('aberto');
    });

    pai.classList.toggle('aberto');
}