/*let tempo = 600;*/
let pontuacao = 0;
let perguntas = [
  {
    pergunta: "1- Qual era a principal característica do poder político na Europa Medieval?",
    alternativas: ["Democracia representativa", "Centralização nas mãos do rei", "Descentralização baseada no sistema feudal", "Controle absoluto da Igreja Católica"],
    correta: 2
  },
  {
    pergunta: "2. O que marcou o surgimento das monarquias nacionais na Idade Moderna?",
    alternativas: ["Queda do Império Romano", "Fragmentação dos Estados", "Aliança entre reis, comerciantes e Igreja Católica", "Independência das colônias americanas"],
    correta: 2
  },
  {
    pergunta: "3. Qual foi o papel da Igreja Católica na formação das monarquias nacionais?",
    alternativas: ["Combater os reis e apoiar os senhores feudais", "Apoiar os reis para unir a cristandade", "Incentivar a separação entre Estado e religião", "Promover a descentralização política"],
    correta: 1
  },
  {
    pergunta: "4. Qual monumento foi inaugurado em Lisboa em 1960 para homenagear os navegadores portugueses?",
    alternativas: ["Torre de Belém", "Mosteiro dos Jerónimos", "Palácio da Pena", "Padrão dos Descobrimentos"],
    correta: 3
  },
  {
    pergunta: "5. Quem está representado na proa do Padrão dos Descobrimentos?",
    alternativas: ["Cristóvão Colombo", "Vasco da Gama", "Pedro Álvares Cabral", "Infante D. Henrique"],
    correta: 3
  },
  {
    pergunta: "6. Qual foi o marco da expansão marítima europeia em 1492?",
    alternativas: ["Viagem de Cristóvão Colombo à América", "Descoberta do Brasil", "Fundação de Lisboa", "Chegada de Vasco da Gama à Índia"],
    correta: 0
  },
  {
    pergunta: "7. Qual classe social surgiu com o crescimento do comércio e das cidades na Europa?",
    alternativas: ["Clero", "Nobreza", "Servos", "Burguesia"],
    correta: 3
  },
  {
    pergunta: "8. Como os burgueses buscavam autonomia em relação ao poder senhorial?",
    alternativas: ["Aliando-se ao clero", "Pagando para evitar interferência ou se revoltando com apoio do rei", "Fundando novos feudos", "Apoiando os senhores feudais"],
    correta: 1
  },
  {
    pergunta: "9. Quais países foram pioneiros na expansão marítima europeia?",
    alternativas: ["França e Inglaterra", "Holanda e Bélgica", "Alemanha e Itália", "Portugal e Espanha"],
    correta: 3
  },
  {
    pergunta: "10. Qual foi uma das consequências da expansão marítima europeia?",
    alternativas: ["Exploração e conquista de territórios na América, África e Ásia", "Queda do feudalismo", "Unificação da Europa", "Fim da Igreja Católica"],
    correta: 0
  },
   {
    pergunta: "11-No processo de formação das monarquias nacionais europeias, o desenvolvimento do comércio e das cidades...?",
    alternativas: ["Criou a necessidade de centralização do poder para unificar os tributos, as moedas, os pesos e as medidas, as leis e mesmo a língua.", "Ocorreu sob uma luta de interesses que aliou a burguesia, a igreja, os artesões e os servos contra o rei e a nobreza.", "Contribuiu para que a nobreza e a burguesia impusessem uma autoridade de cunho particularista no controle das cidades.", "Criou condições para que a autoridade do rei, no Estado moderno, fosse limitada pelo Parlamento."],
    correta: 0
  },
  {
    pergunta: "12.Qual foi o principal fator que colaborou para a centralização do poder nas mãos dos reis, no processo de formação das monarquias nacionais europeias após a Idade Média?",
    alternativas: ["A ascensão da Igreja Católica como autoridade política única na Europa.", " O fortalecimento dos senhores feudais e a descentralização administrativa.", "O declínio do sistema feudal, que enfraqueceu o poder local e permitiu aos reis consolidarem sua autoridade.", "A fragmentação dos Estados e o aumento da influência das cidades independentes"],
    correta: 2
  },
  {
    pergunta: "13. Como fatores secundários para a centralização do poder na monarquia, destacam-se ainda a peste negra e a grande onda de fome que atingiu o conhecimento europeu nesse período, pois esses eventos?",
    alternativas: ["Provocaram um considerável decréscimo demográfico no continente europeu. Como resultado, tornou-se necessário aumentar a produção no campo, independentemente da mão de obra disponível. Para isso, instituiu-se o trabalho assalariado, mais produtivo do que o servil. Esse novo contexto enfraqueceu os laços feudais em muitas regiões.", "Provocaram um considerável crescimento demográfico no continente europeu. Como resultado, tornou-se necessário aumentar a produção no campo, independentemente da mão de obra disponível. Para isso, instituiu-se o trabalho servil, mais produtivo do que o assalariado. Esse novo contexto enfraqueceu os laços feudais em muitas regiões.", "Provocaram um considerável decréscimo demográfico no continente europeu. Como resultado, tornou-se necessário aumentoar a produção no campo, independentemente da mão de obra disponível. Para isso, instituiu-se o trabalho escravo, mais produtivo do que o servil. Esse novo contexto fortaleceu os laços feudais em muitas regiões.", "Provocaram um considerável crescimento demográfico no continente europeu. Como resultado, tornou-se necessário aumentar a produção no campo, independentemente da mão de obra disponível. Para isso, institui-se o trabalho escravo, mais produtivo do que o assalriado. Esse novo contexto enfraqueceu os laços feudais em muits regiões."],
    correta: 1
  },
  {
    pergunta: "14. Qual foi o principal fator que colaborou para a centralização do poder nas mãos dos reis após a Idade Média?",
    alternativas: ["A ascensão da Igreja como autoridade política única", "O declínio do sistema feudal", "O fortalecimento dos senhores feudais","A fragmentação dos Estados europeus"],
    correta: 1
  },
  {
    pergunta: "15. Qual classe social apoiou os reis na luta contra os senhores feudais em Portugal?",
    alternativas: ["Nobreza", "Clero", "Burguesia", "Servos"],
    correta: 2
  },
  {
    pergunta: "16. A união entre os reinos de Castela e Aragão resultou em:",
    alternativas: ["A independência de Portugal","A criação da Magna Carta", "A formação do Estado espanhol", "A conquista da França"],
    correta: 2
  },
  {
    pergunta: "17. Qual foi o último território muçulmano conquistado pelos reis católicos na Península Ibérica?",
    alternativas: ["Navarra", "Granada","Leão", "Aquitânia"],
    correta: 1
  },
  {
    pergunta: "18. Qual documento limitou o poder do rei João Sem-Terra na Inglaterra?",
    alternativas: ["Tratado de Tordesilhas", "Constituição Inglesa", "Magna Carta", "Declaração dos Direitos Humanos"],
    correta: 2
  },
  {
    pergunta: "19. Na França, a Igreja apoiou o rei porque desejava:",
    alternativas: ["A descentralização política", "O controle direto dos feudos", "Ordem e fim das guerras entre senhores feudais", "A abolição da monarquia"],
    correta: 2
  },
  {
    pergunta: "20. Quem foi o primeiro monarca da dinastia Plantageneta na Inglaterra?",
    alternativas: ["Ricardo Coração de Leão", "Henrique II", "João Sem-Terra", "Fernando de Aragão"],
    correta: 1
  },
   {
    pergunta: "21. Qual foi a consequência da ausência de Ricardo Coração de Leão durante a Terceira Cruzada?",
    alternativas: ["Estabilidade política na Inglaterra", "Fortalecimento da monarquia inglesa", "Instabilidade política no reino", "Conquista de novos territórios na França"],
    correta: 2
  },
  {
    pergunta: "22.  O que os nobres ingleses exigiram do rei João Sem-Terra?",
    alternativas: ["Controle da Igreja sobre o governo", "Expansão territorial", "Redução de impostos e respeito às leis", "Abolição da monarquia"],
    correta: 2
  },
   {
    pergunta: "23.  Qual foi o impacto da Magna Carta na história política da Inglaterra?",
    alternativas: ["Fortaleceu o absolutismo monárquico", "Unificou os reinos da Península Ibérica", "Estabeleceu princípios que influenciaram democracias modernas", "Aumentou o poder da Igreja"],
    correta: 2
  },
   {
    pergunta: "24. Qual foi a primeira conquista portuguesa no processo de expansão marítima?",
    alternativas: ["Calicute", "Malaca", "Ceuta", "Goa"],
    correta: 2
  },
  {
    pergunta: "25. - Quem chegou à Índia em 1498, concretizando a rota marítima para o Oriente?",
    alternativas: ["Pedro Álvares Cabral", "Bartolomeu Dias", "Infante Dom Henrique", "Vasco da Gama"],
    correta: 3
  },
  {
    pergunta: "26. - Qual fator contribuiu para o pioneirismo português nas navegações?",
    alternativas: ["Descentralização política", "Conflitos internos", "Centralização política precoce", "Isolamento geográfico"],
    correta: 2
  },
  {
    pergunta: "27. Qual instrumento foi essencial para a navegação em alto-mar?",
    alternativas: ["Telescópio", "Bússola", "Barômetro", "Radar"],
    correta: 1
  },
  {
    pergunta: "28.- Quem fundou a escola de navegação em Sagres?",
    alternativas: ["Dom João", "Vasco da Gama", "Infante Dom Henrique", "Pedro Álvares Cabral"],
    correta: 2
  },
  {
    pergunta: "29. - Em que ano Pedro Álvares Cabral chegou ao Brasil?",
    alternativas: ["1498", "1500", "1511", "1415"],
    correta: 1
  },
  {
    pergunta: "30. - Qual cidade asiática foi conquistada pelos portugueses em 1511?",
    alternativas: ["Goa", "Calicute", "Ormuz", "Malaca"],
    correta: 3
  },
  {
    pergunta: "31. - Qual dinastia ficou conhecida como “dinastia das navegações",
    alternativas: ["Dinastia Filipina", "Dinastia de Bragança", "Dinastia de Avis", "Dinastia de Habsburgo"],
    correta: 2
  },
  {
    pergunta: "32. - O avanço turco-otomano teve qual impacto nas rotas comerciais?",
    alternativas: ["Facilitou o acesso ao Oriente", "Bloqueou rotas pelo Mediterrâneo", "Estimulou o comércio interno europeu", "Reduziu a importância das navegações"],
    correta: 1
  },
   {
    pergunta: "33. Qual navegador ultrapassou o cabo da Boa Esperança em 1488?",
    alternativas: ["Vasco da Gama", "Pedro Álvares Cabral", "Bartolomeu Dias", "Fernão de Magalhães"],
    correta: 2
  },
  {
    pergunta: "34.Qual foi o principal objetivo da expedição de Cristóvão Colombo em 1492?",
    alternativas: ["Descobrir um novo continente", "Encontrar uma rota marítima para as Índias", "Conquistar territórios africano", "Explorar o Oceano Pacífico"],
    correta: 1
  },
   {
    pergunta: "35. Quem provou que as terras descobertas por Colombo eram parte de um novo continente?",
    alternativas: ["Bartolomeu Dias", "Fernão de Magalhães", "Américo Vespúcio", "Vasco da Gama"],
    correta: 2
  },
  {
    pergunta: "36. - Quais embarcações foram usadas por Colombo em sua expedição?",
    alternativas: ["São Gabriel, São Rafael e Berrio", "Endeavour, Beagle e Discovery", "Santa Maria, Pinta e Niña", "Victoria, Trinidad e Concepción"],
    correta: 2
  },
  {
    pergunta: "37. Quem completou a viagem de circunavegação iniciada por Fernão de Magalhães?",
    alternativas: ["Diego Velázquez", "Juan Sebastián Elcano", "Vicente Pinzón", "Pedro de León"],
    correta: 1
  },
  {
    pergunta: "38.Qual foi o marco da Revolução Gloriosa na Inglaterra em 1688?",
    alternativas: ["A independência das Treze Colônias", "A supremacia do Parlamento sobre a monarquia", "A fundação da colônia de Roanoke", "A execução do rei Carlos I"],
    correta: 1
  },
  {
    pergunta: "39.Qual colônia inglesa foi fundada em 1607?",
    alternativas: ["Massachusetts", "Virgínia", "Nova York", "Pensilvânia"],
    correta: 1
  },
  {
    pergunta: "40. Qual característica marcava as colônias do Sul na América do Norte?",
    alternativas: ["Policultura e comércio", "Diversidade econômica", "Indústria naval e pesca", "Monocultura de exportação com mão de obra escravizada"],
    correta: 3
  },
  {
    pergunta: "41.Qual evento marcou o início da Guerra de Independência dos EUA?",
    alternativas: ["A chegada de Colombo às Bahamas", "Os conflitos entre colonos e Inglaterra em 1775", "A Revolução Gloriosa", "A fundação da colônia de Roanoke"],
    correta: 1
  },
  {
    pergunta: "42. Qual movimento brasileiro foi influenciado pela independência americana?",
    alternativas: ["Revolta dos Malês", "Guerra dos Emboabas", "Inconfidência Mineira", "Revolução Farroupilha"],
    correta: 2
  },
   {
    pergunta: "43.  Qual navegador chegou à foz do Rio Amazonas em 1500?",
    alternativas: ["Vasco Núñez de Balboa", "Alonso Ojeda", "Pedro de León", "Vicente Pinzón"],
    correta: 3
  },
  {
    pergunta: "44. Qual foi o principal objetivo da expedição de Cristóvão Colombo em 1492?",
    alternativas: ["Descobrir um novo continente", "Conquistar territórios africanos", "Explorar o Oceano Pacífico", "Encontrar uma rota marítima para as Índias"],
    correta: 3
  },
   {
    pergunta: "45. Quem provou que as terras descobertas por Colombo eram parte de um novo continente?",
    alternativas: ["Bartolomeu Dias", "Vasco da Gama", "Fernão de Magalhães", "Américo Vespúcio"],
    correta: 3
  },
  {
    pergunta: "46.Quem completou a viagem de circunavegação iniciada por Fernão de Magalhães?",
    alternativas: ["Diego Velázquez", "Vicente Pinzón", "Juan Sebastián Elcano", "Pedro de León"],
    correta: 2
  },
   {
    pergunta: "47. Qual foi o objetivo principal das invasões holandesas no Brasil?",
    alternativas: ["Fundar colônias permanentes", "Controlar o comércio de escravos", "Dominar o comércio de açúcar", "Expandir o território da Holanda"],
    correta: 2
  },
   {
    pergunta: "48. Quem liderou a administração holandesa em Pernambuco?",
    alternativas: ["Maurício de Nassau", "Pedro Álvares Cabral", "Vicente Pinzón", "Juan Sebastián Elcano"],
    correta: 0
  },
   {
    pergunta: "49.  Qual tratado dividiu as terras descobertas entre Portugal e Espanha em 1494?",
    alternativas: ["Tratado de Madri", "Tratado de Saragoça", "Tratado de Utrecht", "Tratado de Tordesilhas"],
    correta: 3
  },
   {
    pergunta: "49.Qual foi uma das consequências da expansão marítima para os povos africanos?",
    alternativas: ["Criação de impérios africanos", "Independência das colônias africanas", "Intensificação do tráfico negreiro", "Fundação de universidades africanas"],
    correta: 2
  },
    {
    pergunta: "50. Qual cidade italiana é considerada o berço do Renascimento?",
    alternativas: ["Roma", "Veneza", "Milão", "Florença"],
    correta: 3
  },
    {
    pergunta: "51.  Qual foi uma das principais ideias da Reforma Protestante?",
    alternativas: ["Fortalecimento da autoridade papal", "Criação de novas ordens religiosas católicas", "Expansão do poder da Igreja sobre os reis", "Valorização da fé individual e leitura da Bíblia"],
    correta: 3
  },
    {
    pergunta: "52.  Qual cidade italiana é considerada o berço do Renascimento?",
    alternativas: ["Roma", "Veneza", "Milão", "Florença"],
    correta: 3
  },
     {
    pergunta: "53. Qual característica renascentista valoriza o ser humano como centro do universo?",
    alternativas: ["Racionalismo","Antropocentrismo", "Heliocentrismo", "Individualismo"],
    correta: 1
  },
     {
    pergunta: "54. Quem inventou a prensa tipográfica no século XV",
    alternativas: ["Leonardo da Vinci", "Johannes Gutenberg", "Michelangelo", "Nicolau Copérnico"],
    correta: 1
  },
    {
    pergunta: "55.Qual conceito afirma que o Sol é o centro do universo?",
    alternativas: ["Geocentrismo", "Antropocentrismo", "Heliocentrismo", "Humanismo"],
    correta: 2
  },
    {
    pergunta: "56. O que foi o mecenato durante o Renascimento?",
    alternativas: ["Sistema de ensino religioso", "Apoio financeiro a artistas", "Reforma da Igreja Católica", "Expansão territorial"],
    correta: 1
  },
   {
    pergunta: "57. Qual valor renascentista destaca a capacidade do indivíduo de transformar a realidade?",
    alternativas: ["Humanismo", "Racionalismo", "Individualismo", "Escolástica"],
    correta: 2
  },
   {
    pergunta: "58. Qual tratado dividiu as terras descobertas entre Portugal e Espanha em 1494?",
    alternativas: ["Tratado de Saragoça", "Tratado de Utrecht", "Tratado de Tordesilhas", "Tratado de Madri"],
    correta: 2
  },
  {
    pergunta: "59.  Qual foi uma das consequências da expansão marítima para os povos africanos?",
    alternativas: ["Criação de impérios africanos", "Intensificação do tráfico negreiro", "Independência das colônias", "Fundação de universidades"],
    correta: 1
  },
  {
    pergunta: "60. Qual movimento religioso surgiu como crítica à Igreja Católica durante o Renascimento?",
    alternativas: ["Iluminismo", "Reforma Protestante", "Contrarreforma", "Escolástica"],
    correta: 1
  },
    {
    pergunta: "61.  Qual fator contribuiu para o surgimento do Renascimento na Itália?",
    alternativas: ["Isolamento geográfico", "Presença de grandes impérios", "Intenso contato comercial com outras culturas", "Colonização espanhola"],
    correta: 2
  },
    {
    pergunta: "62.Qual cidade italiana é considerada o berço do Renascimento?",
    alternativas: ["Roma", "Veneza", "Florença", "Milão"],
    correta: 2
  },
    {
    pergunta: "63.Qual artista pintou o afresco “O Juízo Final” na Capela Sistina?",
    alternativas: ["Leonardo da Vinci", "Rafael", "Michelangelo", "Botticelli"],
    correta: 2
  },
    {
    pergunta: "64. Qual obra foi escrita por Dante Alighieri?",
    alternativas: ["Dom Quixote", "A Divina Comédia", "Os Lusíadas", "Utopia"],
    correta: 1
  },
     {
    pergunta: "65. Quem pintou “O Nascimento de Vênus”?",
    alternativas: ["Giotto", "Botticelli", "Michelangelo", "Da Vinci"],
    correta: 1
  },
   {
    pergunta: "66. Qual artista é conhecido por estudar proporções humanas e criar o “Homem Vitruviano?",
    alternativas: ["Rafael", "Donatello", "Leonardo da Vinci", "Brunelleschi"],
    correta: 2
  },
    {
    pergunta: "67.  Qual obra foi escrita por Miguel de Cervantes?",
    alternativas: ["Gargântua e Pantagruel", "Romeu e Julieta", "Dom Quixote", "Utopia"],
    correta: 2
  },
    {
    pergunta: "68.  Quem escreveu “Os Lusíadas?",
    alternativas: ["Camões", "Rabelais", "Erasmo de Roterdã", "Shakespeare"],
    correta: 0
  },
     {
    pergunta: "69. Qual pensador escreveu “Utopia”, descrevendo uma sociedade ideal?",
    alternativas: ["Thomas Morus", "Erasmo de Roterdã", "Camões", "Cervantes"],
    correta: 0
  },
     {
    pergunta: "70. Qual característica do Renascimento valoriza o ser humano como centro do universo",
    alternativas: ["Heliocentrismo", "Antropocentrismo", "Racionalismo", "Escolástica"],
    correta: 1
  },
      {
    pergunta: "71. Qual invenção de Johannes Gutenberg revolucionou a disseminação do conhecimento?",
    alternativas: ["Telescópio", "Prensa tipográfica", "Bússola", "Astrolábio"],
    correta: 1
  },
     {
    pergunta: "72.Qual foi a principal contribuição de Nicolau Copérnico para a ciência?",
    alternativas: ["Teoria geocêntrica", "Invenção do telescópio", "Teoria heliocêntrica", "Leis do movimento planetário"],
    correta: 2
  },
    {
    pergunta: "73.Qual instrumento foi usado por Galileu Galilei para observar os astros?",
    alternativas: ["Astrolábio", "Telescópio", "Bússola","Microscópio"],
    correta: 1
  },
      {
    pergunta: "74.Johannes Kepler é conhecido por ter formulado:",
    alternativas: ["A teoria da relatividade", "A teoria heliocêntrica", "As leis do movimento planetário", "A projeção cartográfica de Mercator"],
    correta: 2
  },
       {
    pergunta: "75.- O Renascimento questionava principalmente:",
    alternativas: ["A economia feudal", "A autoridade da Igreja medieval", "A arte clássica", "A expansão marítima"],
    correta: 1
  },
        {
    pergunta: "76. O que era considerado pecado pela Igreja medieval e dificultava o comércio?",
    alternativas: ["Agricultura", "Usura (cobrança de juros)", "Troca de mercadorias", "Construção de igrejas"],
    correta: 1
  },
         {
    pergunta: "77. - A Reforma Protestante foi impulsionada por críticas como:",
    alternativas: ["A valorização do lucro", "A venda de indulgências", "A tradução da Bíblia para o latim", "A construção de universidades"],
    correta: 1
  },
          {
    pergunta: "78. - Martinho Lutero defendia que a salvação vinha por:",
    alternativas: ["Boas obras", "Doações à Igreja", "Fé","Peregrinações"],
    correta: 2
  },
           {
    pergunta: "79. - O que era a simonia na Igreja medieval?",
    alternativas: ["Venda de relíquias e cargos eclesiásticos", "Tradução da Bíblia", "Criação de universidades", "Expansão das catedrais"],
    correta: 0
  },
            {
    pergunta: "80.Gerardus Mercator ficou famoso por:",
    alternativas: ["Criar leis da física", "Inventar o telescópio", "Desenvolver uma projeção cartográfica", "Formular a teoria heliocêntrica"],
    correta: 2
  },
              {
    pergunta: "81.- Leonardo da Vinci se destacou por suas contribuições à:",
    alternativas: ["Astronomia", "Cartografia", "Arte e ciência", "Reforma religiosa"],
    correta: 2
  },
    {
    pergunta: "82. Durante o Renascimento, qual foi uma das principais mudanças na forma de compreender o mundo?",
    alternativas: ["Fortalecimento da visão teocêntrica e da autoridade da Igreja", "Consolidação do feudalismo como sistema dominante", "Substituição da visão religiosa por uma perspectiva secular e antropocêntrica", "Retorno aos valores medievais e à centralidade da fé"],
    correta: 2
  },
     {
    pergunta: "83. ",
    alternativas: ["Astronomia", "Cartografia", "Arte e ciência", "Reforma religiosa"],
    correta: 2
  },



];

