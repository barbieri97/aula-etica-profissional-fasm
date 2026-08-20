---
theme: none
title: Design system — catálogo
info: Um slide por layout e por componente, com a situação de uso nas notas
date: "2026-08-11"
colorSchema: light
themeConfig:
  # Lido por aulas/global-top.vue — é o texto do rodapé de todo slide.
  rodape: FASM · Ética Profissional — bancada
layout: capa
kicker: Deck de bancada
subtitle: Um slide para cada <span class="ds-em">layout</span> e cada <span class="ds-em">componente</span>. Abra com <code>npm run ref</code>.
meta: O nome começa com <code>_</code>, então o site não publica este deck. Ele existe para você ver antes de escrever.
---

<!--
Este é o catálogo do design system: a versão renderizada do que docs/design-system.md
descreve por escrito. Toda vez que você criar um layout ou componente novo em aulas/,
acrescente um slide aqui — é o que mantém o catálogo confiável.
-->

---
layout: roteiro
kicker: O que tem aqui
title: O catálogo
itens:
  - { tema: Tokens, desc: cor, letra e espaço — o vocabulário }
  - { tema: Layouts, desc: "9 locais + os que o Slidev já traz" }
  - { tema: Componentes, desc: "14 peças para usar dentro do slide" }
  - { tema: Markdown puro, desc: como texto sem enfeite se parece }
---

---
layout: secao
numero: "01"
title: Tokens
note: Nenhum layout e nenhum componente escreve uma cor na mão. Todos leem daqui.
---

---
layout: default
---

# As cores

<div class="amostras">
  <div><span class="chip" style="background: var(--ds-accent)"></span><code>--ds-accent</code><em>a cor da disciplina</em></div>
  <div><span class="chip" style="background: var(--ds-accent-2)"></span><code>--ds-accent-2</code><em>o acento secundário</em></div>
  <div><span class="chip" style="background: var(--ds-ink)"></span><code>--ds-ink</code><em>texto principal</em></div>
  <div><span class="chip" style="background: var(--ds-muted)"></span><code>--ds-muted</code><em>texto secundário</em></div>
  <div><span class="chip" style="background: var(--ds-surface); border-color: var(--ds-rule)"></span><code>--ds-surface</code><em>cartões e blocos</em></div>
  <div><span class="chip" style="background: var(--ds-ok)"></span><code>--ds-ok</code><em>estado bom</em></div>
  <div><span class="chip" style="background: var(--ds-warn)"></span><code>--ds-warn</code><em>atenção</em></div>
  <div><span class="chip" style="background: var(--ds-danger)"></span><code>--ds-danger</code><em>erro</em></div>
</div>

<Fonte>Trocar a identidade visual das aulas = editar <code>aulas/styles/tokens.css</code>, e só ele.</Fonte>

<style>
.amostras {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--ds-space-3) var(--ds-space-6);
  margin-top: var(--ds-space-5);
}
.amostras > div { display: flex; align-items: center; gap: var(--ds-space-3); }
.amostras .chip {
  width: 2.2rem; height: 2.2rem; flex: none;
  border: 1px solid transparent; border-radius: var(--ds-radius-sm);
}
.amostras em { color: var(--ds-muted); font-size: var(--ds-text-sm); font-style: normal; }
</style>

<!--
Este slide usa um <style> local — a exceção que confirma a regra. Ele desenha uma amostra
de cor, que só existe neste catálogo. Numa aula, CSS solto é sinal de que falta um layout
ou um componente.
-->

---
layout: default
---

# A escala de tipo

<div class="escala">
  <p style="font-size: var(--ds-text-3xl)">3xl — só a capa e o destaque</p>
  <p style="font-size: var(--ds-text-2xl)">2xl — o h1 de um slide comum</p>
  <p style="font-size: var(--ds-text-xl)">xl — h2, termo, citação</p>
  <p style="font-size: var(--ds-text-lg)">lg — abertura de parágrafo, item de lista importante</p>
  <p style="font-size: var(--ds-text-base)">base — o corpo do texto</p>
  <p style="font-size: var(--ds-text-sm)">sm — legenda, tabela, crédito</p>
  <p style="font-size: var(--ds-text-xs)">xs — rótulo em caixa alta</p>
</div>

<style>
.escala p { margin: var(--ds-space-2) 0; max-width: none; line-height: 1.25; }
</style>

<!--
Sete tamanhos, e só. Quando um slide "precisa" de um tamanho que não está na escala,
o problema quase sempre é conteúdo demais no slide — não a escala.
-->

---
layout: default
---

# As três letras

