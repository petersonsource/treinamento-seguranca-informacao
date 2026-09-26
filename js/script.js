/* ============================================================
   Edite, textos, perguntas e quiz aqui.
============================================================ */

/* Link para pesquisa do Google Forms */
const SURVEY_URL = "https://forms.google.com/";

const modules = [
  {
    title: "Módulo 1 — Segurança da Informação",
    pages: [
      {title: "Segurança da Informação", html: `<p>A Segurança da Informação é o conjunto de cuidados que tomamos para proteger nossos dados, seja no computador, no celular ou na internet. Ela serve para evitar que informações importantes sejam roubadas, alteradas ou perdidas. Assim como trancamos a porta de casa para não deixar estranhos entrarem, também precisamos proteger os nossos dados digitais. Isso envolve criar boas senhas, não compartilhar informações pessoais com qualquer pessoa e ter cuidado com e-mails ou links suspeitos. Hoje em dia, a segurança da informação é importante para todos, não só para quem trabalha com tecnologia. Proteger suas informações é proteger sua privacidade, seus bens e sua tranquilidade no mundo digital.</p>`},
      {title: "Confidencialidade", html: `<p>A confidencialidade é o cuidado de manter o sigilo das informações. Significa garantir que só pessoas autorizadas possam acessar certos dados. Por exemplo, sua senha do banco é algo que apenas você deve saber. Se outra pessoa descobrir, ela pode usar seu dinheiro sem sua permissão. Por isso, é importante criar senhas fortes, não compartilhar logins e usar recursos de segurança como autenticação em dois fatores (aquele código que chega por mensagem ou aplicativo). A confidencialidade é como colocar uma chave em algo valioso: apenas quem tem a chave certa pode abrir.</p>`},
      {title: "Integridade", html: `<p>A integridade serve para garantir que a informação não seja modificada por engano ou de propósito. Isso quer dizer que um dado deve permanecer exatamente como foi criado, sem alterações indevidas. Imagine que você envia um arquivo com notas da escola e alguém altera os valores antes que chegue ao destino, isso quebra a integridade. Para evitar esse tipo de problema, é importante fazer cópias de segurança (backup) e usar antivírus ou programas que verifiquem arquivos. A integridade garante que as informações sejam verdadeiras e confiáveis, do mesmo jeito em que foram criadas.</p>`},
      {title: "Disponibilidade", html: `<p>A disponibilidade garante que as informações e sistemas estejam sempre prontos para uso quando alguém precisar. De nada adianta ter dados seguros se, na hora de acessar, o sistema está fora do ar. Um exemplo simples é o de uma empresa que usa o computador para registrar vendas: se o sistema parar, ela não consegue trabalhar. Para evitar isso, é importante fazer manutenção nos equipamentos, fazer backup dos arquivos e ter planos de recuperação em caso de falhas. A disponibilidade é o que garante que a tecnologia funcione bem e sem interrupções, permitindo que as pessoas possam confiar nos sistemas todos os dias.</p>`},
      {title: "Senhas Seguras", html: `<p>As senhas seguras são uma das formas mais simples e importantes de proteger suas informações. Elas funcionam como chaves digitais, que impedem que outras pessoas entrem em suas contas ou acessem seus dados. Uma senha fraca, como "123456" ou o próprio nome da pessoa, é muito fácil de adivinhar e pode permitir que alguém invada seu e-mail, rede social ou até o aplicativo do banco. Por isso, o ideal é criar senhas com letras maiúsculas e minúsculas, números e símbolos, e que não tenham relação direta com você. Também é importante não usar a mesma senha em todos os lugares e ativar a verificação em dois passos, que pede um código extra de segurança. Assim, mesmo que alguém descubra sua senha, ainda será difícil acessar sua conta. Cuidar das senhas é uma forma simples, mas poderosa, de manter sua vida digital protegida.</p>`},
    ],
    questions: [
      {q: "O que significa 'confidencialidade'?", opts: ["Disponibilidade de dados", "Acesso apenas a quem tem permissão", "Integridade de arquivos", "Backup automático"], correct: 1},
      {q: "O que é integridade da informação?", opts: ["Evitar corrupção ou alteração indevida", "Garantir acesso a todos", "Ter backups", "Usar VPN"], correct: 0},
      {q: "Qual é uma senha segura?", opts: ["123456", "verao2025", "k@z!0#S3gur0!", "senha123"], correct: 2},
    ]
  },
  {
    title: "Módulo 2 — Boas Práticas de Segurança",
    pages: [
      {title: "Boas Práticas de Segurança", html: `<p>As boas práticas de segurança são hábitos simples que ajudam a proteger seus dados no dia a dia. Assim como trancar a porta ao sair de casa, também é importante cuidar do que você faz no mundo digital. Isso inclui não compartilhar senhas, evitar acessar sites desconhecidos, desconfiar de ofertas "boas demais" e proteger seus dispositivos com senha ou biometria. Outra boa prática é bloquear o computador ou celular quando não estiver usando e sair das contas depois de utilizá-las em computadores públicos. Essas atitudes parecem pequenas, mas fazem uma grande diferença. Quando todos adotam boas práticas, a chance de cair em golpes ou perder informações diminui muito.</p>`},
      {title: "Autenticação de Dois Fatores", html: `<p>A autenticação de dois fatores, também chamada de verificação em duas etapas, é uma forma extra de proteger suas contas. Funciona assim: além da sua senha, você precisa confirmar sua identidade de outro jeito, por exemplo, com um código que chega por SMS, um aplicativo de autenticação ou até uma digital. Isso significa que, mesmo que alguém descubra sua senha, a pessoa ainda não consegue entrar na sua conta sem o segundo passo. Esse método é muito usado em redes sociais, e-mails e aplicativos de banco, pois aumenta bastante a segurança. É como ter duas chaves para abrir a mesma porta, se alguém conseguir uma, ainda falta a outra.</p>`},
      {title: "Atualizações", html: `<p>Fazer atualizações nos aparelhos e programas é essencial para manter a segurança. Quando o celular, computador ou aplicativo pede para atualizar, não é apenas para mudar o visual, muitas vezes, é para corrigir falhas de segurança que poderiam ser usadas por invasores. Ignorar essas atualizações deixa o sistema vulnerável a ataques. Por isso, é importante manter o sistema operacional, antivírus e aplicativos sempre atualizados. Isso pode ser feito de forma automática, configurando o dispositivo para instalar as atualizações assim que estiverem disponíveis. Atualizar é como trocar as fechaduras quando se descobre que elas estão com defeito: um cuidado simples, mas que evita muitos problemas.</p>`},
      {title: "Backup", html: `<p>O backup é uma cópia de segurança dos seus arquivos, feita para evitar a perda de informações importantes. Imagine que o computador quebre, o celular seja roubado ou um vírus apague tudo, se você tiver backup, pode recuperar seus dados facilmente. Ele pode ser feito em pendrives, HDs externos ou na nuvem (como Google Drive e OneDrive). O ideal é fazer backups regularmente, de preferência automáticos, e guardar as cópias em lugares diferentes. Assim, se algo acontecer com um dos dispositivos, seus arquivos ainda estarão protegidos. Fazer backup é uma forma simples de garantir que suas lembranças, documentos e trabalhos não sejam perdidos para sempre.</p>`},
      {title: "Cuidado com Links e Anexos", html: `<p>Ter cuidado com links e anexos é uma das atitudes mais importantes para se proteger de golpes na internet. Muitos ataques começam com mensagens falsas que parecem vir de bancos, empresas conhecidas ou até amigos, pedindo para clicar em um link ou abrir um arquivo. Esses links podem levar a sites falsos que roubam senhas, ou os anexos podem conter vírus que infectam seu computador. Por isso, nunca clique em nada sem ter certeza da origem. Sempre confira o endereço do site e desconfie de mensagens com erros de escrita ou tom urgente ("sua conta será bloqueada!"). O melhor é apagar e não responder. Ter atenção com links e anexos é como não abrir a porta para estranhos, um simples cuidado que pode evitar grandes problemas.</p>`},
    ],
    questions: [
      {q: "Por que usar autenticação de dois fatores?", opts: ["Para lembrar senhas", "Para aumentar segurança", "Para acelerar login", "Para usar Wi-Fi público"], correct: 1},
      {q: "Por que atualizar o sistema?", opts: ["Para mudar o visual", "Para corrigir falhas e aumentar segurança", "Para deixar mais lento", "Não é necessário"], correct: 1},
      {q: "O que é backup?", opts: ["Antivírus", "Cópia de segurança dos dados", "Rede protegida", "Firewall"], correct: 1},
    ]
  },
  {
    title: "Módulo 3 — Riscos Digitais e Conscientização",
    pages: [
      {title: "Riscos Digitais e Conscientização", html: `<p>Os riscos digitais são as ameaças que existem quando usamos a internet, como golpes, roubo de dados e vírus. Estar consciente desses riscos é o primeiro passo para se proteger. Muitas pessoas acreditam que "isso nunca vai acontecer comigo", mas qualquer um pode ser vítima se não tiver cuidado. Por isso, é importante desconfiar de mensagens suspeitas, não compartilhar informações pessoais e pensar antes de clicar. A conscientização é o que faz a diferença: quando você entende os perigos, passa a agir com mais atenção e a evitar atitudes arriscadas. A segurança começa com o comportamento do usuário, é ele quem decide se abre a porta ou a mantém trancada no mundo digital.</p>`},
      {title: "Phishing", html: `<p>O phishing é um tipo de golpe em que criminosos tentam enganar a vítima para roubar informações, como senhas, números de cartão e dados pessoais. Normalmente, eles enviam e-mails, mensagens ou links que parecem ser de empresas conhecidas, bancos, redes sociais ou lojas, mas que são falsos. O objetivo é fazer a pessoa clicar no link e colocar seus dados em um site falso, que imita o original. Para se proteger, é importante verificar o remetente da mensagem, nunca clicar em links desconhecidos e entrar no site digitando o endereço diretamente no navegador. Se a mensagem parecer urgente demais ("sua conta será bloqueada!"), desconfie. O phishing é um golpe de disfarce e pressa, por isso, a melhor defesa é a atenção.</p>`},
      {title: "Ransomware", html: `<p>O ransomware é um tipo de vírus que bloqueia o acesso aos seus arquivos ou sistema e exige um pagamento (resgate) para liberá-los. Ele geralmente chega por meio de anexos falsos em e-mails ou downloads de sites não confiáveis. Quando o computador é infectado, todos os arquivos como fotos, documentos e planilhas ficam criptografados, ou seja, trancados com uma senha que só o criminoso possui. A melhor forma de se proteger é fazer backups regulares, manter o antivírus atualizado e não abrir arquivos suspeitos. Pagar o resgate não garante que os dados serão devolvidos e ainda incentiva o crime. A prevenção é sempre o caminho mais seguro contra esse tipo de ataque.</p>`},
      {title: "Engenharia Social", html: `<p>A engenharia social é uma técnica usada por golpistas para manipular pessoas e obter informações confidenciais. Em vez de atacar o computador, eles atacam a confiança. O criminoso pode fingir ser um funcionário de banco, suporte técnico ou até um colega de trabalho, pedindo dados pessoais, senhas ou códigos de verificação. Muitas vezes, essas mensagens são convincentes e passam credibilidade. Para se proteger, nunca compartilhe informações pessoais por telefone, e-mail ou mensagem, e sempre confirme com a empresa ou pessoa envolvida antes de acreditar. A engenharia social mostra que o elo mais fraco na segurança não é a tecnologia, mas o ser humano, por isso, o conhecimento e a desconfiança saudável são as melhores defesas.</p>`},
      {title: "Wi-Fi Público", html: `<p>Usar Wi-Fi público, como em shoppings, cafés ou aeroportos, pode parecer prático, mas também é arriscado. Nessas redes, várias pessoas estão conectadas ao mesmo tempo, e um invasor pode tentar interceptar os dados que você envia ou recebe, como senhas e informações pessoais. Por isso, nunca acesse contas bancárias ou redes sociais em Wi-Fi público sem proteção. Se precisar usar, prefira redes protegidas por senha e evite sites que exigem login. Uma boa opção é usar uma VPN (Rede Privada Virtual), que cria uma conexão segura mesmo em redes abertas. Lembre-se: Wi-Fi gratuito pode sair caro se colocar sua segurança em risco.</p>`},
    ],
    questions: [
      {q: "O que é phishing?", opts: ["Backup de dados", "Mensagem falsa para roubar dados", "Sistema seguro", "VPN"], correct: 1},
      {q: "O que faz o ransomware?", opts: ["Bloqueia dados e cobra resgate", "Aumenta a velocidade", "Faz backup", "Protege rede"], correct: 0},
      {q: "Por que evitar Wi-Fi público?", opts: ["Sinal fraco", "Risco de interceptação de dados", "Mais caro", "Não funciona"], correct: 1},
    ]
  },
];

