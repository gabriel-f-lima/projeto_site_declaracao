
// ==========================================================================
// 1. CONFIGURAÇÕES E TEXTOS
// ==========================================================================

const textosPersonalizados = {
    'namorado': { titulo: "Nossa História de Amor ❤️", descricao: "Vamos eternizar a história de vocês. Capriche nos detalhes românticos!", labelPara: "Nome do seu amor (ou apelido carinhoso):", placeholderTitulo: "Ex: Feliz 1 Ano de Namoro!" },
    'mae': { titulo: "Homenagem para a Rainha 👑", descricao: "Hora de emocionar a mulher mais importante da sua vida.", labelPara: "Como você a chama (Nome ou Apelido):", placeholderTitulo: "Ex: Feliz Dia das Mães!" },
    'pai': { titulo: "Homenagem para o Coroa 🏆", descricao: "Mostre toda sua admiração e gratidão pelo seu herói.", labelPara: "Como você o chama (Nome ou Apelido):", placeholderTitulo: "Ex: Feliz Dia dos Pais!" },
    'amigo': { titulo: "Parceria Forte 👊", descricao: "Vamos montar aquela página épica para o seu parceiro(a).", labelPara: "Nome da fera (ou apelido interno):", placeholderTitulo: "Ex: Irmão de outra mãe!" },
    'irmao': { titulo: "Laço de Sangue 🧬", descricao: "Relembre as brigas, as risadas e a parceria de irmãos.", labelPara: "Nome do seu irmão/irmã:", placeholderTitulo: "Ex: Melhor irmão do mundo!" },
    'avo': { titulo: "Amor em Dobro 👵👴", descricao: "Um presente cheio de ternura para quem sempre deu os melhores mimos.", labelPara: "Como você chama (Vó, Vô):", placeholderTitulo: "Ex: Feliz aniversário Vó!" },
    'tia': { titulo: "Como uma Segunda Mãe ✨", descricao: "Uma homenagem especial para aquela tia/tio.", labelPara: "Como você a/o chama:", placeholderTitulo: "Ex: Melhor tia do mundo!" },
    'primo': { titulo: "Parceria de Família 🚀", descricao: "Para aquele primo ou prima que cresceu com você.", labelPara: "Nome do seu primo/prima:", placeholderTitulo: "Ex: Tamo junto primo!" },
    'padrao': { titulo: "Informações Básicas 🎁", descricao: "Vamos começar com os nomes e o título da sua homenagem.", labelPara: "Nome do Homenageado (Para):", placeholderTitulo: "Ex: Uma data muito especial..." }
};

const sugestoesTitulos = {
    'namorado': ["Nossa História de Amor ❤️", "Para o meu eterno amor", "Onde tudo começou...", "Mil vezes te amo", "Nosso destino traçado", "O compasso do meu coração", "A melhor parte de mim", "Para sempre nós dois", "Minha música favorita é você", "Meu porto seguro", "O amor da vida", "Escrito nas estrelas ✨", "Contigo todo dia é especial", "Você e eu: o dueto perfeito", "Meu felizes para sempre"],
    'mae': ["Para a melhor mãe do mundo 👑", "Obrigado por tudo, Mãe!", "Amor que não se mede", "Minha rainha, minha vida", "Homenagem para a mulher mais forte", "O colo mais quente e seguro", "Amor incondicional", "Minha primeira inspiração", "Um amor que transcende", "Luz dos meus dias ✨", "Mãe: palavra pequena, amor infinito", "Para quem me ensinou a amar", "Minha base e meu tudo", "O coração mais puro", "Minha estrela guia"],
    'pai': ["Meu herói, meu exemplo 🏆", "Para o melhor pai!", "Orgulho de ser seu filho(a)", "Gratidão eterna, Pai", "O coroa mais incrível", "Meu maior conselheiro", "Meu primeiro super-herói 🦸‍♂️", "Passo a passo com você", "O alicerce da nossa família", "Meu porto seguro, Pai", "Você é minha inspiração", "Para o rei da casa", "Comandante do meu coração", "Exemplo de força e amor", "Valeu por tudo, pai!"],
    'amigo': ["Parceria para a vida toda 👊", "Irmão de outra mãe", "Nossas loucuras imortalizadas", "Onde a resenha não termina", "Para o meu melhor duo", "Amizade que vale ouro 🥇", "Nosso bonde é pesadíssimo", "Histórias para contar a vida inteira", "Aquele que fecha 10/10", "Companheiro de todas as horas", "Para rir até a barriga doer", "Cumplicidade verdadeira", "Sem você não tem graça", "Mais que amigo: um anjo", "A melhor vibe de todas 🚀"],
    'irmao': ["Laço de sangue, laço de amor 🧬", "Meu irmão, meu amigo", "Relembre nossas aventuras", "Para o melhor irmão do mundo", "Parceiros desde sempre", "Sangue do meu sangue", "Cumplicidade de berço", "Entre tapas e beijos 😂", "Meu parceiro de crime", "O melhor presente dos meus pais", "Juntos desde o dia 1", "A vida é melhor com você", "Minha dupla imbatível", "Crescer contigo foi incrível", "Para meu eterno confidente"],
    'avo': ["Amor em dobro para Vó e Vô 👵👴", "Para os melhores avós do mundo!", "Gratidão por todo carinho", "Nossas memórias mais doces", "Homenagem para os avós mais incríveis", "A sabedoria em forma de amor", "A casa que tem cheiro de infância", "Meus maiores tesouros 💎", "Amor que atravessa gerações", "O abraço mais gostoso", "Histórias que aquecem a alma", "Minha raiz e minha paz", "O verdadeiro significado de mimo", "Meus anjos na terra", "Herança de amor e carinho"],
    'tia': ["Para a melhor tia do mundo 👩", "Obrigada por todo carinho, Tia!", "Amor que não se mede", "Minha inspiração, minha tia", "Homenagem para a mulher mais incrível", "Como uma segunda mãe ✨", "Minha tia do coração", "Aquela que me mima sempre", "Risadas garantidas contigo", "Minha confidente favorita", "Muito mais que família: amiga!", "A tia mais coruja 🦉", "Dona dos melhores conselhos", "Minha parceira de fofocas", "Um amor especial de tia"],
    'primo': ["Sangue bom, primo querido!", "Da infância para a vida 🚀", "Parceiro de todas as festas", "Crescemos juntos!", "Tamo junto sempre, primo", "Os melhores churrascos são contigo", "A ovelha negra favorita 😂", "De primos a melhores amigos", "A família que a gente escolhe amar", "Cumplicidade de primo"],
    'padrao': ["Um presente especial 🎁", "Momentos Inesquecíveis", "Para uma pessoa incrível", "Com todo o meu carinho", "Recordações de uma vida", "Nossa trilha sonora 🎵", "Apenas uma lembrança para você", "Com amor, de mim para ti", "Celebrando você hoje"]
};