<div class="familias">
  <div>
    <p class="rot">--ds-font-sans · IBM Plex Sans</p>
    <p class="ex" style="font-family: var(--ds-font-sans)">O psicólogo baseará o seu trabalho no respeito à dignidade.</p>
    <p class="uso">Carrega o deck: título, corpo, rótulo, tudo.</p>
  </div>
  <div>
    <p class="rot">--ds-font-serif · IBM Plex Serif</p>
    <p class="ex" style="font-family: var(--ds-font-serif); font-style: italic">O psicólogo baseará o seu trabalho no respeito à dignidade.</p>
    <p class="uso">A voz de outra pessoa: citação, artigo de norma, documento.</p>
  </div>
  <div>
    <p class="rot">--ds-font-mono · IBM Plex Mono</p>
    <p class="ex" style="font-family: var(--ds-font-mono); font-size: var(--ds-text-base)">Art. 9º · Res. CFP 010/2005 · 01/24</p>
    <p class="uso">O que tem número de registro: rótulo, artigo, numeral, rodapé.</p>
  </div>
</div>

<Fonte>Uma superfamília só, servida de <code>aulas/public/fonts/</code> — o deck não depende da rede da sala.</Fonte>

<style>
.familias { display: grid; gap: var(--ds-space-5); margin-top: var(--ds-space-5); }
.familias .rot {
  margin: 0; color: var(--ds-muted); font-family: var(--ds-font-mono);
  font-size: var(--ds-text-xs); letter-spacing: var(--ds-tracking-kicker); text-transform: uppercase;
}
.familias .ex { margin: var(--ds-space-1) 0 0; max-width: none; font-size: var(--ds-text-lg); line-height: 1.3; }
.familias .uso { margin: var(--ds-space-1) 0 0; color: var(--ds-muted); font-size: var(--ds-text-sm); max-width: none; }
</style>

<!-- Situação: a serifa não é decoração — é sinal. Quando ela aparece, o texto não é seu. Trocar a família inteira é editar dois arquivos: `tokens.css` (os nomes) e `fontes.css` (os @font-face). -->

---
layout: secao
numero: "02"
title: Layouts
note: Escolha pela forma do conteúdo, não pela decoração.
---

---
layout: roteiro
kicker: "layout: roteiro"
title: Este slide é o layout <code>roteiro</code>
itens:
  - { tema: Um tópico, desc: e a explicação dele }
  - { tema: Outro tópico, desc: "com <code>atual</code> marcando onde estamos" }
  - { tema: Um terceiro, desc: "a lista aceita item simples também" }
atual: 2
---

<!-- Situação: índice da aula, ou qualquer lista curta de tópico + explicação. Repetir o mesmo roteiro entre seções, mudando `atual`, ajuda a turma a se localizar. -->

---
layout: destaque
kicker: "layout: destaque"
title: Uma frase <span class="ds-em">sozinha</span> na tela.
fonte: o campo <code>fonte</code> vai aqui embaixo
---

<!-- Situação: a pergunta que abre a discussão, a tese da aula, o número que impressiona. Uma frase por slide — se precisa de duas linhas de explicação, o layout é outro. -->

---
layout: figura
imagem: /exemplo-figura.svg
legenda: O campo <code>legenda</code> aceita HTML.
lado: direita
---

# O layout `figura`

Imagem de um lado, texto do outro. `lado: esquerda` troca os dois de lugar, e
`ajuste: cover` faz a imagem preencher em vez de caber inteira.

O caminho é absoluto e sem a pasta: `/exemplo-figura.svg` procura em
`aulas/public/exemplo-figura.svg`.

<!-- Situação: quando a imagem É o argumento e o texto comenta. Para imagem decorativa, o layout `image-right` do Slidev serve e dá menos trabalho. Diagrama que precisa ser lido de longe pede o `esquema`, não este. -->

---
layout: esquema
imagem: /exemplo-esquema.svg
title: O layout `esquema`
legenda: O campo <code>legenda</code> aceita HTML e fica sob o desenho.
fonte: e o campo <code>fonte</code>, abaixo dela
---

O desenho recebe a largura inteira do slide; o markdown vira esta frase.

<!-- Situação: o diagrama É o slide. Num `figura` a imagem fica com 412px — 42% da tela — e o texto DENTRO de um SVG não obedece aos tokens: um rótulo de 20px chega reduzido a 14px. Aqui o desenho tem os 872px inteiros e sai em escala 1:1. Em troca, só cabe uma frase de abertura, e o desenho tem de ser deitado (~880×300 de viewBox). -->

---
layout: documento
artigo: Art. 9º
norma: Código de Ética Profissional do Psicólogo · Resolução CFP 010/2005
title: Este slide é o layout <code>documento</code>
fonte: exemplo — confira sempre o texto na fonte oficial
---

É dever do psicólogo respeitar o sigilo profissional a fim de proteger, por meio
da confidencialidade, a intimidade das pessoas, grupos ou organizações, a que
tenha acesso no exercício profissional.