let current = 0;
let totalCorrect = 0;
let totalQuestions = modules.reduce((s, m) => s + m.questions.length, 0);
let mode = "read"; // read | quiz

const card = document.getElementById('card');
const badgebar = document.getElementById('badgebar');

function renderIntro() {
  setBackground(0);
  badgebar.innerHTML = '';
  card.innerHTML = `
    <div class="eyebrow">Bem-vindo ao Treinamento</div>
    <h1>Segurança da Informação</h1>
    <div class="lead">
      <p>Segurança da informação é o conjunto de práticas que protegem dados e sistemas contra acessos indevidos, perda ou roubo. Neste treinamento, você aprenderá conceitos básicos, boas práticas e riscos digitais.</p>
    </div>
    <div class="divider"></div>
    <button class="primary" id="startBtn">Começar Treinamento</button>
  `;
  document.getElementById('startBtn').onclick = () => renderModulePage(0, 0);
}

function renderBadges() {
  badgebar.innerHTML = modules.map((_, i) => {
    const cls = i < current ? 'done' : (i === current ? 'active' : '');
    return `<div class="badge ${cls}">${i + 1}</div>`;
  }).join('');
}

const bgImages = [
  "./images/bg-image-1.jpg",
  "./images/bg-image-2.jpg",
  "./images/bg-image-3.jpg"
];