// BANCO DE MENSAGENS LONGAS
// ==========================================
const sugestoesMensagens = {
    'namorado': [
        "Desde que você entrou na minha vida, tudo ganhou mais cor e sentido. Cada momento ao seu lado é uma página linda da nossa história que eu quero continuar escrevendo para sempre. Te amo além das palavras! ❤️",
        "Você é minha música favorita, meu lugar de paz e o meu melhor sorriso. Obrigado(a) por ser essa pessoa incrível e por me escolher todos os dias. Que a nossa sintonia só aumente com o tempo. ✨",
        "Encontrei em você tudo que eu sempre pedi a Deus. O seu abraço é o meu abrigo e a sua voz é a minha calmaria. Prometo cuidar do nosso amor todos os dias da minha vida.",
        "Não importa onde eu esteja, meu coração sempre vai encontrar o caminho de volta para você. Você é a minha melhor companhia, meu melhor amigo(a) e o grande amor da minha vida. 💑"
    ],
    'mae': [
        "Mãe, você é a raiz mais forte da nossa família. Seu amor incondicional e sua força me inspiram todos os dias. Obrigada por cada sacrifício e por nunca soltar a minha mão. Te amo infinito! 👑",
        "Não existe no mundo um coração tão puro e um abraço tão acolhedor quanto o seu. Tudo o que sou e tudo o que sonho ser, eu devo a você. Obrigado(a) por ser minha luz, mãe.",
        "Mãe, a sua voz é a melodia que acalma a minha alma. Você é meu maior exemplo de garra e de amor. Que a vida me permita retribuir um pouco de tudo o que você já fez por mim.",
        "Nenhuma palavra seria suficiente para descrever a gratidão que sinto por ter nascido de você. Você é meu anjo na terra, minha melhor amiga e minha eterna rainha. Te amo, mãe! ❤️"
    ],
    'pai': [
        "Pai, você é o meu primeiro herói e a minha maior referência. Obrigado(a) por cada conselho, por cada bronca que me fez crescer e por me ensinar a caminhar de cabeça erguida. Tenho muito orgulho de ser seu(sua) filho(a)! 🏆",
        "Você construiu a minha base com amor, suor e dedicação. Meu maior sonho é me tornar pelo menos a metade do ser humano incrível que você é. Te amo demais, meu velho!",
        "Pai, as suas mãos sempre me guiaram para os melhores caminhos. Suas histórias, suas brincadeiras e o seu amor silencioso são o meu maior tesouro. Obrigado(a) por ser a minha âncora.",
        "Para o mundo, você pode ser apenas um pai. Mas para mim, você é o mundo. Obrigado por me proteger, me apoiar e ser esse cara fantástico. Nossa parceria é para a vida toda! 👊"
    ],
    'amigo': [
        "A vida é muito curta para não dar risada até a barriga doer com você! Obrigado(a) por ser essa pessoa que topa as minhas loucuras e me segura nos dias difíceis. Nossa parceria é imbatível! 🚀",
        "Irmão(ã) de outra mãe! Você é a prova de que Deus nos permite escolher a nossa família. Gratidão por cada momento, cada conselho e por estar sempre lá quando eu preciso. Tamo junto sempre!",
        "Uma amizade verdadeira não se explica, se vive. E viver a vida com você por perto é certeza de boas histórias para contar. Obrigado(a) por ser exatamente quem você é. Amo você, fera! 👊",
        "Os quilômetros ou o tempo podem até afastar, mas nada muda a nossa sintonia. Você é aquele tipo de pessoa rara que eu quero levar para a vida inteira. Valeu por tudo!"
    ],
    'irmao': [
        "A gente pode até brigar por besteira, mas no fundo, você sabe que eu daria a vida por você. Crescer ao seu lado foi a melhor aventura que eu poderia ter. Te amo, chato(a)! 😂❤️",
        "Você é meu(minha) parceiro(a) desde o dia 1. As melhores memórias da minha infância têm você nelas. Obrigado(a) por ser meu(minha) confidente e minha dupla infalível.",
        "Ter um irmão como você é saber que nunca estarei sozinho(a) neste mundo. O nosso laço de sangue é forte, mas a nossa amizade é ainda mais inquebrável. Conte comigo para tudo! 🧬",
        "Pode passar o tempo que for, você sempre vai ser a pessoa que me entende só com um olhar. Tenho muito orgulho da pessoa que você se tornou. Amo você!"
    ],
    'avo': [
        "Vó/Vô, sua casa tem cheiro de amor e sua voz é meu maior conforto. Suas histórias e sua sabedoria são os maiores tesouros da nossa família. Te amo além da vida! 👵👴",
        "Nenhum carinho no mundo se compara ao seu. Obrigado(a) por me mimar, por rezar por mim e por me ensinar que o amor é a resposta para tudo. Você é o meu anjo na Terra.",
        "Sua vida é o pilar da nossa família. Cada ruguinha no seu rosto conta uma história de superação e dedicação. Que privilégio enorme é poder ser seu(sua) neto(a).",
        "Obrigado(a) por cada doce escondido, cada cafuné e cada abraço apertado. O seu amor multiplica a minha felicidade. Que eu possa aproveitar sua companhia por muitos e muitos anos."
    ],
    'tia': [
        "Tia, você é como uma segunda mãe para mim. Sempre com os melhores conselhos, as melhores risadas e o abraço mais quente. Muito obrigado(a) por todo o seu carinho e amor! ✨",
        "Você é a prova de que a nossa família tem muita sorte! Sempre trazendo alegria por onde passa. Sou muito grato(a) por ter uma tia tão amiga e parceira como você.",
        "Amo as nossas fofocas, as nossas conversas e o seu jeito único de ver o mundo. Você ilumina a vida de todos nós. Te amo muito, tia!",
        "Muito mais que família, você é uma grande amiga. Obrigado(a) por estar sempre torcendo por mim e por vibrar com cada conquista minha. Você é incrível!"
    ],
    'primo': [
        "Crescemos juntos e hoje eu percebo a sorte que tive de ter um(a) primo(a) que também é meu(minha) melhor amigo(a). As melhores festas e histórias de família são com você! 🚀",
        "Sangue do meu sangue e parceiro(a) de todas as horas! A gente sabe que a resenha só é boa quando estamos juntos. Tamo junto sempre, primo(a)!",
        "Desde as brincadeiras de criança até os perrengues da vida adulta. Que bom saber que eu tenho você para dividir as loucuras dessa nossa família. Te amo!",
        "Você é aquela pessoa que eu não preciso ver todo dia, mas quando encontro parece que nada mudou. Cumplicidade verdadeira. Valeu pela parceria de sempre!"
    ],
    'padrao': [
        "Existem momentos e pessoas que merecem ser eternizados. Essa homenagem é uma forma simples de mostrar o quanto você é especial e importante para mim. Obrigado(a) por fazer parte da minha vida! 🎁",
        "Que a nossa sintonia continue sendo a trilha sonora dos nossos melhores dias. É um privilégio enorme dividir a vida e criar lembranças inesquecíveis ao seu lado. ✨",
        "Para as palavras que às vezes eu não sei dizer, deixo essa lembrança. Que você saiba o quanto é admirado(a) e o quanto sua presença faz a diferença no meu dia a dia.",
        "Celebrar você é fácil, porque você traz luz e alegria para quem está ao seu redor. Que essa homenagem seja apenas um reflexo de tudo de bom que você espalha pelo mundo."
    ]
};