::margem::

**"por meio da"** — o sigilo é o meio.

O fim é a intimidade. É daqui que sai toda exceção: quando calar deixa de
proteger, o dever muda de lado.

<!-- Situação: o slide em que a turma lê a norma junto, devagar. O bloco `::margem::` é a sua voz ao lado da voz da lei, sem se misturar com ela. Sem esse bloco, o documento ocupa a largura inteira. -->

---
layout: caso
numero: "01"
title: Este slide é o layout <code>caso</code>
tempo: 8 min
perguntas:
  - Que artigo alcança o caso — e qual deles alcança primeiro?
  - O que muda se a pessoa atendida tiver 13 anos em vez de 17?
  - Quem mais tem direito de saber, e com base em quê?
fonte: exemplo fictício, escrito para o catálogo
---

Uma adolescente de 17 anos relata, em atendimento, uso de substância. Pede que
os pais não sejam informados. A escola encaminhou o caso e cobra um retorno.

<!-- Situação: ética se ensina por caso, não por definição. O relato fica à esquerda, para ler; as perguntas ficam à direita e continuam na tela enquanto a turma discute. Relato de dois parágrafos, no máximo — mais que isso é folha impressa. -->

---
layout: confronto
title: Este slide é o layout <code>confronto</code>
esquerda: O dever de calar
direita: O dever de proteger
pergunta: Onde exatamente está a fronteira — e quem decide que ela foi cruzada?
---

O Código trata o sigilo como **regra**, não como preferência do profissional.
Quebrá-lo por conveniência é falta ética, ainda que a intenção seja boa.

::direita::

A regra tem **exceção escrita**: risco de vida muda o dever. Calar diante de um
dano iminente também é uma escolha — e também responde por ela.

<!-- Situação: dois argumentos com meia tela cada. Quando cada lado cabe em uma linha, use <Balanca> dentro de um slide comum; quando são três ou mais coisas do mesmo tipo, use <Grade> com <Cartao>. -->

---
layout: secao
numero: "03"
title: Componentes
note: O que se usa dentro de um slide, misturado ao markdown.
---

---
layout: default
---

# `<Nota>` — os quatro tipos

<Nota titulo="Info">

O tipo padrão, com **markdown funcionando** — repare nas linhas em branco.

</Nota>

<Nota tipo="ok" titulo="Funciona">

Para confirmar o caminho certo: "é assim que se faz".

</Nota>

<Nota tipo="alerta" titulo="Cuidado">

Para a pegadinha que a turma sempre cai.

</Nota>

<Nota tipo="erro" titulo="Não faça">

Para o erro que precisa ser nomeado como erro.

</Nota>

<!-- Situação: o aparte. Se o conteúdo é o ponto principal do slide, ele não vai numa <Nota> — vai no corpo. -->

---
layout: default
---

# `<Grade>` + `<Cartao>`

<Grade :cols="3">
<Cartao rotulo="passo 1" titulo="Comparar">

Três coisas do **mesmo tipo**, lado a lado.

</Cartao>
<Cartao rotulo="passo 2" titulo="Escolher" destaque>

O `destaque` pinta um cartão com o accent — um por grade.

</Cartao>
<Cartao rotulo="passo 3" titulo="Explicar">

Cartão sem `rotulo` também funciona.

</Cartao>
</Grade>

<Fonte><code>:cols</code> precisa dos dois-pontos — sem eles o Vue passa a string <code>"3"</code>.</Fonte>

<!-- Situação: comparar coisas do mesmo tipo. Duas ou três colunas; com quatro, o texto de cada cartão já não cabe. -->

---
layout: default
---

# `<Termo>` e `<Citacao>`

<Termo palavra="Design system" origem="o conjunto de decisões já tomadas">

As peças e as regras que fazem trinta slides parecerem um curso, e não trinta arquivos.

</Termo>

<Citacao autor="Alguém que você cita" fonte="Livro, 1999">

A citação de dentro do slide. Para uma frase ocupando a tela inteira, use o layout `destaque`.

</Citacao>

<!-- Situação: <Termo> é o bloco que a turma copia — a definição formal. <Citacao> é a palavra de outra pessoa, com crédito. -->

---
layout: default
---

# `<Pessoa>` e `<LinhaDoTempo>`

<div class="ds-grid">
<div>

<Pessoa nome="Com retrato" papel="o campo `foto`" foto="/exemplo-avatar.svg">

O slot é a descrição curta.

</Pessoa>

<Pessoa nome="Sem retrato" papel="entra um monograma">

Assim uma grade de pessoas não fica torta.

</Pessoa>

</div>
<div>

