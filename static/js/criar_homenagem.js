
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

let animacaoTitulo, animacaoDesc;

function digitarTexto(elementoId, texto, velocidade = 35) {
    const elemento = document.getElementById(elementoId);
    if (!elemento) return;
    
    elemento.innerHTML = ""; 
    let i = 0;
    
    return setInterval(() => {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
        }
    }, velocidade);
}

function aplicarTextos(tipo) {
    const textos = textosPersonalizados[tipo] || textosPersonalizados['padrao'];
    
    clearInterval(animacaoTitulo);
    clearInterval(animacaoDesc);
    
    const elLabelPara = document.getElementById('label-nome-para');
    const elInputTitulo = document.getElementById('titulo');

    if(elLabelPara) elLabelPara.innerText = textos.labelPara;
    if(elInputTitulo) elInputTitulo.placeholder = textos.placeholderTitulo;

    animacaoTitulo = digitarTexto('passo1-titulo', textos.titulo, 40);
    setTimeout(() => {
        animacaoDesc = digitarTexto('passo1-desc', textos.descricao, 25);
    }, 400); 
}

function escolherTipoTela(tipo) {
    tipoSelecionadoAtual = tipo; 
    aplicarTextos(tipo);
    
    document.getElementById('passo-0').classList.remove('ativo');
    document.getElementById('passo-1').classList.add('ativo');
    
    const barra = document.querySelector('.progresso-passos');
    if(barra) barra.style.display = 'flex';
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
        if(p0) p0.classList.add('ativo');
        if(barraProgresso) barraProgresso.style.display = 'none';
    } else {
        aplicarTextos(tipoPresente);
        document.getElementById('passo-1').classList.add('ativo');
        if(barraProgresso) barraProgresso.style.display = 'flex';
    }

    // Listeners de Input para o Mockup
    const inputDe = document.getElementById('nome_de');
    const inputPara = document.getElementById('nome_para');
    const inputTitulo = document.getElementById('titulo');

    if(inputDe) inputDe.addEventListener('input', (e) => {
        document.getElementById('preview-de').innerText = `De: ${e.target.value || '...'}`;
    });

    if(inputPara) inputPara.addEventListener('input', (e) => {
        document.getElementById('preview-topo').innerText = `PARA: ${e.target.value.toUpperCase() || '...'}`;
    });

    if(inputTitulo) inputTitulo.addEventListener('input', (e) => {
        document.getElementById('preview-titulo').innerText = e.target.value || 'Seu Título Aqui';
    });
});

// Funções Auxiliares
function abrirEspiadinha() { document.querySelector('.editor-preview-panel').classList.add('modo-modal'); }
function fecharEspiadinha() { document.querySelector('.editor-preview-panel').classList.remove('modo-modal'); }

function carregarFoto(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const img = document.getElementById('preview-foto');
        img.src = reader.result;
        img.style.display = 'block';
        document.getElementById('placeholder-texto').style.display = 'none';
    };
    if (event.target.files[0]) reader.readAsDataURL(event.target.files[0]);
}