let tipoSelecionadoAtual = new URLSearchParams(window.location.search).get('tipo') || 'padrao';

// ==========================================================================
// 2. FUNÇÕES DE ANIMAÇÃO E INTERFACE
// ==========================================================================

const controlesAnimacao = {};

async function digitarTexto(elementoId, texto, velocidade = 30) {
    const elemento = document.getElementById(elementoId);
    if (!elemento) return;

    // Se já houver uma animação rodando NESTE elemento, a gente cancela
    if (controlesAnimacao[elementoId]) {
        controlesAnimacao[elementoId].cancelar = true;
    }

    // Criamos um novo controle para a animação atual
    const statusAtual = { cancelar: false };
    controlesAnimacao[elementoId] = statusAtual;

    elemento.innerHTML = "";
    elemento.classList.add('digitando');

    for (let i = 0; i < texto.length; i++) {
        // Se outra animação começou, paramos esta aqui imediatamente
        if (statusAtual.cancelar) return;

        elemento.innerHTML += texto.charAt(i);
        
        // Espera um tempinho antes da próxima letra
        await new Promise(resolve => setTimeout(resolve, velocidade));
    }

    elemento.classList.remove('digitando');
}

async function aplicarTextos(tipo) {
    const textos = textosPersonalizados[tipo] || textosPersonalizados['padrao'];

    // 1. Atualiza campos estáticos (labels e placeholders)
    const elLabelPara = document.getElementById('label-nome-para');
    const elInputTitulo = document.getElementById('titulo');

    if (elLabelPara) elLabelPara.innerText = textos.labelPara;
    if (elInputTitulo) elInputTitulo.placeholder = textos.placeholderTitulo;

    // 2. Sequência de animação: Primeiro o Título, DEPOIS a Descrição
    // O 'await' garante que a descrição só comece quando o título terminar
    await digitarTexto('passo1-titulo', textos.titulo, 40);
    
    // Pequena pausa dramática entre título e descrição
    await new Promise(resolve => setTimeout(resolve, 300));
    
    await digitarTexto('passo1-desc', textos.descricao, 20);
}
function escolherTipoTela(tipo) {
    tipoSelecionadoAtual = tipo;
    aplicarTextos(tipo);

    document.getElementById('passo-0').classList.remove('ativo');
    document.getElementById('passo-1').classList.add('ativo');

    const barra = document.querySelector('.progresso-passos');
    if (barra) barra.style.display = 'flex';
}

function gerarTituloAleatorio() {
    const lista = sugestoesTitulos[tipoSelecionadoAtual] || sugestoesTitulos['padrao'];
    const inputTitulo = document.getElementById('titulo');

    if (!inputTitulo) return;

    const tituloAtual = inputTitulo.value;
    let tituloSorteado;

    do {
        tituloSorteado = lista[Math.floor(Math.random() * lista.length)];
    } while (tituloSorteado === tituloAtual && lista.length > 1);

    inputTitulo.value = tituloSorteado;
    // Dispara o evento input manualmente para atualizar o mockup
    inputTitulo.dispatchEvent(new Event('input'));
}

function gerarMensagemAleatoria() {
    const lista = sugestoesMensagens[tipoSelecionadoAtual] || sugestoesMensagens['padrao'];
    const inputMensagem = document.getElementById('letra_musica');

    if (!inputMensagem) return;

    const msgAtual = inputMensagem.value;
    let msgSorteada;

    // Sorteia nova mensagem sem repetir a anterior logo em seguida
    do {
        msgSorteada = lista[Math.floor(Math.random() * lista.length)];
    } while (msgSorteada === msgAtual && lista.length > 1);

    inputMensagem.value = msgSorteada;

    // Chama a função que já existe para atualizar o texto no celular
    atualizarLetra();
}

// ==========================================================================
// 4. INICIALIZAÇÃO E EVENTOS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const tipoPresente = urlParams.get('tipo');
    const barraProgresso = document.querySelector('.progresso-passos');

    document.querySelectorAll('.passo-container').forEach(p => p.classList.remove('ativo'));

    if (!tipoPresente) {
        const p0 = document.getElementById('passo-0');
        if (p0) p0.classList.add('ativo');
        if (barraProgresso) barraProgresso.style.display = 'none';
    } else {
        aplicarTextos(tipoPresente);
        document.getElementById('passo-1').classList.add('ativo');
        if (barraProgresso) barraProgresso.style.display = 'flex';
    }

    // Listeners de Input para o Mockup
    const inputDe = document.getElementById('nome_de');
    const inputPara = document.getElementById('nome_para');
    const inputTitulo = document.getElementById('titulo');

    if (inputDe) inputDe.addEventListener('input', (e) => {
        document.getElementById('preview-de').innerText = `De: ${e.target.value || '...'}`;
    });

    if (inputPara) inputPara.addEventListener('input', (e) => {
        document.getElementById('preview-topo').innerText = `PARA: ${e.target.value.toUpperCase() || '...'}`;
    });

    if (inputTitulo) inputTitulo.addEventListener('input', (e) => {
        document.getElementById('preview-titulo').innerText = e.target.value || 'Seu Título Aqui';
    });
});

// Funções Auxiliares
function abrirEspiadinha() { document.querySelector('.editor-preview-panel').classList.add('modo-modal'); }
function fecharEspiadinha() { document.querySelector('.editor-preview-panel').classList.remove('modo-modal'); }

function carregarFoto(event) {
    const reader = new FileReader();
    reader.onload = function () {
        const img = document.getElementById('preview-foto');
        img.src = reader.result;
        img.style.display = 'block';
        document.getElementById('placeholder-texto').style.display = 'none';
    };
    if (event.target.files[0]) reader.readAsDataURL(event.target.files[0]);
}