<LinhaDoTempo :itens="[
{ quando: '1450', o_que: 'Um marco', desc: 'a explicação dele' },
  { quando: '1501', o_que: 'Outro marco' },
  { quando: 'hoje', o_que: 'O campo é texto', desc: 'não precisa ser ano' },
]" />

</div>
</div>

<!-- Situação: <LinhaDoTempo> serve para história e também para processo — "o que acontece em cada etapa". O campo `quando` é texto livre: "etapa 1" funciona igual. -->

---
layout: default
---

# `<Artigo>` e `<Norma>`

<Artigo numero="Art. 1º — c" norma="Código de Ética Profissional do Psicólogo, 2005" trecho>

Prestar serviços psicológicos de qualidade, em condições de trabalho dignas e
apropriadas à natureza desses serviços.

</Artigo>

A etiqueta serve solta na frase: o dever de sigilo tem exceções previstas em
<Norma>Art. 10 · CEPP 2005</Norma>, e o uso de testes é regulado por
<Norma>Res. CFP 09/2018</Norma>.

<!-- Situação: <Artigo> é a palavra da norma, que se aplica; <Citacao> é a palavra de um autor, que se discute. `trecho` põe os "[…]" e é o honesto quando só um pedaço cabe. Para grifar, use **negrito**: sai no accent, e é o seu grifo sobre um texto que não é seu. -->

---
layout: default
---

# `<Principio>`

<Principio numeral="I" titulo="Dignidade">

O psicólogo baseará o seu trabalho no respeito e na promoção da liberdade, da
dignidade e da integridade do ser humano.

</Principio>

<Principio numeral="II" titulo="Responsabilidade social">

Trabalhará visando promover a saúde e a qualidade de vida, contribuindo para a
eliminação de quaisquer formas de negligência e discriminação.

</Principio>

<!-- Situação: o numeral romano faz parte do nome do princípio — é assim que a turma vai citar na prova e no estágio. Para a definição de uma PALAVRA, e não de um princípio, o componente é <Termo>. -->

---
layout: default
---

# `<Passos>` e `<Pergunta>`

<Passos :atual="2" :itens="[
  { titulo: 'Descrever o fato', desc: 'o que houve, sem adjetivo' },
  { titulo: 'Localizar a norma', desc: 'que artigo alcança o caso' },
  { titulo: 'Ouvir a pessoa', desc: 'o que ela quer e o que ela teme' },
  { titulo: 'Decidir e registrar', desc: 'a razão vale mais que a escolha' },
]" />

<Pergunta tempo="5 min">

O registro protege quem: a pessoa atendida, ou o profissional?

</Pergunta>

<!-- Situação: <Passos> é protocolo — faça nesta ordem, no futuro. <LinhaDoTempo> é cronologia, e o layout `roteiro` é o índice da aula: três peças parecidas, três usos. <Pergunta> marca o momento em que o slide para de expor e passa a palavra. -->

---
layout: default
---

# `<Balanca>`

<Balanca
  :lados="[
    { titulo: 'Sigilo', razao: 'proteger a intimidade de quem confiou' },
    { titulo: 'Proteção da vida', razao: 'impedir um dano grave e iminente' },
  ]"
  saida="Nenhum vence por regra. O caso decide — e a decisão se registra."
/>

Os dois pratos são simétricos de propósito: numa lista, o primeiro item já
pareceria o mais importante. A linha de baixo é o único lugar onde alguma coisa
se resolve — e ela pode ficar vazia, quando a aula quiser que a turma discuta
antes.

<!-- Situação: o conflito entre dois deveres, resumido. Se cada lado precisa de parágrafos próprios, o slide inteiro é deles: use o layout `confronto`. -->

---
layout: secao
numero: "04"
title: Markdown puro
note: Sem componente nenhum. É assim que o texto de todo dia se parece.
---

---
layout: default
---

# Um slide comum

Parágrafo com **negrito no accent**, *itálico*, `código inline` e um
[link](https://sli.dev/). O corpo do texto tem largura máxima de 62 caracteres — é
o que se lê sem cansar.

- Item de lista, com o traço no accent
- Outro item
  - Sublista fica menor e discreta

> A citação em markdown vira o bloco em serifa, com a barra à esquerda.

| campo | o que faz |
|---|---|
| `title` | vira o nome da aula no índice do site |
| `info` | a ementa de uma linha |
| `date` | a data, em `YYYY-MM-DD` |

---
layout: fecho
title: Onde continuar
pontos:
  - "O contrato escrito: <code>docs/design-system.md</code>"
  - "Trocar tudo por um tema npm, ou gerar outro DS: <code>docs/temas.md</code>"
proximo: Copie uma aula de exemplo e comece a escrever
---

Layouts e componentes novos entram em `aulas/layouts/` e `aulas/components/` — e ganham
um slide aqui.
