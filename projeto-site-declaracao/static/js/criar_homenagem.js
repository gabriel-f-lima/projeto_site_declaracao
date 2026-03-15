
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
// 3. BUSCA DE MÚSICA (iTunes API)
// ==========================================================================
let timerBusca;
function buscarMusica() {
    const termo = document.getElementById('nome_musica').value;
    const lista = document.getElementById('lista-resultados');

    if (termo.length < 2) {
        lista.style.display = 'none';
        return;
    }

    clearTimeout(timerBusca);
    timerBusca = setTimeout(async () => {
        try {
            const resposta = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(termo)}&entity=song&limit=5`);
            const dados = await resposta.json();
            lista.innerHTML = '';

            if (dados.results.length > 0) {
                lista.style.display = 'block';
                dados.results.forEach(musica => {
                    const li = document.createElement('li');
                    const capaAlta = musica.artworkUrl100.replace('100x100bb', '300x300bb');
                    li.innerHTML = `
                        <img src="${capaAlta}">
                        <div class="info-musica-busca">
                            <span class="titulo-busca">${musica.trackName}</span>
                            <span class="artista-busca">${musica.artistName}</span>
                        </div>`;
                    li.onclick = () => selecionarMusica(musica.trackName, musica.artistName, capaAlta);
                    lista.appendChild(li);
                });
            } else {
                lista.style.display = 'none';
            }
        } catch (e) { console.error(e); }
    }, 500);
}

function selecionarMusica(nome, artista, urlCapa) {
    document.getElementById('nome_musica').value = nome;
    
    // Atualiza Mockup
    const previewFoto = document.getElementById('preview-foto');
    const placeholder = document.getElementById('placeholder-texto');
    const previewTitulo = document.getElementById('preview-titulo');

    if(previewFoto) {
        previewFoto.src = urlCapa;
        previewFoto.style.display = 'block';
    }
    if(placeholder) placeholder.style.display = 'none';
    if(previewTitulo) previewTitulo.innerText = nome;

    document.getElementById('lista-resultados').style.display = 'none';
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