function atualizarLetra() {
    const input = document.getElementById('letra_musica');
    const preview = document.getElementById('preview-letra');
    const contador = document.getElementById('contador_letra');

    if (!input || !preview) return;

    const texto = input.value;

    // Atualiza o contador visual
    if (contador) {
        contador.innerText = `${texto.length} / 600 caracteres`;
    }

    // Atualiza o preview no celular
    if (texto.trim() === '') {
        preview.innerHTML = 'Sua mensagem aparecerá aqui...';
    } else {
        // Substitui quebras de linha por <br> para aparecer no HTML
        preview.innerHTML = texto.replace(/\n/g, '<br>');
    }
}

function toggleLetra() {
    document.getElementById('card-letra').classList.toggle('expandido');
}

// ==========================================
// SISTEMA DE TROCA DE TEMAS
// ==========================================

// Transforma HEX (#8b5cf6) em RGB (139, 92, 246) para o gradiente com transparência
function hexParaRgb(hex) {
    hex = hex.replace(/^#/, '');
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return `${r}, ${g}, ${b}`;
}

// Muda o tema e atualiza a bolinha selecionada
function mudarTema(corHex, elementoClicado) {
    // Seleciona apenas o mockup do celular
    const mockup = document.querySelector('.mockup-celular');

    if (mockup) {
        // Altera as variáveis APENAS no mockup
        mockup.style.setProperty('--cor-tema', corHex);
        mockup.style.setProperty('--cor-tema-rgb', hexParaRgb(corHex));
    }

    // Mantém o destaque visual na bolinha selecionada
    const bolinhas = document.querySelectorAll('.cor-opcao');
    bolinhas.forEach(bolinha => bolinha.classList.remove('ativo'));

    if (elementoClicado) {
        elementoClicado.classList.add('ativo');
    }
}

// ==========================================================================
// 5. NAVEGAÇÃO ENTRE PASSOS (TROCA A TELA DO CELULAR)
// ==========================================================================
function mudarPasso(atual, proximo) {
    // 1. Troca a tela no formulário da esquerda
    document.getElementById(`passo-${atual}`).classList.remove('ativo');
    document.getElementById(`passo-${proximo}`).classList.add('ativo');

    // 2. Atualiza o progresso das bolinhas em cima
    const bolinhas = document.querySelectorAll('.passo-bolinha');
    bolinhas.forEach((b, i) => {
        if (i < proximo) b.classList.add('ativo');
        else b.classList.remove('ativo');
    });

    // 3. MÁGICA DO MOCKUP: Troca a interface do celular
    const uiMusica = document.querySelector('.app-musica-ui');
    const uiTimeline = document.querySelector('.app-timeline-ui');

    if (uiMusica && uiTimeline) {
        if (proximo === 3) {
            uiMusica.style.display = 'none';
            uiTimeline.style.display = 'flex';
        } else {
            uiMusica.style.display = 'block';
            uiTimeline.style.display = 'none';
        }
    }

    // 4. Joga a tela do usuário para o topo suavemente
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ==========================================================================
// 6. FUNÇÕES DA GALERIA / LINHA DO TEMPO EM TEMPO REAL (COM LIMITE DE 6 FOTOS)
// ==========================================================================
let contadorFotos = 0; // Usado apenas para dar um ID único (nunca diminui)
let fotosAtivas = 0;   // Controla quantas fotos existem na tela agora
const MAX_FOTOS = 6;   // O seu limite máximo

function adicionarNovaFoto() {
    // Trava de segurança: impede de passar de 6
    if (fotosAtivas >= MAX_FOTOS) {
        alert("Você atingiu o limite máximo de 6 fotos!");
        return;
    }

    contadorFotos++;
    fotosAtivas++;
    const id = contadorFotos;

    // 1. ADICIONA O CARD NO FORMULÁRIO (ESQUERDA)
    const containerForm = document.getElementById('container-fotos');
    const divForm = document.createElement('div');
    divForm.className = 'foto-item';
    divForm.id = `foto-item-${id}`;

    // Única mudança: Tirei o style="display: none" e coloquei 'hidden'
    divForm.innerHTML = `
        <label class="foto-preview-box" for="input-foto-${id}" title="Clique para escolher uma foto">
            <span id="icone-foto-${id}">📷</span>
            <img id="img-preview-${id}" src="" class="foto-upload-preview" hidden>
        </label>
        
        <input type="file" id="input-foto-${id}" accept="image/*" hidden 
               onchange="previewFotoLinhaTempo(event, ${id})">
        
        <div class="foto-info">
            <input type="text" placeholder="Data marcante" class="input-data" maxlength="35"
                   oninput="atualizarMockupTimeline(${id}, 'data', this.value)">
            
            <input type="text" name="momento_titulo_${id}" placeholder="Escreva uma mensagem especial..." 
                   class="input-legenda" maxlength="100" 
                   oninput="atualizarMockupTimeline(${id}, 'texto', this.value); atualizarCaixinhaMemorias()">
        </div>
        
        <button type="button" class="btn-remover-foto" onclick="removerFoto(${id})" title="Apagar foto">✖</button>
    `;
    containerForm.appendChild(divForm);

    // 2. ADICIONA O ESPELHO NO MOCKUP DO CELULAR (DENTRO DA TIMELINE)
    const containerMockup = document.getElementById('preview-timeline');
    if (containerMockup) {
        const divMockup = document.createElement('div');
        divMockup.className = 'timeline-mockup-item';
        divMockup.id = `mockup-item-${id}`;
        divMockup.innerHTML = `
            <div class="timeline-mockup-date" id="mockup-data-${id}">Sua data...</div>
            <div class="timeline-mockup-img-container">
                <span id="mockup-placeholder-${id}">Sem foto</span>
                <img id="mockup-img-${id}" src="">
            </div>
            <div class="timeline-mockup-text" id="mockup-texto-${id}">Sua mensagem aparecerá aqui...</div>
        `;
        containerMockup.appendChild(divMockup);
    }

    verificarLimiteFotos(); // Esconde o botão se chegar no limite
    atualizarCaixinhaMemorias(); // Atualiza o card de entrada do Spotify
}

let contadorCapas = 0; 
let capasAtivas = 0;   
const MAX_CAPAS = 4;   
let arrayCapasMockup = []; // Guarda as fotos para o botão de avançar/voltar do player

function adicionarNovaCapa() {
    if (capasAtivas >= MAX_CAPAS) return;

    contadorCapas++;
    capasAtivas++;
    const id = contadorCapas;

    const containerForm = document.getElementById('container-capas');
    const divForm = document.createElement('div');
    
    // Usando a SUA classe que já existe e funciona
    divForm.className = 'foto-item'; 
    divForm.id = `capa-item-${id}`;

    divForm.innerHTML = `
        <label class="foto-preview-box" for="input-capa-${id}" title="Clique para escolher uma foto">
            <span id="icone-capa-${id}">📷</span>
            <img id="img-preview-capa-${id}" src="" class="foto-upload-preview" hidden>
        </label>
        
        <input type="file" id="input-capa-${id}" accept="image/*" hidden 
               onchange="previewFotoCapa(event, ${id})">
        
        <button type="button" class="btn-remover-foto" onclick="removerCapa(${id})" title="Apagar foto">✖</button>
    `;
    
    containerForm.appendChild(divForm);
    verificarLimiteCapa();
}

function verificarLimiteCapa() {
    const btnAdd = document.getElementById('btn-add-capa');
    const alerta = document.getElementById('alerta-capas');
    
    if (capasAtivas >= MAX_CAPAS) {
        btnAdd.hidden = true;
        alerta.hidden = false;
    } else {
        btnAdd.hidden = false;
        alerta.hidden = true;
    }
}

function previewFotoCapa(event, id) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgPreview = document.getElementById(`img-preview-capa-${id}`);
            const icone = document.getElementById(`icone-capa-${id}`);
            
            // 1. Salva a imagem no quadradinho
            imgPreview.src = e.target.result;
            
            // 2. Força a imagem a aparecer na tela do formulário
            imgPreview.hidden = false;
            imgPreview.style.display = 'block'; 
            
            // 3. Força o ícone da câmera a sumir
            if (icone) {
                icone.hidden = true;
                icone.style.display = 'none';
            }
            
            // 4. Aciona a função para atualizar o celular
            atualizarMockupCapas(); 
        }
        reader.readAsDataURL(file);
    }
}