let activeLayer = 1;
function setBackground(i) {
  const img = bgImages[i % bgImages.length];
  const nextNum = activeLayer === 1 ? 2 : 1;
  const showLayer = document.getElementById('layer' + nextNum);
  const hideLayer = document.getElementById('layer' + activeLayer);
  
  showLayer.style.backgroundImage = `url('${img}')`;
  
  requestAnimationFrame(() => {
    showLayer.classList.add('visible');
    hideLayer.classList.remove('visible');
  });
  
  activeLayer = nextNum;
}

function renderModulePage(i, p) {
  current = i;
  setBackground(i);
  renderBadges();
  
  const m = modules[i];
  const page = m.pages[p];
  const isLast = p === m.pages.length - 1;
  const btnLabel = isLast ? 'Ir para o quiz' : (p === 0 ? 'Iniciar' : 'Próximo');
  
  card.innerHTML = `
    <div class="eyebrow">${m.title} — Página ${p + 1} de ${m.pages.length}</div>
    <h1>${page.title}</h1>
    <div class="lead">${page.html}</div>
    <div class="divider"></div>
    <button class="primary" id="nextBtn">${btnLabel}</button>
  `;
  
  document.getElementById('nextBtn').onclick = () => {
    if (isLast) {
      renderQuiz(i);
    } else {
      renderModulePage(i, p + 1);
    }
  };
}

