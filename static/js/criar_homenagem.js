// =========================================================
// ATUALIZAÇÃO DO MOCKUP (CELULARZINHO) EM TEMPO REAL
// =========================================================

function atualizarPreview() {
    // 1. Pegamos os valores digitados nos inputs
    const nomeDe = document.getElementById('nome_de')?.value || '';
    const nomePara = document.getElementById('nome_para')?.value || '';
    const titulo = document.getElementById('titulo')?.value || '';
    
    // 2. Pegamos os elementos do mockup que vão receber os textos
    const previewTopo = document.getElementById('preview-topo');
    const previewDe = document.getElementById('preview-de');
    const previewTitulo = document.getElementById('preview-titulo');
    
    // 3. Atualizamos o Topo (PARA: ...)
    if (previewTopo) {
        previewTopo.innerText = nomePara ? `PARA: ${nomePara.toUpperCase()}` : "PARA: ...";
    }

    // 4. Atualizamos o campo "De: ..."
    if (previewDe) {
        previewDe.innerText = nomeDe ? `De: ${nomeDe}` : "De: ...";
    }

    // 5. Atualizamos o Título da Música
    if (previewTitulo) {
        previewTitulo.innerText = titulo ? titulo : "Seu Título Aqui";
    }

    // 6. Atualizamos os dados da Música (se já tiver sido escolhida/carregada do localStorage)
    const musicaNome = document.getElementById('musica_nome')?.value;
    const musicaArtista = document.getElementById('musica_artista')?.value;
    const musicaCapa = document.getElementById('musica_capa')?.value;

    if (musicaNome && document.getElementById('mockup-musica-titulo-api')) {
        document.getElementById('mockup-musica-titulo-api').innerText = musicaNome;
    }
    
    if (musicaArtista && document.getElementById('mockup-musica-artista-api')) {
        document.getElementById('mockup-musica-artista-api').innerText = musicaArtista;
    }

    if (musicaCapa) {
        const capaMockup = document.getElementById('mockup-musica-capa-api'); // Mini capa inferior
        const capaPrincipal = document.getElementById('preview-foto'); // Capa grande
        const placeholder = document.getElementById('placeholder-texto'); // Texto "Sua foto aparecerá aqui"

        if (capaMockup) capaMockup.src = musicaCapa;
        
        if (capaPrincipal) {
            capaPrincipal.src = musicaCapa;
            capaPrincipal.style.display = 'block'; // Garante que a imagem apareça
            if (placeholder) placeholder.style.display = 'none'; // Esconde o texto
        }
    }
    
    // Salva o progresso no LocalStorage toda vez que o preview atualizar
    // (Pode comentar a linha abaixo se quiser salvar apenas ao mudar de passo)
    salvarProgresso(1); 
}

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
function animarEscrita(elementoId, texto) {
    const elemento = document.getElementById(elementoId);
    if (!elemento) return;

    elemento.innerHTML = ""; // Limpamos com innerHTML
    let i = 0;

    function escrever() {
        if (i < texto.length) {
            // Se for um espaço, usamos o código de espaço do HTML para garantir que ele apareça
            if (texto.charAt(i) === " ") {
                elemento.innerHTML += "&nbsp;";
            } else {
                elemento.innerHTML += texto.charAt(i);
            }

            i++;
            setTimeout(escrever, 35); // Velocidade de 35ms fica bem natural
        }
    }
    escrever();
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
    // Verifica qual tipo a pessoa escolheu lá no Passo 1. Se não achar, usa 'padrao'
    const tipo = (typeof tipoSelecionadoAtual !== 'undefined') ? tipoSelecionadoAtual : 'padrao';
    const lista = sugestoesMensagens[tipo] || sugestoesMensagens['padrao'];
    
    const inputMensagem = document.getElementById('mensagem_especial');
    if (!inputMensagem) return;

    const msgAtual = inputMensagem.value;
    let msgSorteada;

    // Sorteia nova mensagem garantindo que não repete a mesma duas vezes seguidas
    do {
        msgSorteada = lista[Math.floor(Math.random() * lista.length)];
    } while (msgSorteada === msgAtual && lista.length > 1);

    // Preenche a caixa de texto
    inputMensagem.value = msgSorteada;

    // Atualiza o celularzinho na hora!
    atualizarPreviewLetra();
}

// =========================================================
// ATUALIZA O CELULARZINHO COM O QUE FOI DIGITADO NA CARTA
// =========================================================
function atualizarPreviewLetra() {
    const input = document.getElementById('mensagem_especial');
    const preview = document.getElementById('preview-letra');
    const contador = document.getElementById('contador_letra');

    if (!input || !preview) return;

    const texto = input.value;

    // Atualiza o contador visual (se existir no HTML)
    if (contador) {
        contador.innerText = `${texto.length} / 600 caracteres`;
    }

    // Atualiza o preview no celular preservando as quebras de linha (sua ótima ideia!)
    if (texto.trim() === '') {
        preview.innerHTML = 'Sua mensagem aparecerá aqui...';
    } else {
        preview.innerHTML = texto.replace(/\n/g, '<br>');
    }

    // Salva no LocalStorage
    if (typeof salvarProgresso === 'function') salvarProgresso(4);
}