function removerCapa(id) {
    const item = document.getElementById(`capa-item-${id}`);
    if (item) {
        item.remove(); // Apaga do HTML
        capasAtivas--; // Diminui a contagem
        verificarLimiteCapa(); // Volta o botão de adicionar
        atualizarMockupCapas(); // Tira a foto do mockup
    }
}

function atualizarMockupCapas() {
    const imagensNodes = document.querySelectorAll('[id^="img-preview-capa-"]');
    arrayCapasMockup = [];
    
    imagensNodes.forEach(img => {
        // Pega só as que realmente tem uma foto carregada
        if (img.src && !img.src.endsWith(window.location.host + "/") && img.src !== "") {
            arrayCapasMockup.push(img.src);
        }
    });

    // ATENÇÃO: Confirme se 'preview-foto' é o ID certo da capinha no celular
    const imgMockupPlayer = document.getElementById('preview-foto'); 
    const placeholder = document.getElementById('placeholder-texto');

    if (imgMockupPlayer) {
        if (arrayCapasMockup.length > 0) {
            imgMockupPlayer.src = arrayCapasMockup[0]; // Mostra a primeira foto
            
            // Força a mostrar
            imgMockupPlayer.hidden = false; 
            imgMockupPlayer.style.display = 'block';
            
            if (placeholder) {
                placeholder.hidden = true; 
                placeholder.style.display = 'none';
            }
            
            if (typeof imagemAtual !== 'undefined') imagemAtual = 0; 
        } else {
            imgMockupPlayer.src = "";
            
            // Força a esconder se não tiver foto
            imgMockupPlayer.hidden = true; 
            imgMockupPlayer.style.display = 'none';
            
            if (placeholder) {
                placeholder.hidden = false; 
                placeholder.style.display = 'block';
            }
        }
    }
}

// Pega a foto do PC/Celular e joga no Formulário E no Mockup
function previewFotoLinhaTempo(event, id) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgForm = document.getElementById(`img-preview-${id}`);
            const iconeForm = document.getElementById(`icone-foto-${id}`);
            if (imgForm) { imgForm.src = e.target.result; imgForm.style.display = 'block'; }
            if (iconeForm) iconeForm.style.display = 'none';

            const imgMockup = document.getElementById(`mockup-img-${id}`);
            const placeholderMockup = document.getElementById(`mockup-placeholder-${id}`);
            if (imgMockup) { imgMockup.src = e.target.result; imgMockup.style.display = 'block'; }
            if (placeholderMockup) placeholderMockup.style.display = 'none';

            // ⚠️ CHAME AQUI: Avisa a caixinha que uma nova foto foi carregada!
            atualizarCaixinhaMemorias();
        }
        reader.readAsDataURL(file);
    }
}

// Quando a pessoa digita, o texto vai pro celular na mesma hora
function abrirTimelineCompleta() {
    const tela1 = document.getElementById('mockup-player-principal');
    const tela2 = document.getElementById('timeline-completa');

    if (tela1 && tela2) {
        tela1.style.display = 'none'; // Esconde o player
        tela2.style.display = 'block'; // Mostra a timeline
    } else {
        alert("Erro: Não achei as telas no HTML. Verifique os IDs!");
    }
}

function fecharTimelineCompleta() {
    const tela1 = document.getElementById('mockup-player-principal');
    const tela2 = document.getElementById('timeline-completa');

    if (tela1 && tela2) {
        tela2.style.display = 'none'; // Esconde a timeline
        tela1.style.display = 'block'; // Mostra o player de volta
    }
}
function atualizarCaixinhaMemorias() {
    const containerMiniaturas = document.getElementById('mini-fotos-preview');
    if (!containerMiniaturas) return;

    // Limpa o container para recriar as 3 fotos
    containerMiniaturas.innerHTML = '';

    // Pega todas as fotos que a pessoa já adicionou no formulário
    const itensFormulario = document.querySelectorAll('.foto-item');
    const placeholders = ["Nossos Dates", "Fotos aleatórias", "Primeira viagem"];

    // Cria exatamente 3 colunas (sempre 3)
    for (let i = 0; i < 3; i++) {
        const divCaixa = document.createElement('div');
        divCaixa.className = 'app-mini-foto'; // Usa a NOSSA classe segura do CSS

        let temFoto = false;

        // Verifica se existe o item do formulário e se ele tem uma foto válida
        if (itensFormulario[i]) {
            const imgFormulario = itensFormulario[i].querySelector('img.foto-upload-preview'); // Pega a tag <img> de preview

            // Se a tag existir, tiver um 'src' e não for um placeholder padrão/vazio
            if (imgFormulario && imgFormulario.src && imgFormulario.src !== "" && !imgFormulario.src.includes('placeholder')) {
                // Se tem foto, cria a tag <img> do jeito certo que o CSS espera
                const img = document.createElement('img');
                img.src = imgFormulario.src;
                divCaixa.appendChild(img);
                temFoto = true;
            }
        }

        // Se NÃO tem foto, mostra o texto de placeholder cinza.
        // Se TEM foto, a caixa fica só com a foto (sem texto), como você pediu!
        if (!temFoto) {
            const spanTexto = document.createElement('span');
            spanTexto.innerText = placeholders[i];
            spanTexto.style.color = '#888'; // Força o texto cinza para os vazios
            divCaixa.appendChild(spanTexto);
        }

        // Adiciona a caixinha pronta no painel do celular
        containerMiniaturas.appendChild(divCaixa);
    }
}