function mudarPasso(atual, proximo) {
    document.getElementById('passo-' + atual).classList.remove('ativo');
    document.getElementById('passo-' + proximo).classList.add('ativo');
    
    const bolinhas = document.querySelectorAll('.passo-bolinha');
    bolinhas.forEach((b, i) => {
        if (i < proximo) b.classList.add('ativo');
        else b.classList.remove('ativo');
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function atualizarLetra() {
    const texto = document.getElementById('letra_musica').value;
    const preview = document.getElementById('preview-letra');
    
    if(texto.trim() === '') {
        preview.innerHTML = 'Sua mensagem aparecerá aqui...';
    } else {
        // O replace(/\n/g, '<br>') pega todos os "Enters" e transforma em quebra de linha real
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
    // Esconde o passo atual no formulário da esquerda e mostra o próximo
    document.getElementById(`passo-${atual}`).classList.remove('ativo');
    document.getElementById(`passo-${proximo}`).classList.add('ativo');

    // Atualiza o progresso das bolinhas em cima
    const bolinhaAtual = document.getElementById(`bolinha-${atual}`);
    const bolinhaProxima = document.getElementById(`bolinha-${proximo}`);
    if(bolinhaAtual) bolinhaAtual.classList.remove('ativo');
    if(bolinhaProxima) bolinhaProxima.classList.add('ativo');

    // MÁGICA DO MOCKUP: Troca a interface do celular
    const uiMusica = document.querySelector('.app-musica-ui');
    const uiTimeline = document.querySelector('.app-timeline-ui');
    
    if (uiMusica && uiTimeline) {
        if (proximo === 3) {
            // Se foi para o passo 3, mostra a linha do tempo!
            uiMusica.style.display = 'none';
            uiTimeline.style.display = 'flex';
        } else {
            // Se voltou para 1 ou 2, mostra o Spotify de novo
            uiMusica.style.display = 'block'; 
            uiTimeline.style.display = 'none';
        }
    }
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
    
    divForm.innerHTML = `
        <label class="foto-preview-box" for="input-foto-${id}" title="Clique para escolher uma foto">
            <span id="icone-foto-${id}">📷</span>
            <img id="img-preview-${id}" src="">
        </label>
        <input type="file" id="input-foto-${id}" accept="image/*" style="display: none;" onchange="previewFotoLinhaTempo(event, ${id})">
        
        <div class="foto-info">
            <input type="text" placeholder="Data marcante" class="input-data" oninput="atualizarMockupTimeline(${id}, 'data', this.value)">
            <input type="text" placeholder="Escreva uma mensagem especial..." class="input-legenda" maxlength="100" oninput="atualizarMockupTimeline(${id}, 'texto', this.value)">
        </div>
        
        <button type="button" class="btn-remover-foto" onclick="removerFoto(${id})" title="Apagar foto">✖</button>
    `;
    containerForm.appendChild(divForm);

    // 2. ADICIONA O ESPELHO NO MOCKUP DO CELULAR (DIREITA)
    const containerMockup = document.getElementById('preview-timeline');
    if(containerMockup) {
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

    verificarLimiteFotos(); // Verifica se precisa esconder o botão
}

// Pega a foto do PC/Celular e joga no Formulário E no Mockup
function previewFotoLinhaTempo(event, id) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgForm = document.getElementById(`img-preview-${id}`);
            const iconeForm = document.getElementById(`icone-foto-${id}`);
            if(imgForm) { imgForm.src = e.target.result; imgForm.style.display = 'block'; }
            if(iconeForm) iconeForm.style.display = 'none';

            const imgMockup = document.getElementById(`mockup-img-${id}`);
            const placeholderMockup = document.getElementById(`mockup-placeholder-${id}`);
            if(imgMockup) { imgMockup.src = e.target.result; imgMockup.style.display = 'block'; }
            if(placeholderMockup) placeholderMockup.style.display = 'none';
        }
        reader.readAsDataURL(file);
    }
}

// Quando a pessoa digita, o texto vai pro celular na mesma hora
function atualizarMockupTimeline(id, campo, valor) {
    const elementoMockup = document.getElementById(`mockup-${campo}-${id}`);
    if(elementoMockup) {
        const placeholder = campo === 'data' ? 'Sua data...' : 'Sua mensagem aparecerá aqui...';
        elementoMockup.innerText = valor || placeholder;
    }
}

// Remove do Form e do Celular ao mesmo tempo
function removerFoto(id) {
    const itemForm = document.getElementById(`foto-item-${id}`);
    const itemMockup = document.getElementById(`mockup-item-${id}`);
    if(itemForm) itemForm.remove();
    if(itemMockup) itemMockup.remove();
    
    fotosAtivas--; // Diminui a contagem
    verificarLimiteFotos(); // Verifica se o botão pode voltar a aparecer
}

// Esconde ou mostra o botão de adicionar fotos dependendo do limite
function verificarLimiteFotos() {
    const btnAdicionar = document.querySelector('.btn-adicionar-foto');
    if (btnAdicionar) {
        if (fotosAtivas >= MAX_FOTOS) {
            btnAdicionar.style.display = 'none'; // Esconde o botão se chegou a 6
        } else {
            btnAdicionar.style.display = 'block'; // Mostra novamente se for menor que 6
        }
    }
}

// Função temporária apenas para não dar erro ao clicar em "Finalizar"
function finalizarHomenagem() {
    alert("Incrível! Tudo pronto para capturar os dados e salvar no servidor. 🚀");
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
                    
                    // Montando o visual da lista. Mantive a cor do título verde (#1ed760) para dar aquele "ar" de Spotify
                    div.innerHTML = `
                        <img src="${capaAltaQualidade}" style="width: 40px; height: 40px; border-radius: 4px; object-fit: cover; flex-shrink: 0;">
                        <div style="display: flex; flex-direction: column; overflow: hidden;">
                            <span style="font-weight: bold; font-size: 14px; color: #1ed760; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${nomeMusica}</span>
                            <span style="font-size: 12px; color: #a8b2d1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${nomeArtista}</span>
                        </div>
                    `;
                    
                    div.onclick = () => selecionarMusica(nomeMusica, nomeArtista, capaAltaQualidade);
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

// Função que joga os dados pra tela e pros inputs invisíveis quando a pessoa clica na música
function selecionarMusica(nome, artista, capa) {
    document.getElementById('busca_musica').value = `${nome} - ${artista}`;
    document.getElementById('resultado-musicas').style.display = 'none';
    
    // Atualiza os campos ocultos que vão ser enviados pro servidor Python depois
    document.getElementById('musica_nome').value = nome;
    document.getElementById('musica_artista').value = artista;
    document.getElementById('musica_capa').value = capa;

    // Atualiza o Mockup do Celular que você criou!
    const containerMusicaApi = document.getElementById('mockup-musica-container');
    const mockTituloApi = document.getElementById('mockup-musica-titulo-api');
    const mockArtistaApi = document.getElementById('mockup-musica-artista-api');
    const mockCapaApi = document.getElementById('mockup-musica-capa-api');
    
    if(containerMusicaApi) containerMusicaApi.style.display = 'flex'; 
    if(mockTituloApi) mockTituloApi.innerText = nome;
    if(mockArtistaApi) mockArtistaApi.innerText = artista;
    if(mockCapaApi) mockCapaApi.src = capa;
}

let intervaloContador; // Variável global para limpar o relógio se a pessoa trocar a data

document.getElementById('data_conheceram').addEventListener('change', function() {
    const dataInput = this.value;
    const display = document.getElementById('mockup-contador-dias');
    
    if (!dataInput || !display) return;

    // Se já existir um relógio rodando (porque a pessoa escolheu outra data antes), nós paramos ele
    if (intervaloContador) clearInterval(intervaloContador);

    // Pega a data inicial (vamos assumir que o "dia 1" começou à meia-noite)
    const dataInicio = new Date(dataInput + 'T00:00:00').getTime();

    // Cria o loop que vai rodar e atualizar a tela a cada 1 segundo (1000ms)
    intervaloContador = setInterval(function() {
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

function selecionarMusica(nome, artista, capa) {
    document.getElementById('busca_musica').value = `${nome} - ${artista}`;
    document.getElementById('resultado-musicas').style.display = 'none';
    
    // Atualiza os campos ocultos pro servidor
    document.getElementById('musica_nome').value = nome;
    document.getElementById('musica_artista').value = artista;
    document.getElementById('musica_capa').value = capa;

    // Atualiza a NOVA div no Mockup do Celular
    const containerMusicaApi = document.getElementById('mockup-musica-container');
    const mockTituloApi = document.getElementById('mockup-musica-titulo-api');
    const mockArtistaApi = document.getElementById('mockup-musica-artista-api');
    const mockCapaApi = document.getElementById('mockup-musica-capa-api');
    
    if(containerMusicaApi) containerMusicaApi.style.display = 'flex'; // Torna a div visível
    if(mockTituloApi) mockTituloApi.innerText = nome;
    if(mockArtistaApi) mockArtistaApi.innerText = artista;
    if(mockCapaApi) mockCapaApi.src = capa;
}