function iniciarQuiz() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  pontuacao = 0;
  tempo = 60;
  indiceAtual = 0;
  iniciarCronometro();
  mostrarPergunta();
}
{
  iniciarCronometro();
  mostrarPergunta();
}

function iniciarCronometro() {
  let timer = setInterval(() => {
    tempo--;
    document.getElementById("cronometro").innerText = `⏱️ Tempo: ${tempo}s`;
    if (tempo <= 0) {
      clearInterval(timer);
      document.getElementById("somFim").play();
      finalizarQuiz();
    }
  }, 1000);
}


function mostrarPergunta() {
  let q = perguntas[indiceAtual];
  document.getElementById("pergunta").innerText = q.pergunta;
  document.getElementById("alternativas").innerHTML = "";

  q.alternativas.forEach((alt, i) => {
    let btn = document.createElement("button");
    btn.innerText = alt;
    btn.classList.add("alternativa");
    btn.onclick = () => {
      const botoes = document.querySelectorAll(".alternativa");
      botoes.forEach(b => b.disabled = true);

      if (i === q.correta) {
        pontuacao++;
        btn.classList.add("correta");
        document.getElementById("somAcerto").play();
      } else {
        btn.classList.add("errada");
        botoes[q.correta].classList.add("correta");
        document.getElementById("somErro").play();
      }

      setTimeout(() => {
        indiceAtual++;
        if (indiceAtual < perguntas.length) {
          mostrarPergunta();
        } else {
          finalizarQuiz();
        }
      }, 4000);
    };
    document.getElementById("alternativas").appendChild(btn);
  });
}

function finalizarQuiz() {
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("resultado").style.display = "block";

  let nome = document.getElementById("nome").value;
  let materia = document.getElementById("materia").value;
  document.getElementById("nomeFinal").innerText = nome;
  document.getElementById("pontuacaoFinal").innerText = `${pontuacao} / ${perguntas.length}`;

  let texto = `Certifico que o aluno ${nome} alcançou a pontuação de ${pontuacao} referente à aula de ${materia}.`;
  document.getElementById("textoCertificado").innerText = texto;
}