// Sua função atualizada para refletir no Card e na Timeline
function atualizarMockupTimeline(id, campo, valor) {
    // 1. Atualiza na Timeline detalhada
    // Se o campo for 'data', o ID alvo é 'mockup-data-1', etc.
    const elementoMockup = document.getElementById(`mockup-${campo}-${id}`);
    
    if (elementoMockup) {
        const placeholders = {
            'data': 'Sua data...',
            'texto': 'Sua mensagem aparecerá aqui...'
        };
        elementoMockup.innerText = valor || placeholders[campo];
    }

    // 2. Se for o título geral da seção (fora do loop de fotos)
    if (campo === 'titulo_geral') {
        const labelCard = document.getElementById('mockup-timeline-titulo-card');
        const labelTimeline = document.getElementById('mockup-timeline-titulo');
        if (labelCard) labelCard.innerText = valor;
        if (labelTimeline) labelTimeline.innerText = valor;
    }
}

function removerFoto(id) {
    const itemForm = document.getElementById(`foto-item-${id}`);
    const itemMockup = document.getElementById(`mockup-item-${id}`);

    if (itemForm) itemForm.remove();
    if (itemMockup) itemMockup.remove();

    fotosAtivas--;
    verificarLimiteFotos();

    // CHAME AQUI: Para reorganizar as 3 miniaturas do card principal
    atualizarCaixinhaMemorias();
}

// Esconde ou mostra o botão de adicionar fotos dependendo do limite
function verificarLimiteFotos() {
    const btnAdicionar = document.querySelector('.btn-adicionar-foto');
    if (btnAdicionar) {
        if (fotosAtivas >= MAX_FOTOS) {
            btnAdicionar.style.opacity = '0.5';
            btnAdicionar.style.pointerEvents = 'none'; // Desativa o clique
            btnAdicionar.innerText = 'Limite de fotos atingido';
        } else {
            btnAdicionar.style.opacity = '1';
            btnAdicionar.style.pointerEvents = 'auto'; // Reativa o clique
            btnAdicionar.innerText = '+ Adicionar Momento';
        }
    }
}
async function finalizarHomenagem() {
    // 1. Mostrar um feedback de carregamento para o cliente
    const btnFinalizar = document.querySelector('.btn-finalizar');
    btnFinalizar.innerText = "Salvando sua Homenagem...";
    btnFinalizar.disabled = true;

    // 2. Coletar os dados principais
    const dados = {
        titulo_geral: document.getElementById('mockup-timeline-titulo-card').innerText,
        musica: {
            nome: document.getElementById('musica_nome').value,
            artista: document.getElementById('musica_artista').value,
            capa: document.getElementById('musica_capa').value,
            audio: document.getElementById('musica_preview')?.value
        },
        // Aqui pegamos todos os textos dos momentos da timeline
        momentos: []
    };

    // 3. Capturar cada momento da timeline
    const itensFotos = document.querySelectorAll('.foto-item'); // Pega só os que realmente existem
    itensFotos.forEach((item) => {
        // Busca os inputs dentro do card específico
        const titulo = item.querySelector('.input-legenda')?.value || "";
        const data = item.querySelector('.input-data')?.value || "";

        dados.momentos.push({ titulo, data });
    });

    console.log("Dados prontos para o servidor:", dados);

    try {
        const response = await fetch('/salvar-homenagem', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });
        if (response.ok) {
            window.location.href = "/pagamento"; // Redireciona para o checkout
        }
    } catch (erro) {
        alert("Erro ao salvar. Tente novamente.");
        btnFinalizar.disabled = false;
    }


    alert("Dados capturados! Agora o próximo passo é configurar a rota /salvar-homenagem no seu Python.");
}

// ==========================================================================
// 7. APIS DE BUSCA E CÁLCULO DE DIAS
// ==========================================================================

let timerBusca; // Evita que a API seja chamada a cada letra digitada instantaneamente

function buscarCidade(termo) {
    const dropdown = document.getElementById('resultado-cidades');
    if (termo.length < 3) { dropdown.style.display = 'none'; return; }

    clearTimeout(timerBusca);
    timerBusca = setTimeout(async () => {
        try {
            // Busca cidades no Brasil. Aumentei o limit para 10 para ter mais chance de achar cidades diferentes após filtrar
            const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${termo}&format=json&addressdetails=1&countrycodes=br&limit=10`);
            const dados = await res.json();

            dropdown.innerHTML = '';

            if (dados.length > 0) {
                // Cria um "caderninho" para anotar as cidades que já mostramos
                const cidadesVistas = new Set();

                dados.forEach(local => {
                    const cidade = local.address.city || local.address.town || local.address.village;
                    const estado = local.address.state;

                    if (cidade && estado) {
                        const textoLugar = `${cidade} - ${estado}`;

                        // Só cria a opção na lista SE a cidade ainda não estiver no nosso caderninho
                        if (!cidadesVistas.has(textoLugar)) {
                            cidadesVistas.add(textoLugar); // Anota no caderninho

                            const div = document.createElement('div');
                            div.className = 'autocomplete-item';
                            div.innerText = textoLugar;
                            div.onclick = () => selecionarCidade(cidade, estado);
                            dropdown.appendChild(div);
                        }
                    }
                });

                // Só mostra a lista se sobrou alguma coisa depois de filtrar as repetições
                if (cidadesVistas.size > 0) {
                    dropdown.style.display = 'block';
                }
            }
        } catch (erro) { console.error("Erro na API de cidades:", erro); }
    }, 500);
}

function selecionarCidade(cidade, estado) {
    const texto = `${cidade} - ${estado}`;
    document.getElementById('cidade').value = texto;
    document.getElementById('mockup-cidade-estado').innerText = texto;
    document.getElementById('resultado-cidades').style.display = 'none';
    
}

function buscarMusica(termo) {
    const dropdown = document.getElementById('resultado-musicas');

    // Se o usuário apagar o texto ou tiver menos de 3 letras, esconde a lista
    if (termo.trim().length < 3) {
        dropdown.style.display = 'none';
        return;
    }

    // Limpa o timer anterior se a pessoa continuar digitando rápido
    clearTimeout(timerBusca);

    timerBusca = setTimeout(async () => {
        try {
            // encodeURIComponent: formata o texto para a API não quebrar com espaços (ex: "shape of you" vira "shape%20of%20you")
            const termoFormatado = encodeURIComponent(termo);
            // URL oficial da Apple/iTunes
            const url = `https://itunes.apple.com/search?term=${termoFormatado}&entity=song&limit=5`;

            const res = await fetch(url);

            if (!res.ok) throw new Error("Falha ao comunicar com a API de músicas");

            const dados = await res.json();
            dropdown.innerHTML = '';

            if (dados.results && dados.results.length > 0) {
                dados.results.forEach(musica => {
                    const div = document.createElement('div');
                    div.className = 'autocomplete-item';

                    // O iTunes manda uma imagem 100x100 por padrão. Nós trocamos o texto da URL para 300x300 para qualidade HD!
                    const capaAltaQualidade = musica.artworkUrl100.replace('100x100bb', '300x300bb');
                    const nomeMusica = musica.trackName;
                    const nomeArtista = musica.artistName;

                    const audioUrl = musica.previewUrl;

                    div.innerHTML = `
    <img src="${capaAltaQualidade}" style="width: 40px; height: 40px; border-radius: 4px; object-fit: cover; flex-shrink: 0;">
    <div style="display: flex; flex-direction: column; overflow: hidden;">
        <span style="font-weight: bold; font-size: 14px; color: #1ed760; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${nomeMusica}</span>
        <span style="font-size: 12px; color: #a8b2d1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${nomeArtista}</span>
    </div>
`;

                    // AGORA SIM passando os 4 parâmetros corretamente!
                    div.onclick = () => selecionarMusica(nomeMusica, nomeArtista, capaAltaQualidade, audioUrl);
                    dropdown.appendChild(div);
                });
                dropdown.style.display = 'block';
            } else {
                dropdown.style.display = 'none'; // Não achou nada, esconde a lista
            }
        } catch (erro) {
            console.error("Erro na busca de músicas:", erro);
        }
    }, 500); // Espera meio segundo (500ms) após a pessoa parar de digitar para gastar a pesquisa
}