function renderQuiz(i) {
  const m = modules[i];
  card.innerHTML = `
    <div class="eyebrow">Quiz — ${m.title}</div>
    <h1>Responda para avançar</h1>
    <form id="quizForm">
      ${m.questions.map((q, qi) => `
        <div class="q">
          <p class="qtext">${qi + 1}. ${q.q}</p>${q.opts.map((o, oi) => `
            <label class="opt" data-q="${qi}">
              <input type="radio" name="q${qi}" value="${oi}">
              <span>${o}</span>
            </label>
          `).join('')}
        </div>
      `).join('')}
      <button type="submit" class="primary" id="submitBtn">Enviar respostas</button>
      <p class="hint">Responda todas as perguntas antes de enviar.</p>
    </form>
  `;
  
  card.querySelectorAll('.opt').forEach(label => {
    label.addEventListener('click', () => {
      const qi = label.dataset.q;
      card.querySelectorAll(`.opt[data-q="${qi}"]`).forEach(l => l.classList.remove('selected'));
      label.classList.add('selected');
    });
  });
  
  document.getElementById('quizForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    let correctCount = 0;
    
    for (let qi = 0; qi < m.questions.length; qi++) {
      const sel = form.querySelector(`input[name="q${qi}"]:checked`);
      if (!sel) {
        alert('Responda todas as perguntas antes de enviar.'); 
        return;
      }
      if (parseInt(sel.value) === m.questions[qi].correct) correctCount++;
    }
    
    totalCorrect += correctCount;
    
    if (i + 1 < modules.length) {
      renderModulePage(i + 1, 0);
    } else {
      renderFinal();
    }
  });
}

