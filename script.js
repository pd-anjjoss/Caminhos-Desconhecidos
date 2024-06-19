function search() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const topics = [
        "mansão rodrigues", "luiza alencar", "desaparecidos", "prefeito", 
        "vigia", "festival das lanternas", "estátua do vanguarda", 
        "colégio horizontino", "marcos vinícius", "castanho", "súcura", 
        "caiçara", "construtora rocha", "augusto fernandez", "alfredo kaká felipe teixeira", 
        "ruivas", "victor alencar"
    ];
    
    if (topics.includes(query)) {
        const resultadoPesquisa = document.getElementById('resultado-pesquisa');
        
        // Limpa qualquer conteúdo anterior
        resultadoPesquisa.innerHTML = '';

        // Exibe o resultado conforme o tópico
        switch (query) {
            case "mansão rodrigues":
                resultadoPesquisa.innerHTML = `
                    <article>
                        <h2>Mansão Rodrigues</h2>
                        <p>Localizada no coração de The Lookout, a mansão da família Rodrigues é um marco histórico que atrai tanto curiosidade quanto mistério. Construída há mais de um século, a mansão é conhecida por seu estilo arquitetônico peculiar, misturando influências vitorianas com toques contemporâneos, atualmente destroçados e jogados sobre os cômodos abandonados do lugar completamente frio e sem vida. Rumores circulam entre os moradores locais sobre eventos estranhos que ocorrem dentro de seus muros imponentes. Diz-se que a própria Aurora Rodrigues, uma figura enigmática e raramente vista em público, ainda mora lá dentro. Oque é contestado tendo em vista as poucas aparições de seu marido Darci Rodrigues que não é visto a mais de 11 anos. Alguns acreditam que a mansão é assombrada por presenças do passado, enquanto outros especulam sobre atividades clandestinas que ocorrem sob o seu teto. Os detalhes exatos permanecem obscuros, aumentando ainda mais o fascínio em torno deste local icônico.</p>
                    </article>
                `;
                break;
            case "luiza alencar":
                resultadoPesquisa.innerHTML = `
                    <article>
                        <h2>Luiza Alencar</h2>
                        <p>Luiza, uma jovem estudiosa muito querida por muitos habitantes de The Lookout, era filha de um professor respeitado na cidade. Sua presença na cidade sempre foi marcada pela dedicação aos estudos e pelo caráter humilde de sua família. No entanto, nos últimos tempos, ela se tornou motivo de mistério ao desaparecer dos olhares públicos. Segundo relatos, a última vez que foi vista foi à noite perto de uma biblioteca local, onde costumava passar horas estudando. Desde então, não há informações claras sobre seu paradeiro. Os moradores locais estão intrigados com seu sumiço repentino, levantando especulações sobre o que poderia ter acontecido. A comunidade se pergunta se Luísa enfrenta problemas pessoais desconhecidos ou se há outros mistérios envolvendo seu desaparecimento. Seu caso continua a gerar debates e incertezas na cidade, a polícia apesar de ter sido acionada realiza operações lentas gerando revolta dos habitantes e alimentando diversas teorias variadas sobre o que realmente ocorreu com ela.</p>
                    </article>
                `;
                break;
            case "desaparecidos":
                resultadoPesquisa.innerHTML = `
                    <article>
                        <h2>Desaparecidos em The Lookout</h2>
                        <p>Nos recantos sombrios de The Lookout, uma série de desaparecimentos inexplicáveis tem assombrado os moradores e gerado especulações na cidade há décadas. Desde pessoas comuns até figuras famosas, como o artista e cantor Jorge Amorim, têm sido engolidas pelo enigma que envolve esta pacata comunidade.
Os relatos variam desde testemunhas que afirmam ter visto “assombrações” nos dias que antecederam os desaparecimentos até teorias conspiratórias sobre experimentos secretos realizados nos subterrâneos esquecidos da cidade. Cada caso é marcado por uma ausência de pistas concretas, deixando as autoridades locais perplexas e os cidadãos amedrontados.
Entre os casos mais conhecidos está o do comerciante local, Sérgio Bambu, cujo paradeiro permanece um mistério desde o início do ano passado. Sua loja, agora abandonada, serve como um lembrete sombrio da fragilidade da segurança em The Lookout.
Enquanto a cidade busca respostas para esses eventos perturbadores, especula-se que disputas financeiras possam estar em jogo, mas a ausência de respostas  transforma a tranquila atmosfera de The Lookout em um terreno fértil para histórias de fantasmas e lendas urbanas. Os residentes mais antigos sussurram sobre a existência de uma presença que eles chamam informalmente de “Shupakú”, capaz de atrair os incautos para as profundezas de um mistério que desafia a compreensão humana.
À medida que novos desaparecimentos ocorrem e as perguntas continuam sem respostas, a sombra do desconhecido paira sobre The Lookout, desafiando aqueles que ousam desvendar os segredos que a cidade esconde em seus becos escuros e vielas silenciosas.</p>
                    </article>
                `;
                break;
            case "prefeito":
                resultadoPesquisa.innerHTML = `
                    <article>
                        <h2>Alberto Mendes</h2>
                        <p>Em The Lookout, a tranquilidade da cidade está sendo abalada por uma crescente divisão de opiniões em relação ao prefeito “Beto Bolinha” nome no qual Alberto Mendes é conhecido popularmente. Desde que assumiu o cargo, há dois anos, Alberto tem sido uma figura polarizadora, cujas decisões têm gerado tanto apoio fervoroso quanto críticas contundentes.
Os defensores do prefeito destacam suas iniciativas para revitalizar o centro histórico da cidade, trazendo novos investimentos e melhorias na infraestrutura local. Projetos como a reforma da praça central e a implementação de um sistema de transporte público mais eficiente são citados como exemplos de seu compromisso com o desenvolvimento econômico de The Lookout.
No entanto, uma parte significativa da população expressa desagrado com as políticas do prefeito, especialmente em questões á segurança e ausência de medidas para diminuir a criminalidade da cidade. A recente autorização para diminuição de policiamento nas ruas em pró da economia de renda para realização dos eventos do Festival das Lanternas tem gerado protestos organizados e debates acalorados nas sessões da câmara municipal.
A controvérsia atingiu o ápice com a proposta de instalação de mais percursos subterrâneos para “canos de gás” segundo ele oque acabou levando uma grande parte da renda que poderia ser direcionada á segurança pública como é dito por especialistas.
Enquanto a administração do prefeito argumenta que tais medidas são necessárias para o crescimento sustentável de The Lookout, críticos questionam a transparência nas decisões e clamam por um maior envolvimento da comunidade nas políticas municipais.
À medida que as tensões aumentam e as opiniões se tornam mais polarizadas, o futuro político de “Beto Bolinha” e a direção de The Lookout permanecem incertos, deixando os cidadãos divididos entre o desejo de progresso e a preocupação com a segurança e paz na cidade.
</p>
                    </article>
                 `;
                break;
            case "vigia":
                resultadoPesquisa.innerHTML = `
                    <article class="erro">
                        <h2>ERROR404</h2>
                        <p>Não...\nNão tente isso... ele está te vendo agora, sempre esteve. Disfarçadamente tente se virar, fingir que não tentou pesquisar isso e fuja o mais rápido para mais longe possível. Espero que não o veja no caminho... Porque ele já está olhando para você.</p>
                    </article>
                `;
                break;
            case "festival das lanternas":
                resultadoPesquisa.innerHTML = `
                    <article>
                        <h2>Festival das Lanternas</h2>
                        <p>O Festival das Lanternas em The Lookout é uma das comemorações mais esperadas do ano na cidade, superando celebrações como natal e páscoa, esse evento é envolto em mistério e enigma, com uma origem que remonta a tempos antigos. Uma tradição que trás alguns turistas e curiosos à pequena cidade.
Acontecimentos distintos sigilosos, marcaram os festivais passados oque torna ele cada vez mais popular entre os nativos. 
O festival consiste na confecção de diversas lanternas que são acesas enquanto se faz um pedido e jogadas ao ar, o calor das velas faz as lanternas voarem gerando um ambiente inesquecível e único acompanhando os céus escuros de lua cheia na cidade.
Uma história particularmente intrigante é a da Lanterna Perdida. Quando esteve na cidade em 1998, o escritor Lourenzo Valdez relatou ter colocado sua lanterna ao lado de onde era a antiga “Estátua do Vanguarda” cuja qual não se encontra mais na praça nos dias atuais. Algumas fotos dele com a lanterna em frente a estátua foram publicadas junto ao seu livro “Passos de Mármore”, na mesma noite em que a foto foi tirada tanto a lanterna quanto a estátua desapareceram sem rastros nem testemunhas e sumiram dos olhos da polícia que fez buscas frustradas atrás dos possíveis responsáveis mais até hoje não obteve respostas.
A lua cheia durante o festival é um espetáculo à parte. Acredita-se que, durante esse período, muitas pessoas saem as ruas fantasiadas com objetivos de instaurar o caos e medo, “Faremos de tudo para combater e punir os engraçadinhos” Disse o prefeito em nota ao Jornal Gazeta Local.
</p>
                    </article>
                `;
                break;
            case "estátua do vanguarda":
                resultadoPesquisa.innerHTML = `
                    <article>
                        <h2>Estátua Roubada do Vanguarda</h2>
                        <p>No coração da praça central de The Lookout, havia uma estátua que se destacava entre os bancos. A estátua representava um anjo imponente, esculpido em mármore branco, com asas abertas e um olhar enigmático que parecia seguir todos que passavam. A estátua do Anjo de Pedra, como era chamada, tinha uma presença majestosa e, ao mesmo tempo, misteriosa.
Há muito tempo, a estátua tinha uma história associada a ela. Diziam que o anjo tinha sido colocado ali por um escultor desconhecido, que trabalhara na obra durante noites silenciosas para proteger á todos.
Por décadas, a estátua do Anjo Guardião ficou na praça, observando silenciosamente a vida dos moradores de The Lookout. Mas então, durante o Festival das Lanternas de 1998, algo inexplicável aconteceu. Quando os primeiros raios de sol tocaram a praça, a estátua havia desaparecido sem deixar vestígios. Não havia sinais de vandalismo ou roubo, nenhum som fora ouvido durante a noite. A base da estátua estava intacta, mas o anjo simplesmente havia sumido.
A notícia se espalhou rapidamente pela cidade, deixando todos perplexos e inquietos. Rumores começaram a circular. Alguns diziam que o anjo havia ganhado vida e voado para longe. Outros acreditavam que forças sobrenaturais estavam em ação, talvez como parte de uma maldição antiga. Alguns moradores mais idosos contaram histórias de que o anjo guardava um segredo terrível e que sua ausência poderia trazer má sorte para a cidade.
As autoridades locais iniciaram uma investigação, mas não encontraram nenhuma pista. Sem marcas no chão, sem testemunhas, sem nada que pudesse explicar o desaparecimento, o mistério da estátua do Anjo Guardião só aumentava. Ao mesmo tempo, eventos estranhos começaram a ocorrer na cidade. Objetos desapareciam e reapareciam em lugares inusitados, sombras sem dono eram vistas se movendo nas ruas à noite, e sussurros assustadores ecoavam pelos becos.
Uma lenda começou a ganhar força entre os moradores. Dizia-se que o anjo estava ligado ao Festival das Lanternas e que seu desaparecimento sinalizava uma mudança significativa na ordem das coisas. Alguns acreditavam que a estátua retornaria quando o mistério fosse resolvido ou quando um grande sacrifício fosse feito.</p>
                    </article>
                `;
                break;
            case "colégio horizontino":
                resultadoPesquisa.innerHTML = `
                    <article>
                        <h2>Colégio Horizontino</h2>
                        <p>O Colégio Horizontino, situado no antigo bairro central de The Lookout, sempre foi um dos edifícios mais imponentes da cidade apesar de seu único andar. Fundado no final do século XIX, o colégio é conhecido tanto pela sua arquitetura neogótica quanto pela excelência acadêmica que oferece. Com suas torres esguias e amplos corredores, a escola parece mais uma catedral do conhecimento do que uma simples instituição de ensino.
O colégio foi projetado por um arquiteto visionário, que pensou em cada detalhe para inspirar e educar as futuras gerações. As janelas de vitral colorido, que deixam a luz do sol pintar o interior com cores vibrantes, e os jardins bem cuidados, onde os alunos podem estudar e relaxar, são apenas alguns dos elementos que fazem do Colégio Horizontino um lugar especial.
Ao longo dos anos, o Colégio Horizontino formou muitos dos cidadãos mais notáveis de The Lookout. Médicos, advogados, artistas e políticos passaram por suas salas de aula, levando consigo não apenas o conhecimento acadêmico, mas também os valores de integridade, respeito e responsabilidade que a instituição preza.
O colégio sempre foi um centro de inovação e excelência. Seus laboratórios de ciência estão equipados com a mais moderna tecnologia, e a biblioteca possui uma vasta coleção de livros raros e contemporâneos. As atividades extracurriculares são igualmente impressionantes, com clubes de debate, teatro, música e esportes que ajudam a desenvolver habilidades além do currículo tradicional.
Entre os eventos mais esperados pelos alunos está a Feira de Ciências anual, onde projetos inovadores e criativos são apresentados. Este evento é uma oportunidade para os estudantes mostrarem seu talento e criatividade, recebendo elogios não apenas da comunidade escolar, mas também de cientistas e profissionais convidados para julgar os trabalhos.
O corpo docente do Colégio Horizontino é composto por profissionais altamente qualificados e dedicados, muitos dos quais são ex-alunos da própria instituição. Essa continuidade gera um ambiente de respeito mútuo e aprendizado colaborativo. Professores são mentores e guias, sempre incentivando os alunos a explorar seus interesses e alcançar seu potencial máximo.
Hoje, o Colégio Horizontino continua a ser uma instituição de prestígio, atraindo alunos de toda a região. Seu compromisso com a educação de qualidade e o desenvolvimento integral dos estudantes faz dele uma peça central na comunidade de The Lookout. Alunos e professores seguem uma rotina diária repleta de descobertas e crescimento, mantendo viva a tradição de excelência que caracteriza esta renomada escola.
</p>
                    </article>
                `;
                break;
            case "marcos vinícius":
                resultadoPesquisa.innerHTML = `
                    <article>
                        <h2>Marcos Vinícius</h2>
                        <p>A curiosidade.. E o gato..
Marcos Vinícius, mais conhecido como "MV" pelos amigos e colegas, sempre foi uma figura enigmática em The Lookout. Filho de imigrantes, cresceu em uma casa modesta no bairro de São Miguel, um dos mais antigos da cidade. Desde cedo, MV demonstrou uma curiosidade insaciável pelo mundo ao seu redor, especialmente pelos mistérios e histórias que envolviam sua cidade natal.
Porém, havia algo mais em MV que poucos compreendiam. Ele tinha um fascínio quase obsessivo por enigmas e fenômenos inexplicáveis. Esse interesse o levou a explorar os cantos mais obscuros de The Lookout, desde as passagens subterrâneas secretas até os relatos de aparições fantasmagóricas. MV queria entender o que estava por trás das histórias que ouviu durante toda a vida.
Foi essa busca incessante pela verdade que o levou a descobrir informações sobre a cidade. Durante suas investigações, ele tropeçou em documentos antigos, entrevistas e até mesmo relatos de testemunhas que pareciam indicar uma ligação entre os desaparecimentos recentes e uma presença sinistra na cidade, referida por “MV” apenas como "O Vigia". Determinado a compartilhar suas descobertas, MV começou a escrever um diário, detalhando cada passo de sua jornada.
MV sabia que estava se aproximando de algo perigoso. Ele sentia que suas descobertas não eram bem-vindas por algumas forças em The Lookout. Foi então que decidiu escrever a carta que os jogadores encontraram. Nela, ele implorava para que alguém continuasse sua busca pela verdade, caso algo lhe acontecesse. A carta era um grito de socorro e uma última tentativa de alertar os outros sobre o que realmente estava acontecendo.
Infelizmente, MV faleceu em 2014 pouco tempo depois de escrever as carta. Seu sumiço foi um choque para a comunidade e deixou um vazio imenso naqueles que o conheciam. Sua ausência também intensificou os rumores e teorias da conspiração que ele tanto investigou. Para os curiosos, a carta de MV não é apenas uma pista, mas um legado deixado por alguém que sacrificou tudo na busca pela verdade.
</p>
                    </article>
                `;
                break;
            case "castanho":
                resultadoPesquisa.innerHTML = `
                    <article>
                        <h2>Castanhos lenda urbana</h2>
                        <p>Seres que possuem a habilidade de se transformar na aparência física de qualquer pessoa que eles possuam o sangue, permitindo que se infiltrem e manipulem as pessoas de maneiras sutis, mas eficazes. E, em casos mais avançados faça mais vítimas
Em sua forma verdadeira, os Castanhos são seres de aparência esquelética e etérea. Suas peles translúcidas revelam ossos escurecidos e veias esverdeadas que brilham fracamente no escuro. Seus olhos são orbes vazias e brilhantes, emitindo uma luz fraca e castanha que hipnotiza aqueles que olham diretamente para eles. Movem-se de maneira fluida e quase serpentina, como se estivessem nadando através do ar, adicionando um elemento de desconforto a qualquer um que os veja.
Avistado 2 vezes no Ceará, apesar de suas habilidades impressionantes, os Castahos são fisicamente frágeis. Sua forma verdadeira é vulnerável a ataques físicos, e eles evitam confrontos diretos sempre que possível.</p>
                    </article>
                `;
                break;
            case "súcura":
                resultadoPesquisa.innerHTML = `
                    <article>
                        <h2>Súcura lenda urbana</h2>
                        <p>Os Súcubos são a classe forte de entidades, sendo marcados pela cor azul nos olhos e possuindo uma presença verdadeiramente aterrorizante. Eles são os executores leais de seu líder, capazes de causar medo e destruição.
Em sua forma verdadeira, os Súcubos são altos e imponentes, com corpos alongados e membros desproporcionais que lhes conferem uma aparência distorcida e perturbadora. Suas peles são de um azul profundo, quase cintilante, que parece absorver a luz ao invés de refletir. Seus rostos são marcados por feições angulosas e olhos brilhantes, de um azul gélido, que perfuram a alma de qualquer um que os encare.
Os Súcubos são caçadores implacáveis, agindo com uma precisão fria e calculista. Eles não têm compaixão ou piedade e seguem as ordens do seu invocador sem questionar. São muitas vezes enviados para eliminar aqueles que representam uma ameaça real aos planos do líder, usando suas habilidades para garantir que ninguém escape dos seus olhos.
Avistado No Sul e Centro-Oeste do país são fortes e sua principal fraqueza está em balas de prata ou metais perfurantes.</p>
                    </article>
                `;
                break;
            case "caiçara":
                resultadoPesquisa.innerHTML = `
                    <article>
                        <h2>Caiçara lenda urbana</h2>
                        <p>Ainda desconhecidos, emitem som de estalo semelhante a obra cinematográfica “O Hereditário” ainda não se obteve informações suficientes sobre sua aparência mas é uma máquina mortífera, adequa perfeitamente a frase militar “Se você ouviu o disparo, você não era o alvo.”
Rumores sobre Região Sudeste mas nada confirmado, fraqueza desconhecida.</p>
                    </article>
                `;
                break;
            case "construtora rocha":
                resultadoPesquisa.innerHTML = `
                    <article>
                        <h2>Construtora Rocha</h2>
                        <p>A Construtora Rocha foi contratada para realizar uma ampla reforma no histórico Colégio Horizontino, localizado no coração de The Lookout. Fundado há mais de um século, o colégio mantinha sua arquitetura clássica, caracterizada por seus imponentes pilares de pedra e janelas altas que deixavam passar a luz natural. A Construtora Rocha assumiu o desafio de preservar a essência histórica do edifício enquanto modernizava suas instalações.
O projeto de reforma incluiu a restauração das fachadas de tijolos antigos e a renovação dos telhados de ardósia, garantindo a integridade estrutural do colégio. Os interiores foram completamente redesenhados para oferecer um ambiente educacional contemporâneo, com novas salas de aula equipadas com tecnologia de ponta, laboratórios modernos e uma biblioteca digital.
Durante o processo de reforma, foram descobertos artefatos históricos e documentos perdidos, revelando mais sobre a rica história do Colégio Horizontino. A Construtora Rocha manteve parte da reforma em arquivos sigilosos em sua sede em frente a praça da Vanguarda.”
Com a conclusão da reforma, o Colégio Horizontino não apenas preserva sua tradição educacional, mas também se destaca como um marco revitalizado de The Lookout, pronto para receber as próximas gerações de estudantes com um ambiente inspirador e moderno.</p>
                    </article>
                `;
                break;
            case "augusto fernandez":
                resultadoPesquisa.innerHTML = `
                    <article>
                        <h2>Augusto Fernandez Procurado.</h2>
                        <p>01010000 01110010 01101111 01100011 01110101 01110010 01100001 01100100 01101111 00100000 01110000 01100101 01101100 01100001 00100000 01110000 01101111 01101100 11101101 01100011 01101001 01100001 00100000 01101100 01101111 01100011 01100001 01101100 00101100 00100000 01100110 01110101 01100111 01101001 01110101 00100000 01100100 01100001 00100000 01100011 01100001 01100100 01100101 01101001 01100001 00100000 01100101 00100000 01100001 01110011 01110011 01110101 01101101 01100101 00100000 01100110 01100001 01101100 01110011 01100001 01110011 00100000 01101001 01100100 01100101 01101110 01110100 01101001 01100100 01100001 01100100 01100101 01110011 00100000 01110000 01100001 01110010 01100001 00100000 01100001 01110011 01110011 01110101 01101101 01101001 01110010 00100000 01110110 11101101 01110100 01101001 01101101 01100001 01110011</p>
                    </article>
                `;
                break;
            case "alfredo kaká felipe teixeira":
                resultadoPesquisa.innerHTML = `
                    <article>
                        <h2>Os escolhidos</h2>
                        <p>Um dia já quase ganharam..</p>
                    </article>
                `;
                break;
            case "ruivas":
                resultadoPesquisa.innerHTML = `
                    <article>
                        <h2>Ruivas</h2>
                        <p>Pd_anjjos ama bastante (até demais)...</p>
                    </article>
               `;
                break;
            case "victor alencar":
                resultadoPesquisa.innerHTML = `
                    <article>
                        <h2>Professor Victor Alencar</h2>
                        <p>A cidade de The Lookout recorda com saudade o legado do professor Victor Alencar, um acadêmico dedicado e amado por sua paixão pelo ensino e pelos mistérios ocultos da cidade. Conhecido por seus colegas como um intelectual curioso e profundamente comprometido com seus alunos, o professor Alencar foi uma figura influente na comunidade educacional local.
Sua filha, Luiza Alencar, cresceu sob a sombra do legado deixado por seu pai, cujo desaparecimento ou morte ainda é um mistério envolto em especulações na cidade. Luiza, agora uma jovem estudante, frequentemente reflete sobre as histórias e segredos que seu pai compartilhava com ela, alimentando sua própria curiosidade sobre os mistérios de The Lookout.
Embora muitos anos tenham se passado desde o desaparecimento ou falecimento do professor Alencar, seu impacto na cidade e na vida de seus alunos continua evidente. Seu escritório na escola ainda guarda livros antigos, mapas enigmáticos e anotações que ele costumava usar em suas aulas, sugerindo um interesse profundo nos segredos enterrados da cidade.
Enquanto a comunidade recorda com carinho o legado do professor Alencar, alguns moradores mais antigos ainda se perguntam se ele encontrou respostas para os mistérios que tanto estudou ou se os mistérios o encontraram primeiro.</p>
                    </article>
                `;
                break;
            default:
                alert("Ainda não possuímos nenhum registro de pesquisas recentes sobre estes dados fornecidos.");
                break;
        }
    } else {
        alert("Ainda não possuímos nenhum registro de pesquisas recentes sobre estes dados fornecidos.");
    }
}