let intervaloContador;

// 1. Primeiro buscamos o elemento na tela
const inputData = document.getElementById('data_conheceram');

// 2. Só adicionamos o evento SE o elemento existir (evita o erro "Cannot read properties of null")
if (inputData) {
    inputData.addEventListener('change', function () {
        const dataInput = this.value;
        const display = document.getElementById('mockup-contador-dias');

        if (!dataInput || !display) return;

        // Se já existir um relógio rodando (porque a pessoa escolheu outra data antes), nós paramos ele
        if (intervaloContador) clearInterval(intervaloContador);

        // Pega a data inicial (vamos assumir que o "dia 1" começou à meia-noite)
        const dataInicio = new Date(dataInput + 'T00:00:00').getTime();

        // Cria o loop que vai rodar e atualizar a tela a cada 1 segundo (1000ms)
        intervaloContador = setInterval(function () {
            const agora = new Date().getTime();
            const diferencaTempo = agora - dataInicio;

            if (diferencaTempo >= 0) {
                // A matemática para extrair cada parte do tempo
                const dias = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));
                const horas = Math.floor((diferencaTempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutos = Math.floor((diferencaTempo % (1000 * 60 * 60)) / (1000 * 60));
                const segundos = Math.floor((diferencaTempo % (1000 * 60)) / 1000);

                // Adiciona um "0" na frente se o número for menor que 10 (ex: 05h 09m)
                const hFormatado = horas.toString().padStart(2, '0');
                const mFormatado = minutos.toString().padStart(2, '0');
                const sFormatado = segundos.toString().padStart(2, '0');

                // Atualiza o Mockup do celular na hora!
                display.innerText = `${dias} dias, ${hFormatado}h ${mFormatado}m ${sFormatado}s ❤️`;
            } else {
                display.innerText = `A data ainda vai chegar!`;
                clearInterval(intervaloContador); // Para o relógio se a data for no futuro
            }
        }, 1000);
    });
}

function selecionarMusica(nome, artista, capa, audioUrl) {
    // 1. Preenche o campo de busca e esconde o dropdown
    const inputBusca = document.getElementById('busca_musica');
    if (inputBusca) inputBusca.value = `${nome} - ${artista}`;
    
    const dropdown = document.getElementById('resultado-musicas');
    if (dropdown) dropdown.style.display = 'none';

    // 2. Atualiza os campos ocultos (essencial para salvar no banco depois)
    const campos = {
        'musica_nome': nome,
        'musica_artista': artista,
        'musica_capa': capa,
        'musica_preview': audioUrl || ''
    };

    for (let id in campos) {
        const el = document.getElementById(id);
        if (el) el.value = campos[id];
    }

    // 3. Atualiza o Mockup (Celular)
    const mockTitulo = document.getElementById('mockup-musica-titulo-api');
    const mockArtista = document.getElementById('mockup-musica-artista-api');
    const mockCapa = document.getElementById('mockup-musica-capa-api');

    if (mockTitulo) mockTitulo.innerText = nome;
    if (mockArtista) mockArtista.innerText = artista;
    if (mockCapa) mockCapa.src = capa;

    // 4. Configura o Player de Áudio
    const player = document.getElementById('player-musica');
    if (player) {
        player.src = audioUrl || "";
        player.pause(); // Garante que não comece tocando sozinho
    }

    // 5. "Acende" o botão de Play
    const btnPlay = document.getElementById('mini-btn-play-container');
    if (btnPlay) {
        btnPlay.classList.remove('desativado');
        btnPlay.style.opacity = '1';
        btnPlay.style.cursor = 'pointer';
    }

    // 6. Reseta a barra de progresso e ícone
    const barra = document.getElementById('barra-progresso');
    if (barra) barra.value = 0;
    
    const tempoAtual = document.getElementById('tempo-atual');
    if (tempoAtual) tempoAtual.innerText = "0:00";

    const iconeMini = document.getElementById('mini-icone-play');
    if (iconeMini && iconeMini.tagName === 'IMG') {
        iconeMini.src = "/static/img/play.png"; // Ajuste o caminho se necessário
    }
}
// ==========================================================
// 1. CONFIGURAÇÕES GERAIS E FUNÇÕES AUXILIARES
// ==========================================================

// Desenhos dos Ícones (Caso esteja usando SVG)
const svgPlay = '<path d="M8 5v14l11-7z"/>';
const svgPause = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';