function renderFinal() {
  setBackground(modules.length); // continua a rotação
  badgebar.innerHTML = modules.map(() => `<div class="badge done">✓</div>`).join('');
  
  const nota = (totalCorrect / totalQuestions) * 10;
  const notaStr = nota.toFixed(1);
  const passed = nota >= 8;
  
  card.innerHTML = `
    <div class="final">
      <div class="eyebrow">Resultado</div>
      <h1>Treinamento Concluído!</h1>
      <p style="margin:0;color:var(--muted);font-size:14px;">Sua nota final</p>
      <div class="score">${notaStr}</div>
      <div class="verdict ${passed ? 'pass' : 'fail'}">
        ${passed ? '✅ Parabéns! Você foi aprovado.' : '❌ Você não atingiu a média mínima de 8. Tente novamente.'}
      </div>
      <div class="restart"><button class="primary" id="continueBtn">Continuar</button></div>
    </div>
  `;
  
  document.getElementById('continueBtn').onclick = () => renderThanks();
}

function renderThanks() {
  badgebar.innerHTML = '';
  card.innerHTML = `
    <div class="eyebrow">Fim do treinamento</div>
    <h1>Obrigado pela participação!</h1>
    <div class="lead">
      <p>Agradecemos por dedicar seu tempo a este treinamento de Segurança da Informação. Sua participação ajuda a tornar nosso ambiente digital mais seguro para todos.</p>
      <p>Gostaríamos de ouvir sua opinião: clique no botão abaixo para responder a uma breve pesquisa sobre o treinamento.</p>
    </div>
    <div class="divider"></div>
    <button class="primary" id="surveyBtn">Responder Pesquisa</button>
    <p class="hint" style="margin-top:16px;"><a href="#" id="restartLink" style="color:var(--muted);">Refazer treinamento</a></p>
  `;
  
  document.getElementById('surveyBtn').onclick = () => window.open(SURVEY_URL, '_blank');
  
  document.getElementById('restartLink').onclick = (e) => {
    e.preventDefault();
    current = 0; 
    totalCorrect = 0;
    renderIntro();
  };
}

// Inicia a aplicação
renderIntro();