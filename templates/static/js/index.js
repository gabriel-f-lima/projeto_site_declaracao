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

// Banco de dados de textos para o Modal
const conteudosFooter = {
    'sobre': {
        titulo: 'Nossa História',
        texto: `
            <p>Nascemos da vontade de transformar a maneira como as pessoas expressam afeto na era digital. Entendemos que as memórias mais valiosas muitas vezes ficam perdidas em galerias de celular ou em conversas antigas.</p>
            <p>Nossa plataforma foi desenvolvida para ser uma ponte entre a tecnologia e a emoção. Oferecemos uma ferramenta intuitiva e imersiva para que você possa compilar fotos, escolher a trilha sonora perfeita e escrever declarações que ficarão eternizadas em uma página exclusiva.</p>
            <p>Trabalhamos incansavelmente para garantir que cada link gerado carregue não apenas dados em um servidor, mas sim um pedaço da história de quem o criou. Nosso compromisso é com a qualidade visual, a estabilidade de acesso e a segurança das suas recordações.</p>
        `
    },
    'contato': {
        titulo: 'Central de Atendimento',
        texto: `
            <p>Escolha o canal de sua preferência. Nossa equipe está pronta para auxiliar com dúvidas sobre criação, edição ou questões financeiras.</p>
            
            <div class="modal-contato-grid">
                <div class="modal-contato-card">
                    <span class="modal-contato-badge">Mais Rápido</span>
                    <div class="modal-contato-icon">
                        <img src="/static/img/instagram.png" alt="Instagram" class="modal-img-icon">
                    </div>
                    <h4>Via Instagram</h4>
                    <p>Ideal para dúvidas rápidas, suporte com o layout ou ajuda para finalizar seu presente. Tempo médio de resposta: 15 minutos.</p>
                    <a href="https://instagram.com/lovepanda.ofic" target="_blank" class="modal-btn-acao">
                        Enviar Mensagem Direct
                    </a>
                </div>

                <div class="modal-contato-card">
                    <div class="modal-contato-icon">
                        <img src="/static/img/mail.png" alt="E-mail" class="modal-img-icon">
                    </div>
                    <h4>Via E-mail</h4>
                    <p>Recomendado para assuntos comerciais, parcerias, solicitações formais de privacidade (LGPD) e questões complexas.</p>
                    <a href="mailto:suporte@lovepanda.com.br" class="modal-link-simples">
                        suporte@lovepanda.com.br
                    </a>
                </div>
            </div>
        `
    },
    'termos': {
        titulo: 'Termos de Uso',
        texto: `
            <p>A leitura e concordância com os termos a seguir são obrigatórias para a utilização dos nossos serviços.</p>
            
            <h3>1. Natureza do Serviço</h3>
            <p>Oferecemos um serviço de customização de páginas web interativas. O produto final entregue ao cliente é de natureza estritamente <strong>digital</strong>, consistindo em uma URL (link) exclusiva. Não realizamos envios de materiais físicos.</p>

            <h3>2. Entrega e Acesso</h3>
            <p>Após a confirmação financeira, o sistema gera o link de acesso imediatamente. O cliente é responsável por armazenar este link, que possui caráter permanente enquanto a plataforma estiver em operação.</p>

            <h3>3. Responsabilidade sobre o Conteúdo</h3>
            <p>O usuário declara possuir os direitos ou autorização para o uso de todas as imagens submetidas. É proibido o envio de materiais ilícitos ou ofensivos. Reservamo-nos o direito de suspender links que descumpram esta diretriz, sem aviso prévio.</p>

            <h3>4. Política de Cancelamento</h3>
            <p>Por se tratar de um produto digital consumido imediatamente, o estorno é aplicável apenas em casos de falha técnica comprovada que impeça a visualização do conteúdo, ou se solicitado antes da geração do link final.</p>
        `
    },
    'privacidade': {
        titulo: 'Política de Privacidade',
        texto: `
            <p>Este documento detalha como tratamos as informações fornecidas durante o uso do nosso site.</p>

            <h3>Coleta e Armazenamento</h3>
            <p>Coletamos apenas o necessário: endereço de e-mail e as mídias enviadas para a página. Suas imagens são armazenadas em infraestruturas de nuvem de alta segurança. As fotos não são indexadas em motores de busca (como o Google) e são visíveis apenas por quem possui o link exclusivo.</p>

            <h3>Tecnologias de Rastreamento</h3>
            <p>Utilizamos cookies essenciais para manter o funcionamento do site (como o progresso da sua criação). Não comercializamos seu histórico de navegação com terceiros.</p>

            <h3>Seus Direitos (LGPD)</h3>
            <p>Em conformidade com a Lei Geral de Proteção de Dados, você pode solicitar a qualquer momento:</p>
            <ul>
                <li>Acesso ou correção aos dados vinculados ao seu e-mail;</li>
                <li>A exclusão definitiva da sua página personalizada e de todas as mídias atreladas a ela dos nossos servidores.</li>
            </ul>
            <p>Para exercer seus direitos, entre em contato através do nosso E-mail de suporte.</p>
        `
    }
};
// Função para abrir e preencher o modal
function abrirModalOverlay(tipo) {
    const modal = document.getElementById('modal-overlay');
    const tituloDiv = document.getElementById('modal-overlay-titulo');
    const conteudoDiv = document.getElementById('modal-overlay-conteudo');

    // Injeta o conteúdo correto baseado no clique
    tituloDiv.innerHTML = conteudosFooter[tipo].titulo;
    conteudoDiv.innerHTML = conteudosFooter[tipo].texto;

    // Mostra o modal na tela com animação
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('visivel');
    }, 10);
}

// Função para fechar
function fecharModalOverlay() {
    const modal = document.getElementById('modal-overlay');
    
    // Remove a classe para fazer a animação de sumir
    modal.classList.remove('visivel');
    
    // Espera a animação acabar e oculta a div
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Fecha o modal se o usuário clicar fora da caixa preta (no fundo escuro)
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal-overlay');
    if (event.target === modal) {
        fecharModalOverlay();
    }
});