// Formata os segundos em formato de relógio (Ex: 3:05)
function formatarTempo(segundos) {
    if (!segundos || isNaN(segundos)) return "0:00";
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min}:${seg < 10 ? '0' : ''}${seg}`;
}

// Atualiza a cor de fundo da barra de progresso (Efeito verde)
function atualizarCorBarra(valor) {
    const barra = document.getElementById('barra-progresso');
    if (barra) {
        barra.style.backgroundSize = valor + '% 100%';
    }
}

// ==========================================================
// 2. FUNÇÃO PRINCIPAL: ALTERNAR PLAY/PAUSE (Apenas iTunes)
// ==========================================================

function alternarPlay() {
    const player = document.getElementById('player-musica');
    const iconeMini = document.getElementById('mini-icone-play');
    const iconeGrande = document.getElementById('icone-play-pause'); // Caso tenha o play no centro

    // 1. Só funciona se o player tiver uma música carregada
    if (!player || !player.src || player.src === window.location.href) {
        console.warn("Nenhuma música carregada.");
        return;
    }

    if (player.paused) {
        // --- VAI TOCAR ---
        player.play();
        
        // Troca para o ícone de PAUSA
        if (iconeMini) iconeMini.src = "/static/img/pausa.png";
        if (iconeGrande) {
            // Se o grande for <img> troca o src, se for <svg> você pode alternar uma classe
            if (iconeGrande.tagName === 'IMG') iconeGrande.src = "/static/img/pausa.png";
        }
    } else {
        // --- VAI PAUSAR ---
        player.pause();
        
        // Troca para o ícone de PLAY
        if (iconeMini) iconeMini.src = "/static/img/play.png";
        if (iconeGrande) {
            if (iconeGrande.tagName === 'IMG') iconeGrande.src = "/static/img/play.png";
        }
    }
}

// ==========================================================
// 3. CONTROLE DA BARRA DE PROGRESSO E ÁUDIO
// ==========================================================

const audioNativo = document.getElementById('player-musica');
const barraProgresso = document.getElementById('barra-progresso');
const tempoAtualText = document.getElementById('tempo-atual');
const tempoTotalText = document.getElementById('tempo-total');

if (audioNativo && barraProgresso) {

    // A. Quando você arrasta a bolinha com o dedo/mouse
    barraProgresso.addEventListener('input', function() {
        if (audioNativo.duration > 0) {
            const novoTempo = (this.value / 100) * audioNativo.duration;
            audioNativo.currentTime = novoTempo;
            atualizarCorBarra(this.value);
        }
    });

    // B. Quando o arquivo de áudio carrega (pega o tempo total de 30s)
    audioNativo.addEventListener('loadedmetadata', () => {
        if (tempoTotalText) {
            tempoTotalText.innerText = formatarTempo(audioNativo.duration);
        }
    });

    // C. Enquanto a música toca (faz a barra e o relógio andarem)
    audioNativo.addEventListener('timeupdate', () => {
        if (audioNativo.duration) {
            // Atualiza o relógio
            if (tempoAtualText) tempoAtualText.innerText = formatarTempo(audioNativo.currentTime);
            
            // Atualiza a posição da bolinha
            const porcentagem = (audioNativo.currentTime / audioNativo.duration) * 100;
            barraProgresso.value = porcentagem;
            
            // Atualiza a cor verde preenchendo a barra
            atualizarCorBarra(porcentagem); 
        }
    });

    // D. Quando a música acaba (volta pro ícone de Play e zera tudo)
    audioNativo.addEventListener('ended', () => {
        const iconeMini = document.getElementById('mini-icone-play');
        
        // Retorna o ícone para Play
        if (iconeMini) {
            if (iconeMini.tagName.toLowerCase() === 'img') {
                iconeMini.src = "/static/img/play.png";
            } else {
                iconeMini.innerHTML = svgPlay;
                iconeMini.style.marginLeft = "3px";
            }
        }

        // Zera os relógios e a barra
        barraProgresso.value = 0;
        atualizarCorBarra(0);
        if (tempoAtualText) tempoAtualText.innerText = "0:00";
    });
}

let imagensCapa = [];
let indiceImagemAtual = 0;

// 1. Lê os arquivos selecionados
function carregarFoto(event) {
    const files = event.target.files;
    const alerta = document.getElementById('alerta-fotos');
    
    // Reseta as imagens caso a pessoa clique para enviar de novo
    imagensCapa = []; 
    indiceImagemAtual = 0;

    // Trava em 4 fotos
    if (files.length > 4) {
        alerta.style.display = 'block';
        event.target.value = ''; // Limpa a seleção
        return;
    } else {
        alerta.style.display = 'none';
    }

    if (files.length === 0) return;

    let fotosCarregadas = 0;

    // Converte cada foto em um link que o navegador consiga ler
    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagensCapa.push(e.target.result);
            fotosCarregadas++;
            
            // Só atualiza a tela quando terminar de ler todas as fotos
            if (fotosCarregadas === files.length) {
                atualizarPreviewImagem();
            }
        };
        reader.readAsDataURL(files[i]);
    }
}

// 2. Joga a foto certa na tela
function atualizarPreviewImagem() {
    if (imagensCapa.length === 0) return;

    const img = document.getElementById('preview-foto');
    const placeholder = document.getElementById('placeholder-texto');
    const controles = document.getElementById('controles-imagem');

    // Troca a imagem
    img.src = imagensCapa[indiceImagemAtual];
    img.style.display = 'block';
    if (placeholder) placeholder.style.display = 'none';

    // Se tiver mais de 1 foto, mostra as setinhas, se não, esconde
    if (controles) {
        controles.style.display = imagensCapa.length > 1 ? 'flex' : 'none';
    }
}

let imagemAtual = 0; 

function proximaImagem() {
    if (arrayCapasMockup.length <= 1) return;

    imagemAtual++;
    if (imagemAtual >= arrayCapasMockup.length) {
        imagemAtual = 0;
    }

    trocarImagemComAnimacao(arrayCapasMockup[imagemAtual]);
}

function imagemAnterior() {
    if (arrayCapasMockup.length <= 1) return;

    imagemAtual--;
    if (imagemAtual < 0) {
        imagemAtual = arrayCapasMockup.length - 1;
    }

    trocarImagemComAnimacao(arrayCapasMockup[imagemAtual]);
}

// === A FUNÇÃO DA MÁGICA DO FADE ===
function trocarImagemComAnimacao(novaSrc) {
    const imgMockupPlayer = document.getElementById('preview-foto');
    
    if (imgMockupPlayer) {
        // 1. Aplica a classe que faz a opacidade ir para 0 (fade out)
        imgMockupPlayer.classList.add('efeito-fade');
        
        // 2. Espera exatos 300 milissegundos (o mesmo tempo do CSS) para trocar a foto escondida e fazê-ela aparecer (fade in)
        setTimeout(() => {
            imgMockupPlayer.src = novaSrc;
            imgMockupPlayer.classList.remove('efeito-fade');
        }, 300); 
    }
}
function atualizarContador(idInput, idContador) {
    const input = document.getElementById(idInput);
    const contador = document.getElementById(idContador);
    const limite = input.getAttribute('maxlength');
    
    contador.innerText = `${input.value.length}/${limite}`;

    // Efeitinho visual: se chegar perto do limite, fica laranjinha
    if (input.value.length >= limite) {
        contador.style.color = "#1ed760"; // Cor de sucesso/limite
    } else {
        contador.style.color = "#a8b2d1";
    }
}