// =========================================================
// FUNÇÃO DE ABRIR/FECHAR A LETRA (MANTIDA, ESTÁ PERFEITA)
// =========================================================
function toggleLetra() {
    const card = document.getElementById('card-letra');
    if (card) {
        card.classList.toggle('expandido');
    }
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
function mudarPasso(passoAtual, proximoPasso) {
    const elAtual = document.getElementById(`passo-${passoAtual}`);
    const elProximo = document.getElementById(`passo-${proximoPasso}`);

    if (elAtual && elProximo) {
        // 1. Esconde o atual com um efeito de sumiço
        elAtual.style.opacity = "0";

        setTimeout(() => {
            elAtual.classList.remove('ativo');
            elAtual.style.display = "none";

            // 2. Prepara o próximo (mostra mas deixa transparente para o efeito)
            elProximo.style.display = "block";
            elProximo.style.opacity = "0";

            setTimeout(() => {
                elProximo.classList.add('ativo');
                elProximo.style.opacity = "1";

                // 3. AGORA sim, com o container visível, disparar os textos
                const textos = {
                    1: { titulo: "Quem são vocês?", desc: "Insira os nomes para personalizar a homenagem." },
                    2: { titulo: "Momento Especial", desc: "Quando e onde tudo começou?" },
                    3: { titulo: "Título da Homenagem", desc: "Como você quer chamar essa página?" },
                    4: { titulo: "Mensagem e música", desc: "Escolha a trilha sonora perfeita para este momento." },
                    5: { titulo: "Fotos de Capa", desc: "Selecione até 4 fotos lindas para a capa do seu álbum." },
                    6: { titulo: "Nossas Memórias 📸", desc: "Adicione fotos e crie uma linha do tempo com seus melhores momentos." },
                    7: { titulo: "Sua Retrospectiva Interativa 🎡", desc: "Adicione 10 fotos especiais para os jogos finais." },
                    8: { titulo: "Quase Lá...", desc: "Finalize os detalhes da sua homenagem." } // Adicionei o passo 8 caso precise
                };

                if (textos[proximoPasso]) {
                    const elTitulo = document.getElementById(`titulo-passo-${proximoPasso}`);
                    const elDesc = document.getElementById(`desc-passo-${proximoPasso}`);

                    // RESET TOTAL: Garante que ambos comecem invisíveis e limpos ao mudar de passo
                    if (elTitulo) {
                        elTitulo.style.opacity = "0";
                        elTitulo.innerHTML = "";
                    }
                    if (elDesc) {
                        elDesc.style.opacity = "0";
                        elDesc.innerHTML = "";
                    }

                    // 1. Mostra o título e começa a escrever
                    setTimeout(() => {
                        if (elTitulo) {
                            elTitulo.style.opacity = "1"; // Agora ele fica visível
                            animarEscrita(`titulo-passo-${proximoPasso}`, textos[proximoPasso].titulo);
                        }
                    }, 100); // Pequeno delay para garantir que a transição de página terminou

                    // 2. Mostra a descrição e começa a escrever depois do título
                    setTimeout(() => {
                        if (elDesc) {
                            elDesc.style.opacity = "1"; // Agora ela fica visível
                            animarEscrita(`desc-passo-${proximoPasso}`, textos[proximoPasso].desc);
                        }
                    }, 1200);
                }
                salvarProgresso(passoAtual)

                // ==========================================
                // LÓGICA DA RETROSPECTIVA (STORIES)
                // ==========================================
                
                // Se a pessoa acabou de entrar no Passo 7
                if (proximoPasso === 7) {
                    abrirMockupRetro();
                }

                // Se a pessoa saiu do Passo 7 (voltou pro 6 ou foi pro 8)
                if (passoAtual === 7 && proximoPasso !== 7) {
                    fecharMockupRetro();
                }

                atualizarVisualStepper(proximoPasso);

            }, 50);
        }, 300); // Tempo para o fade-out do passo anterior
    }
}

window.onload = () => {
    // 1. Garantimos que o Passo 0 está visível, mas os textos começam limpos
    const t0 = document.getElementById('titulo-passo-0');
    const d0 = document.getElementById('desc-passo-0');

    if (t0 && d0) {
        // 2. "Ligamos a luz" (opacity) e começamos a digitar
        t0.style.opacity = "1";
        animarEscrita('titulo-passo-0', "Para quem é o presente?");

        setTimeout(() => {
            d0.style.opacity = "1";
            animarEscrita('desc-passo-0', "Escolha uma opção para começarmos a criar algo especial.");
        }, 1000);
    }
};
function atualizarVisualStepper(passoDestino) {
    // Seleciona todas as bolinhas e linhas
    const steps = document.querySelectorAll('.step');
    const lines = document.querySelectorAll('.step-line');

    steps.forEach((step, index) => {
        // Pega o número do passo pelo ID (ex: step-1 -> 1)
        const stepNum = parseInt(step.id.replace('step-', ''));

        if (stepNum <= passoDestino) {
            step.classList.add('ativo');
        } else {
            step.classList.remove('ativo');
        }
    });

    lines.forEach((line, index) => {
        // A linha entre o passo 0 e 1 é a linha index 0
        if (index < passoDestino) {
            line.classList.add('ativa');
        } else {
            line.classList.remove('ativa');
        }
    });
}

function escolherTipoTela(tipo) {
    // 1. Mostra o Stepper que estava escondido
    const stepper = document.getElementById('main-stepper');
    if (stepper) stepper.classList.remove('hidden');

    // 2. Chama a mudança de passo do 0 para o 1
    // Isso vai disparar aquela lógica de opacidade que criamos
    mudarPasso(0, 1);

    // 3. (Opcional) Salva o tipo escolhido para usar depois
    console.log("Tipo escolhido:", tipo);
}
let contadorFotos = 0; 
let fotosAtivas = 0;   
const MAX_FOTOS = 6;   

function adicionarNovaFoto() {
    // Trava silenciosa: se já tem 6, ele simplesmente não faz nada (sem alert)
    if (fotosAtivas >= MAX_FOTOS) return;

    contadorFotos++;
    fotosAtivas++;
    const id = contadorFotos;

    // 1. ADICIONA O CARD NO FORMULÁRIO (Agora com as classes do estilo Polaroid)
    const containerForm = document.getElementById('container-fotos');
    const divForm = document.createElement('div');
    divForm.className = 'foto-item';
    divForm.id = `foto-item-${id}`;

    divForm.innerHTML = `
        <div class="foto-preview-box">
            <label for="input-foto-${id}" title="Clique para escolher uma foto" style="display:block; width:100%; height:100%; cursor:pointer;">
                <span id="icone-foto-${id}" style="display:block; text-align:center; padding-top: 50px; color: rgba(0,0,0,0.3); font-size: 24px;">📷</span>
                <img id="img-preview-${id}" src="" style="display: none; width: 100%; height: 100%; object-fit: cover; border-radius: 2px;">
            </label>
            
            <button type="button" class="btn-remover-foto" onclick="removerFoto(${id})" title="Apagar foto">✖</button>
        </div>
        
        <input type="file" id="input-foto-${id}" accept="image/*" hidden 
               onchange="previewFotoLinhaTempo(event, ${id})">
        
        <div class="foto-info">
            <input type="text" placeholder="Ex: Maio 2024" class="timeline-data" maxlength="20"
                   oninput="atualizarMockupTimeline(${id}, 'data', this.value)">
            
            <input type="text" name="momento_titulo_${id}" placeholder="Escreva uma legenda..." 
                   class="timeline-legenda" maxlength="80" 
                   oninput="atualizarMockupTimeline(${id}, 'texto', this.value); atualizarCaixinhaMemorias()">
        </div>
    `;
    containerForm.appendChild(divForm);

    const containerMockup = document.getElementById('preview-timeline');
    if (containerMockup) {
        const divMockup = document.createElement('div');
        divMockup.className = 'timeline-mockup-item';
        divMockup.id = `mockup-item-${id}`;
        divMockup.innerHTML = `
            <div class="timeline-mockup-img-container">
                <span id="mockup-placeholder-${id}">Sem foto</span>
                <img id="mockup-img-${id}" src="" style="display:none;">
            </div>
            <div class="mockup-info">
                <div class="timeline-mockup-date" id="mockup-data-${id}"></div>
                <div class="timeline-mockup-text" id="mockup-texto-${id}"></div>
            </div>
        `;
        containerMockup.appendChild(divMockup);
    }

    verificarLimiteFotos(); // Esconde o botão se chegar no limite
    
    // Verifica se a função existe antes de chamar para evitar erros
    if(typeof atualizarCaixinhaMemorias === "function") atualizarCaixinhaMemorias(); 
    setTimeout(() => { // Usamos um pequeno delay para garantir que a div já foi inserida na tela
        const fotosTimeline = document.querySelectorAll('#container-fotos .foto-item');
        const btnAddTimeline = document.getElementById('btn-add-timeline');
        
        if (fotosTimeline.length >= 6) {
            btnAddTimeline.style.display = 'none'; // Esconde o botão
        }
    }, 50);
}

// ==========================================================================
// FUNÇÕES DA CAPA DO ÁLBUM (PASSO 5)
// ==========================================================================
let contadorCapas = 0;
let capasAtivas = 0;
const MAX_CAPAS = 4;
let arrayCapasMockup = []; 

function adicionarNovaCapa() {
    if (capasAtivas >= MAX_CAPAS) return;

    contadorCapas++; // Aumenta o contador global
    capasAtivas++;
    
    // Criamos uma constante local para travar o número deste quadrado específico
    const idAtual = contadorCapas; 

    const containerForm = document.getElementById('container-capas');
    const divForm = document.createElement('div');

    divForm.className = 'capa-item';
    divForm.id = `capa-item-${idAtual}`;

    // IMPORTANTE: O 'for' do label e o 'id' do input PRECISAM ser iguais e únicos
    divForm.innerHTML = `
        <label for="input-capa-${idAtual}" title="Clique para escolher uma foto" style="display:block; width:100%; height:100%; cursor:pointer;">
            <span id="icone-capa-${idAtual}" style="display:flex; align-items:center; justify-content:center; height:100%; color: rgba(255,255,255,0.3); font-size: 24px;">📷</span>
            <img id="img-preview-capa-${idAtual}" src="" style="display:none; width:100%; height:100%; object-fit:cover; border-radius:8px;">
        </label>
        
        <input type="file" id="input-capa-${idAtual}" accept="image/*" hidden 
               onchange="previewFotoCapa(event, ${idAtual})">
        
        <button type="button" class="btn-remover-foto" onclick="removerCapa(${idAtual})" title="Apagar foto">✖</button>
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
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        // Cria uma imagem invisível na memória para podermos encolher
        const img = new Image();
        
        img.onload = function() {
            // Prepara um Canvas (uma tela de pintura do navegador)
            const canvas = document.createElement('canvas');
            const MAX_WIDTH = 800; // Limite de tamanho ideal e leve
            
            let width = img.width;
            let height = img.height;

            // Se a foto for maior que 800px, calcula a proporção para encolher
            if (width > MAX_WIDTH) {
                height = height * (MAX_WIDTH / width);
                width = MAX_WIDTH;
            }

            canvas.width = width;
            canvas.height = height;

            // "Pinta" a foto original encolhida dentro do Canvas
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);

            // Transforma a foto numa versão JPEG muito leve (Qualidade 70%)
            const fotoLeve = canvas.toDataURL('image/jpeg', 0.7);

            // Atualiza a imagem na tela com a versão levinha
            const imgPreview = document.getElementById(`img-preview-capa-${id}`);
            const icone = document.getElementById(`icone-capa-${id}`);

            if (imgPreview) {
                imgPreview.src = fotoLeve;
                imgPreview.hidden = false;
                imgPreview.style.display = 'block';
            }

            if (icone) {
                icone.hidden = true;
                icone.style.display = 'none';
            }

            // Atualiza o celularzinho
            if (typeof atualizarMockupCapas === 'function') {
                atualizarMockupCapas();
            }
        };
        
        // Carrega a foto original
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
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

function removerFoto(id) {
    // Apaga do formulário e do celular (mockup)
    const itemForm = document.getElementById(`foto-item-${id}`);
    const itemMockup = document.getElementById(`mockup-item-${id}`);

    if (itemForm) itemForm.remove();
    if (itemMockup) itemMockup.remove();

    fotosAtivas--; // Diminui a contagem oficial
    
    verificarLimiteFotos(); // Atualiza o botão
    atualizarCaixinhaMemorias(); // Reorganiza as 3 miniaturas
}

function verificarLimiteFotos() {
    const btnAdd = document.getElementById('btn-add-timeline');
    const alerta = document.getElementById('alerta-timeline');

    if (fotosAtivas >= MAX_FOTOS) {
        btnAdd.hidden = true;
        alerta.hidden = false;
    } else {
        btnAdd.hidden = false;
        alerta.hidden = true;
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
            const imgFormulario = itensFormulario[i].querySelector('img[id^="img-preview-"]'); // Pega a tag <img> de preview

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

function atualizarMockupTimeline(id, campo, valor) {
    // 1. Atualiza a tela de Preview (o celularzinho)
    // Procura exatamente pelo ID que está dentro do #preview-timeline
    const elementoMockup = document.getElementById(`mockup-${campo}-${id}`);

    if (elementoMockup) {
        const placeholders = {
            'data': 'Ex: Data...',
            'texto': 'Escreva uma legenda...',
            'legenda': 'Escreva uma legenda...'
        };
        // Atualiza o texto no preview. Se apagar tudo, volta o placeholder.
        elementoMockup.innerText = valor || placeholders[campo] || '';
    }

    // 2. Atualiza os títulos gerais da página e do celular
    if (campo === 'titulo_geral') {
        const labelCard = document.getElementById('mockup-timeline-titulo-card');
        const labelTimeline = document.getElementById('mockup-timeline-titulo');
        
        if (labelCard) labelCard.innerText = valor || 'Nossas Memórias';
        if (labelTimeline) labelTimeline.innerText = valor || 'Nossas Memórias';
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
    barraProgresso.addEventListener('input', function () {
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



let storyAtual = 0;

// ==========================================
// FUNÇÕES DE CONTROLE DO MOCKUP RETRO
// ==========================================

function abrirMockupRetro() {
    // 1. Esconde a tela normal do mockup e mostra os stories
    document.getElementById('tela-retro-mockup').style.display = 'block';
    // Aqui você pode adicionar um ID à div principal do celular para escondê-la, 
    // Ex: document.getElementById('tela-principal-mockup').style.display = 'none';
    atualizarCarrosselMockup();
    
    // 2. Toca a música escolhida (o navegador permite porque foi ativado por um clique)
    let audio = document.getElementById('audio-retrospectiva');
    
    // NOTA: Certifique-se de que o audio.src recebe o arquivo upado no passo de música
    // Ex: audio.src = URL.createObjectURL(inputArquivoMusica.files[0]);
    if (audio.src) {
        audio.play().catch(erro => console.log("O autoplay da música foi bloqueado:", erro));
    }

    // 3. Reseta os stories para o primeiro
    storyAtual = 0;
    atualizarStoriesVisuais();
}

function fecharMockupRetro() {
    // 1. Pega a tela e esconde
    const telaRetro = document.getElementById('tela-retro-mockup');
    if (telaRetro) {
        telaRetro.style.display = 'none';
    }
    
    // 2. Pega o áudio e pausa com segurança (só pausa se ele existir e estiver tocando)
    const audio = document.getElementById('audio-retrospectiva');
    if (audio && !audio.paused) {
        audio.pause();
    }
}

// Navegação entre os 4 stories
function mudarStory(direcao) {
    const slides = document.querySelectorAll('.story-slide');
    
    storyAtual += direcao;
    
    // Trava para não passar do primeiro ou do último
    if (storyAtual < 0) storyAtual = 0;
    if (storyAtual >= slides.length) storyAtual = slides.length - 1;
    
    atualizarStoriesVisuais();
}

function atualizarStoriesVisuais() {
    const slides = document.querySelectorAll('.story-slide');
    const barras = document.querySelectorAll('.progress-fill');
    
    // Atualiza Slides
    slides.forEach((slide, index) => {
        if (index === storyAtual) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    
    // Atualiza Barrinhas
    barras.forEach((barra, index) => {
        if (index <= storyAtual) {
            barra.classList.add('active-fill');
        } else {
            barra.classList.remove('active-fill');
        }
    });
}

/* =========================================
   FUNÇÕES DO PASSO 7 (JOGOS / HISTÓRIAS)
   ========================================= */
// Limites definidos no HTML
const MAX_FOTOS_DESLIZAR = 6;
const MAX_FOTOS_GARRA = 4;

// Contadores internos para sabermos quantos IDs únicos já geramos
let idContadorDeslizar = 0;
let idContadorGarra = 0;

// Variáveis para guardar as imagens selecionadas
let arquivosDeslizar = [];
let arquivosGarra = [];

// ==========================================
// SEÇÃO: FOTOS PARA DESLIZAR (PILHA COM SWIPE)
// ==========================================

let indexCartaoTopo = 0; // Guardamos o index da foto que está no topo

// Variáveis para detectar o swipe (deslize do dedo)
let startX = 0;
let endX = 0;
const threshold = 60; // Distância mínima para considerar um swipe

document.getElementById('input-foto-deslizar').addEventListener('change', function(event) {
    const files = Array.from(event.target.files);
    const container = document.getElementById('container-retro-deslizar');
    const badge = document.getElementById('contador-deslizar');
    
    const espacoDisponivel = MAX_FOTOS_DESLIZAR - arquivosDeslizar.length;
    const arquivosPermitidos = files.slice(0, espacoDisponivel);

    arquivosPermitidos.forEach(file => {
        idContadorDeslizar++;
        const currentId = idContadorDeslizar;
        const reader = new FileReader();
        
        reader.onload = (e) => {
            const urlImagem = e.target.result;
            arquivosDeslizar.push({ id: currentId, file: file, url: urlImagem, titulo: '', descricao: '' });

            const divCard = document.createElement('div');
            divCard.className = 'item-foto-linha';
            divCard.id = `retro-deslizar-${currentId}`;
            divCard.innerHTML = `
                <img src="${urlImagem}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px; max-height: 200px;">
                
                <div class="inputs-textos">
                    <input type="text" placeholder="Ex: Nosso Universo Particular" maxlength="40" oninput="atualizarTextosMockup(${currentId}, 'titulo', this.value)">
                    <textarea placeholder="Na imensidão da noite..." rows="3" maxlength="120" oninput="atualizarTextosMockup(${currentId}, 'descricao', this.value)"></textarea>
                </div>

                <button type="button" class="btn-remover-foto-deslizar" title="Remover foto" onclick="removerFotoDeslizar(${currentId})">
                    ✖
                </button>
            `;
            container.appendChild(divCard);
            
            if(badge) badge.innerText = `${arquivosDeslizar.length}/${MAX_FOTOS_DESLIZAR}`;
            atualizarVisibilidadeDeslizar(arquivosDeslizar.length);
            verificarLimiteDeslizar();
            renderizarPilhaMockup(); // Recria a pilha no mockup
        };
        reader.readAsDataURL(file);
    });
    event.target.value = '';
});

// Função para atualizar Título/Descrição
function atualizarTextosMockup(id, campo, valor) {
    const item = arquivosDeslizar.find(i => i.id === id);
    if (item) {
        item[campo] = valor;
        const elementoMockup = document.getElementById(`mockup-${campo}-deslizar-${id}`);
        if (elementoMockup) {
            elementoMockup.innerText = valor;
        }
    }
}

// Remover foto
function removerFotoDeslizar(id) {
    const div = document.getElementById(`retro-deslizar-${id}`);
    if (div) div.remove();
    arquivosDeslizar = arquivosDeslizar.filter(item => item.id !== id);
    
    const badge = document.getElementById('contador-deslizar');
    if(badge) badge.innerText = `${arquivosDeslizar.length}/${MAX_FOTOS_DESLIZAR}`;
    
    if(arquivosDeslizar.length > 0 && indexCartaoTopo >= arquivosDeslizar.length) {
        indexCartaoTopo = arquivosDeslizar.length - 1;
    }
    
    atualizarVisibilidadeDeslizar(arquivosDeslizar.length);
    renderizarPilhaMockup();
    verificarLimiteDeslizar();
}

// ==========================================
// FUNÇÕES DE EXIBIÇÃO DA PILHA (MOCKUP)
// ==========================================

function renderizarPilhaMockup() {
    const container = document.getElementById('mockup-carrosel-deslizar');
    if (!container) return; // Segurança para não dar erro
    
    const containerPai = container.parentElement; 
    container.innerHTML = '';

    if (arquivosDeslizar.length === 0) {
        container.innerHTML = '<p style="color: #888; margin-top: 20px;">Adicione fotos para começar.</p>';
        container.style.justifyContent = 'center';
        return;
    }
    
    container.style.justifyContent = 'flex-start';

    arquivosDeslizar.forEach((item, index) => {
        const divItem = document.createElement('div');
        divItem.className = 'retro-pilha-item'; 
        divItem.id = `retro-mockup-item-${index}`; 

        divItem.innerHTML = `
            <div class="mockup-texto-deslizar">
                <h4 id="mockup-titulo-deslizar-${item.id}">${item.titulo || ''}</h4>
                <p id="mockup-descricao-deslizar-${item.id}">${item.descricao || ''}</p>
            </div>
            <img src="${item.url}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
        `;
        container.appendChild(divItem);
    });

    // CRIAÇÃO DO BOTÃO "Próxima Seção" NO LUGAR CERTO!
    let btnProxima = document.getElementById('btn-proxima-pilha');
    if (!btnProxima) {
        btnProxima = document.createElement('button');
        btnProxima.id = 'btn-proxima-pilha';
        btnProxima.className = 'btn-proxima-secao';
        btnProxima.innerText = 'Próxima Seção ➔';
        
        btnProxima.onclick = () => {
            btnProxima.style.display = 'none';
            const telaDeslizar = document.getElementById('mockup-carrosel-deslizar').parentElement; 
            if(telaDeslizar) telaDeslizar.style.display = 'none';
            
            const telaGarra = document.getElementById('tela-mockup-garra'); 
            if(telaGarra) telaGarra.style.display = 'flex'; 
        };
        
        containerPai.appendChild(btnProxima);
    }

    atualizarClassesPilha(); 
    
    container.removeEventListener('touchstart', handleTouchStart);
    container.removeEventListener('touchend', handleTouchEnd);
    container.removeEventListener('mousedown', handleTouchStart);
    container.removeEventListener('mouseup', handleTouchEnd);
    
    container.addEventListener('touchstart', handleTouchStart, {passive: true});
    container.addEventListener('touchend', handleTouchEnd, {passive: true});
    container.addEventListener('mousedown', handleTouchStart);
    container.addEventListener('mouseup', handleTouchEnd);
}

function atualizarClassesPilha() {
    const todosItens = document.querySelectorAll('#mockup-carrosel-deslizar .retro-pilha-item');
    const btnProxima = document.getElementById('btn-proxima-pilha');

    todosItens.forEach((item, index) => {
        item.classList.remove('stack-top', 'stack-second', 'stack-third', 'stack-hidden', 'swiped-out');

        const posicaoNaPilha = index - indexCartaoTopo;

        if (posicaoNaPilha === 0) {
            item.classList.add('stack-top'); 
        } else if (posicaoNaPilha === 1) {
            item.classList.add('stack-second'); 
        } else if (posicaoNaPilha === 2) {
            item.classList.add('stack-third'); 
        } else if (posicaoNaPilha >= 3) {
            item.classList.add('stack-hidden'); 
        } else if (posicaoNaPilha < 0) {
            item.classList.add('swiped-out'); 
        }
    });

    if (btnProxima) {
        if (arquivosDeslizar.length > 0 && indexCartaoTopo >= arquivosDeslizar.length) {
            btnProxima.style.display = 'block'; 
        } else {
            btnProxima.style.display = 'none'; 
        }
    }
}

// ==========================================
// FUNÇÕES DE GESTÃO DO DESLIZE (SWIPE MOUSE/TOUCH)
// ==========================================

function handleTouchStart(event) {
    startX = event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
}

function handleTouchEnd(event) {
    endX = event.type.includes('mouse') ? event.clientX : event.changedTouches[0].clientX;
    handleSwipe(); 
}

function handleSwipe() {
    const deltaX = endX - startX;
    if (Math.abs(deltaX) < threshold) return; 

    if (deltaX < 0) {
        swipeLeftHandler(); 
    } else {
        swipeRightHandler(); 
    }
}

function swipeLeftHandler() {
    if(arquivosDeslizar.length > 0 && indexCartaoTopo >= arquivosDeslizar.length) return; 
    indexCartaoTopo++;
    atualizarClassesPilha();
}

function swipeRightHandler() {
    if(indexCartaoTopo <= 0) return; 
    indexCartaoTopo--;
    atualizarClassesPilha();
}

function verificarLimiteDeslizar() {
    const btnAdd = document.getElementById('btn-add-deslizar');
    const alerta = document.getElementById('alerta-deslizar');

    // CORREÇÃO AQUI: Estava arquivosDeslizar em vez de arquivosDeslizar.length
    if (arquivosDeslizar.length >= MAX_FOTOS_DESLIZAR) {
        if(btnAdd) btnAdd.hidden = true;
        if(alerta) alerta.hidden = false;
    } else {
        if(btnAdd) btnAdd.hidden = false;
        if(alerta) alerta.hidden = true;
    }
}

function atualizarVisibilidadeDeslizar(quantidadeDeFotos) {
    const titulo = document.getElementById('titulo-slide-deslizar');
    const desc = document.getElementById('desc-slide-deslizar');
    const icone = document.getElementById('icone-slide-deslizar');
    
    const botaoAdd = document.querySelector('button[onclick*="input-foto-deslizar"]');

    const displayMensagens = quantidadeDeFotos > 0 ? 'none' : 'block';
    if (titulo) titulo.style.display = displayMensagens;
    if (desc) desc.style.display = displayMensagens;
    if (icone) icone.style.display = displayMensagens;

    if (botaoAdd) {
        botaoAdd.style.display = quantidadeDeFotos >= 6 ? 'none' : 'block';
    }
}
function salvarProgresso(passoAtual) {
    const dados = {
        passo: passoAtual,
        textos: {},
        musica: {
            nome: document.getElementById('musica_nome')?.value || '',
            artista: document.getElementById('musica_artista')?.value || '',
            capa: document.getElementById('musica_capa')?.value || '',
            preview: document.getElementById('musica_preview')?.value || '',
            busca: document.getElementById('busca_musica')?.value || ''
        },
        tema: document.documentElement.style.getPropertyValue('--cor-tema') || '#7c5dfa',
        
        fotos: {
            // 1. Fotos de Deslizar 
            deslizar: (typeof arquivosDeslizar !== 'undefined' ? arquivosDeslizar : []).map(item => ({
                id: item.id,
                url: item.url && (item.url.startsWith('data:') || item.url.startsWith('blob:')) ? item.url : '',
                titulo: item.titulo || '',
                descricao: item.descricao || ''
            })).filter(item => item.url !== ''),
            
            // 2. Fotos da Timeline/Polaroid 
            timeline: Array.from(document.querySelectorAll('#container-fotos .foto-item')).map(item => {
                const idMatch = item.id.match(/\d+/);
                const id = idMatch ? parseInt(idMatch[0]) : Math.floor(Math.random() * 1000);
                const img = item.querySelector('img');
                const dataInput = item.querySelector('.timeline-data');
                const legendaInput = item.querySelector('.timeline-legenda');
                
                const urlValida = (img && img.src && (img.src.startsWith('data:') || img.src.startsWith('blob:'))) ? img.src : '';
                
                return {
                    id: id,
                    url: urlValida,
                    data: dataInput ? dataInput.value : '',
                    texto: legendaInput ? legendaInput.value : ''
                };
            }).filter(item => item.url !== ''),
            
            // 3. Fotos das Capas Iniciais (AGORA À PROVA DE BUGS)
            capas: Array.from(document.querySelectorAll('#container-capas .capa-item')).map(item => {
                const idMatch = item.id.match(/\d+/);
                const id = idMatch ? parseInt(idMatch[0]) : Math.floor(Math.random() * 1000);
                const img = item.querySelector('img');
                
                // O SEGREDO: Se o código da imagem tem mais de 100 caracteres, é uma foto real!
                const urlValida = (img && img.src && img.src.length > 100) ? img.src : '';
                
                return {
                    id: id,
                    url: urlValida
                };
            }).filter(item => item.url !== '')
        }
    };

    // Salva os campos de texto soltos
    document.querySelectorAll('input[type="text"], input[type="date"], textarea').forEach(input => {
        if (input.id && !input.classList.contains('timeline-data') && !input.classList.contains('timeline-legenda')) {
            dados.textos[input.id] = input.value;
        }
    });

    try {
        localStorage.setItem('projeto_homenagem', JSON.stringify(dados));
        console.log("Progresso salvo com sucesso!");
    } catch (e) {
        console.warn("Limite de espaço atingido no navegador!");
    }
}

// =========================================================
// CARREGAR PROGRESSO (COOKIES) - VERSÃO BLINDADA
// =========================================================
function carregarProgresso() {
    const salvo = localStorage.getItem('projeto_homenagem');
    if (!salvo) { document.body.classList.add('pronto'); return; }

    try {
        const dados = JSON.parse(salvo);

        // 1. Restaurar Textos Simples
        for (let id in dados.textos) {
            const campo = document.getElementById(id);
            if (campo) campo.value = dados.textos[id];
        }

        // 2. Restaurar Música
        if (dados.musica) {
            if (document.getElementById('musica_nome')) document.getElementById('musica_nome').value = dados.musica.nome || '';
            if (document.getElementById('musica_artista')) document.getElementById('musica_artista').value = dados.musica.artista || '';
            if (document.getElementById('musica_capa')) document.getElementById('musica_capa').value = dados.musica.capa || '';
            if (document.getElementById('musica_preview')) document.getElementById('musica_preview').value = dados.musica.preview || '';
            if (document.getElementById('busca_musica')) document.getElementById('busca_musica').value = dados.musica.busca || '';
        }

        // 3. Restaurar Tema
        if (dados.tema) { document.documentElement.style.setProperty('--cor-tema', dados.tema); }

        // 4. RESTAURAR FOTOS
        if (dados.fotos) {
            
            // --- 4.1. Recriar Fotos da Timeline ---
            if (dados.fotos.timeline && dados.fotos.timeline.length > 0) {
                const containerFotos = document.getElementById('container-fotos');
                const containerMockup = document.getElementById('preview-timeline');
                
                dados.fotos.timeline.forEach(item => {
                    if(typeof contadorFotos !== 'undefined') contadorFotos = Math.max(contadorFotos, item.id);
                    if(typeof fotosAtivas !== 'undefined') fotosAtivas++;
                    
                    const divForm = document.createElement('div');
                    divForm.className = 'foto-item';
                    divForm.id = `foto-item-${item.id}`;
                    divForm.innerHTML = `
                        <div class="foto-preview-box">
                            <label for="input-foto-${item.id}" title="Clique para trocar" style="display:block; width:100%; height:100%; cursor:pointer;">
                                <img id="img-preview-${item.id}" src="${item.url}" style="display: block; width: 100%; height: 100%; object-fit: cover; border-radius: 2px;">
                            </label>
                            <button type="button" class="btn-remover-foto" onclick="if(typeof removerFoto === 'function') removerFoto(${item.id})" title="Apagar foto">✖</button>
                        </div>
                        <input type="file" id="input-foto-${item.id}" accept="image/*" hidden onchange="if(typeof previewFotoLinhaTempo === 'function') previewFotoLinhaTempo(event, ${item.id})">
                        <div class="foto-info">
                            <input type="text" placeholder="Ex: Maio 2024" class="timeline-data" maxlength="20" value="${item.data}"
                                   oninput="atualizarMockupTimeline(${item.id}, 'data', this.value)">
                            <input type="text" name="momento_titulo_${item.id}" placeholder="Escreva uma legenda..." 
                                   class="timeline-legenda" maxlength="80" value="${item.texto}"
                                   oninput="atualizarMockupTimeline(${item.id}, 'texto', this.value); if(typeof atualizarCaixinhaMemorias === 'function') atualizarCaixinhaMemorias()">
                        </div>
                    `;
                    if(containerFotos) containerFotos.appendChild(divForm);

                    if (containerMockup) {
                        const divMockup = document.createElement('div');
                        divMockup.className = 'timeline-mockup-item';
                        divMockup.id = `mockup-item-${item.id}`;
                        divMockup.innerHTML = `
                            <div class="timeline-mockup-img-container">
                                <img id="mockup-img-${item.id}" src="${item.url}" style="display:block;">
                            </div>
                            <div class="mockup-info">
                                <div class="timeline-mockup-date" id="mockup-data-${item.id}">${item.data}</div>
                                <div class="timeline-mockup-text" id="mockup-texto-${item.id}">${item.texto}</div>
                            </div>
                        `;
                        containerMockup.appendChild(divMockup);
                    }
                });
                try { if (typeof verificarLimiteFotos === "function") verificarLimiteFotos(); } catch(e){}
            }

            // --- 4.2. Recriar Fotos de Capa (NOVA LÓGICA) ---
            if (dados.fotos.capas && dados.fotos.capas.length > 0) {
                const containerCapas = document.getElementById('container-capas');
                if (containerCapas) containerCapas.innerHTML = ''; // Limpa os quadrados vazios/bugados antes
                
                dados.fotos.capas.forEach(item => {
                    // FILTRO DE SEGURANÇA: Bloqueia lixo antigo do cache
                    if (!item.url || (!item.url.startsWith('data:') && !item.url.startsWith('blob:'))) return;

                    if(typeof contadorCapas !== 'undefined') contadorCapas = Math.max(contadorCapas, item.id);
                    if(typeof capasAtivas !== 'undefined') capasAtivas++;
                    
                    const divForm = document.createElement('div');
                    divForm.className = 'capa-item';
                    divForm.id = `capa-item-${item.id}`;
                    divForm.innerHTML = `
                        <label for="input-capa-${item.id}" title="Clique para escolher" style="display:block; width:100%; height:100%; cursor:pointer;">
                            <img id="img-preview-capa-${item.id}" src="${item.url}" style="display:block; width:100%; height:100%; object-fit:cover; border-radius:8px;">
                        </label>
                        <input type="file" id="input-capa-${item.id}" accept="image/*" hidden onchange="if(typeof previewFotoCapa === 'function') previewFotoCapa(event, ${item.id})">
                        <button type="button" class="btn-remover-foto" onclick="if(typeof removerCapa === 'function') removerCapa(${item.id})" title="Apagar foto">✖</button>
                    `;
                    if(containerCapas) containerCapas.appendChild(divForm);
                });
                try { if (typeof verificarLimiteCapa === "function") verificarLimiteCapa(); } catch(e){}
            }

            // --- 4.3. Recriar Fotos de Deslizar ---
            if (dados.fotos.deslizar && dados.fotos.deslizar.length > 0) {
                const containerDeslizar = document.getElementById('container-retro-deslizar');
                
                dados.fotos.deslizar.forEach(item => {
                    if(typeof idContadorDeslizar !== 'undefined') idContadorDeslizar = Math.max(idContadorDeslizar, item.id);
                    if(typeof arquivosDeslizar !== 'undefined') arquivosDeslizar.push(item);
                    
                    const divCard = document.createElement('div');
                    divCard.className = 'item-foto-linha';
                    divCard.id = `retro-deslizar-${item.id}`;
                    divCard.innerHTML = `
                        <img src="${item.url}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
                        <div class="inputs-textos">
                            <input type="text" placeholder="Ex: Nosso Universo Particular" maxlength="40" value="${item.titulo}" oninput="atualizarTextosMockup(${item.id}, 'titulo', this.value)">
                            <textarea placeholder="Na imensidão da noite..." rows="3" maxlength="120" oninput="atualizarTextosMockup(${item.id}, 'descricao', this.value)">${item.descricao}</textarea>
                        </div>
                        <button type="button" class="btn-remover-foto-deslizar" onclick="if(typeof removerFotoDeslizar === 'function') removerFotoDeslizar(${item.id})" style="position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.5); border: none; color: white; width: 24px; height: 24px; border-radius: 50%; cursor: pointer;">✖</button>
                    `;
                    if(containerDeslizar) containerDeslizar.appendChild(divCard);
                });
                
                const badge = document.getElementById('contador-deslizar');
                if (badge && typeof arquivosDeslizar !== 'undefined') badge.innerText = `${arquivosDeslizar.length}/${MAX_FOTOS_DESLIZAR}`;
                try { if (typeof atualizarVisibilidadeDeslizar === "function") atualizarVisibilidadeDeslizar(arquivosDeslizar.length); } catch(e){}
                try { if (typeof verificarLimiteDeslizar === "function") verificarLimiteDeslizar(); } catch(e){}
                try { if (typeof renderizarPilhaMockup === "function") renderizarPilhaMockup(); } catch(e){}
            }
        }

        if (dados.passo > 0 && typeof mudarPasso === "function") mudarPasso(0, dados.passo);
        try { if (typeof atualizarPreview === "function") atualizarPreview(); } catch(e){}
        try { if (typeof atualizarPreviewLetra === "function") atualizarPreviewLetra(); } catch(e){}

    } catch (erroGeral) {
        console.error("Erro ao carregar os dados:", erroGeral);
    } finally {
        setTimeout(() => document.body.classList.add('pronto'), 50);
    }
}
// Função auxiliar para reinjetar as fotos na tela ao carregar
function reconstruirFotoNaTela(containerId, src) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const div = document.createElement('div');
    div.className = 'foto-item'; // use a mesma classe que você já usa
    div.innerHTML = `
        <img src="${src}" style="width:80px; height:80px; object-fit:cover; border-radius:8px;">
        <button type="button" onclick="this.parentElement.remove(); salvarProgresso(currentStep)">x</button>
    `;
    container.appendChild(div);
}
document.addEventListener('DOMContentLoaded', carregarProgresso);