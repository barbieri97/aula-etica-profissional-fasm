---
theme: none
title: Aula 13 · Infração e penalidade
info: Os Arts. 21 a 25 do Código — a infração disciplinar, as cinco penalidades, o
  caso omisso e a vigência —, com o Código de Processamento Disciplinar e um estudo
  de caso sobre dosimetria
date: "2026-10-29"
author: FASM · Ética Profissional
colorSchema: light
download: true
themeConfig:
  # Lido por aulas/global-top.vue — é o texto do rodapé de todo slide.
  rodape: FASM · Ética Profissional
layout: capa
kicker: Aula 13
subtitle: O que acontece quando o Código não é cumprido, e quem resolve o que ele não diz.
meta: CEPP · Res. CFP 010/2005, Arts. 21 a 25
---

---
layout: roteiro
kicker: Aula 13
title: O caminho de hoje
itens:
  - { tema: A infração e as penalidades, desc: "Art. 21 — cinco, em ordem crescente" }
  - { tema: O caso omisso e a mudança, desc: "Arts. 22 a 25 — dúvida, caso omisso e vigência" }
  - { tema: O processo disciplinar, desc: "Res. CFP 011/2019 — gradação e dosimetria" }
  - { tema: Estudo de caso, desc: houve falta ética? e o que seria proporcional? }
---

<!--
Tempos: 25 · 25 · 20 · 20.

Esta aula lê o capítulo "Das Disposições Gerais". O estudo de caso tem uma parte a
mais: além de decidir se houve falta, decide-se o que seria proporcional — é o
exercício de dosimetria. O caso não diz qual é a família de artigos.
-->

---
layout: esquema
imagem: /estrutura-cepp.svg
title: Onde esta aula fica
legenda: O capítulo de conduta é o bloco do meio. Hoje é o de baixo.
fonte: CFP, 2005, p. 8–16.
---

Sai-se do capítulo de conduta e entra-se no que diz **o que acontece** quando ele
é transgredido.

<!--
A mudança de capítulo: os Arts. 1º a 20 dizem o que fazer e o
que não fazer; os Arts. 21 a 25 dizem quem julga, com que penalidades, quem
resolve a dúvida e desde quando tudo isso vale.

São cinco artigos e uma página — a p. 16.
-->

---
layout: secao
numero: "01"
title: A infração e as penalidades
note: Art. 21 — e a palavra que amarra a série inteira é “preceitos”.
---

---
layout: esquema
imagem: /escala-de-penalidades.svg
title: As cinco penalidades, na ordem do Código
legenda: O desenho não diz qual conduta leva a qual pena — isso o Código não fixa, e a gradação se faz caso a caso.
fonte: CFP, 2005, Art. 21, p. 16 · gradação em Res. CFP 011/2019, Arts. 139 e 140.
---
A ordem das alíneas é crescente, e a gradação é regra: só a gravidade manifesta
autoriza aplicar de saída a penalidade mais séria.

<!--
Três coisas sobre o desenho:

1. A ordem é do Código, não da aula. As alíneas "a" a "e" do Art. 21 estão em
   gravidade crescente, e o Código de Processamento Disciplinar (Res. CFP
   011/2019, Art. 139, parágrafo único) torna essa gradação obrigatória — salvo
   gravidade manifesta.

2. Só "d" e "e" trazem "ad referendum do Conselho Federal". Advertência, multa e
   censura pública são aplicadas e executadas pelo CRP.

3. O que o desenho NÃO faz é tabelar conduta e pena. Não há no Código a frase
   "quebrar sigilo dá suspensão". A dosimetria está no Art. 140 do CPD: grau de
   culpa, antecedentes, circunstâncias, gravidade, consequências, atenuantes e
   agravantes.
-->

---
layout: default
---
<Grade :cols="2">
<Artigo numero="Art. 21 · caput" norma="CEPP 2005 · p. 16">

As transgressões dos **preceitos** deste Código constituem **infração
disciplinar** com a aplicação das seguintes penalidades, na forma dos
dispositivos legais ou regimentais:

</Artigo>
<Artigo numero="Art. 21 · a a e" norma="CEPP 2005 · p. 16">

**a)** Advertência; **b)** Multa; **c)** Censura pública;

**d)** **Suspensão** do exercício profissional, por até 30 (trinta) dias, **ad
referendum** do Conselho Federal de Psicologia;

**e)** **Cassação** do exercício profissional, **ad referendum** do Conselho
Federal de Psicologia.

</Artigo>
</Grade>

<!--
A palavra que amarra a série é "PRECEITOS": o que se transgride é artigo e
alínea; o princípio fundamenta.

Repare no que o artigo NÃO traz: não há descrição de qual transgressão leva a qual
penalidade, não há prazo, não há procedimento. Ele remete — "na forma dos
dispositivos legais ou regimentais" — a outra norma.

Essa outra norma é o Código de Processamento Disciplinar, hoje a Res. CFP
011/2019, que revogou a Res. CFP 006/2007. É lá que estão o processo ético, o
direito de defesa, os recursos, a prescrição e a dosimetria.
-->

---
layout: default
---
# Art. 21 na prática · a penalidade não é automática

<Passos :atual="3" :itens="[
  { titulo: 'Representação', desc: 'de qualquer interessado, ou de ofício pelo Conselho' },
  { titulo: 'Comissão de Ética', desc: 'a COE do CRP instrui, como Comissão Processante' },
  { titulo: 'Julgamento', desc: 'pelo Conselho, com direito de defesa e produção de prova' },
  { titulo: 'Recurso', desc: 'ao CFP — e reexame necessário nos casos previstos' },
]" />

<Fonte>Procedimento: Código de Processamento Disciplinar. <Norma>Res. CFP 011/2019</Norma>, que revogou a <Norma>Res. CFP 006/2007</Norma></Fonte>

<!--
O que a turma precisa levar: entre a conduta e a penalidade há um processo, com
contraditório e ampla defesa. Ninguém é apenado por denúncia.

A representação pode partir de "qualquer interessado" — usuário, familiar, outro
psicólogo —, e o Conselho também pode agir de ofício (CPD, Art. 2º). Não é
preciso ser a pessoa atendida.

No CRP, quem apura é a Comissão de Ética (ou a de Instrução, onde houver), "na
qualidade de Comissão Processante"; quem julga é o Conselho. Suspensão e cassação
passam por reexame necessário.

Se perguntarem sobre estudante: estagiário não tem registro no CRP e não é sujeito
de processo ético disciplinar. O que existe é o dever do supervisor — Art. 17 — e
o regulamento da instituição.
-->

---
layout: secao
numero: "02"
title: O caso omisso e a mudança
note: Arts. 22 a 25 — quem resolve o que o Código não diz, e quem pode mudá-lo.
---

---
layout: documento
artigo: Art. 22
norma: Código de Ética Profissional do Psicólogo · Res. CFP 010/2005
title: Quem resolve a dúvida e o caso omisso
fonte: CFP, 2005, p. 16
---
As **dúvidas na observância** deste Código e os **casos omissos** serão resolvidos
pelos **Conselhos Regionais** de Psicologia, **ad referendum** do Conselho Federal
de Psicologia.

<!--
Este artigo responde a uma pergunta que ficou aberta no Art. 5º: o que é atividade
de emergência numa greve.

Duas hipóteses distintas, e vale separar:
- DÚVIDA NA OBSERVÂNCIA: o artigo existe, mas não está claro como aplicá-lo aqui.
- CASO OMISSO: não há artigo que alcance o fato.

Nos dois, o caminho é o mesmo e é institucional: consulta ao CRP. Na prática, é o
que gera as orientações e notas técnicas dos Regionais — e é a razão de a Comissão
de Ética do CRP ter, além da função processante, uma função de orientação.

Isso muda a relação da turma com o Conselho: o CRP não existe só para punir.
Consultar antes é conduta prevista no próprio Código.

O "ad referendum do Conselho Federal" é o que impede que cada Regional construa uma
interpretação divergente.
-->

---
layout: documento
artigo: Art. 23
norma: Código de Ética Profissional do Psicólogo · Res. CFP 010/2005
title: Como a resposta vira parte do Código
fonte: CFP, 2005, p. 16
---
Competirá ao Conselho Federal de Psicologia **firmar jurisprudência** quanto aos
casos omissos e **fazê-la incorporar a este Código**.

<!--
O artigo mais curioso do Código, porque descreve um mecanismo de auto-correção.

"Firmar jurisprudência" quer dizer consolidar entendimento a partir de decisões
repetidas. "Fazê-la incorporar a este Código" é o passo seguinte: o entendimento
não fica em nota técnica, entra no texto.

O que se pode dizer com segurança: o texto do Código em vigor continua sendo o de
2005, tal como o CFP o publica em sua página de legislação. Não houve nova redação
de artigo desde então; o que existe são reimpressões.

Isso não quer dizer que o Sistema Conselhos tenha ficado parado — quer dizer que o
desenvolvimento se deu por FORA do Código, em resoluções próprias: 001/2009,
008/2010, 001/2018, 009/2018, 011/2018, 06/2019, 011/2019. É a diferença entre o
Art. 23 e o Art. 24.

O Art. 23 previu incorporação ao texto, e o que aconteceu foi outra coisa — um
corpo crescente de resoluções ao lado do Código. A consequência prática é dura:
quem lê só o Código não conhece as regras da profissão.
-->

---
layout: default
---
# Arts. 22 e 23 na prática · da dúvida à norma

<Grade :cols="2">
<Cartao rotulo="Art. 22" titulo="A dúvida sobe">

O CAPS não sabe o que conta como "atividade de emergência" numa greve. Consulta o CRP, que responde **ad referendum** do CFP.

É a mesma via para o caso que nenhum artigo alcança.

</Cartao>
<Cartao rotulo="Art. 23" titulo="A resposta se firma">

Repetida em muitos Regionais, o CFP consolida o entendimento e o publica.

Incorporar ao texto, o passo previsto, não tem sido usado.

</Cartao>
</Grade>

<Nota tipo="info" titulo="Por que isso importa para quem está começando">

A Comissão de Ética instrui **e** orienta: consultar antes é conduta prevista.

</Nota>

<!--
Slide de aterrissagem institucional, e o mais útil para quem vai para o estágio: a
turma sai daqui sabendo que existe um lugar para perguntar.

Uma conduta adotada com base em orientação do Regional é mais defensável do que a
mesma conduta adotada por conta própria.

Se a turma perguntar como se consulta: por escrito, à Comissão de Ética do CRP da
região, descrevendo a situação sem identificar a pessoa atendida — o que já é
aplicação do Art. 9º.
-->

---
layout: documento
artigo: Art. 24
norma: Código de Ética Profissional do Psicólogo · Res. CFP 010/2005
title: Quem pode alterar o Código
fonte: CFP, 2005, p. 16
---
O presente Código poderá ser alterado pelo **Conselho Federal de Psicologia**, por
**iniciativa própria ou da categoria**, ouvidos os **Conselhos Regionais** de
Psicologia.

<!--
Três coisas neste artigo curto:

1. QUEM pode alterar: o CFP. É a mesma competência que a Lei 5.766/1971, Art. 6º,
   "e", e o Decreto 79.822/1977, Art. 6º, VII, atribuem — "elaborar e aprovar o
   Código de Ética Profissional do Psicólogo".

2. POR INICIATIVA DA CATEGORIA. O Código prevê que a mudança venha de baixo, e foi
   assim que o de 2005 se fez: 15 fóruns regionais, o II Fórum Nacional de Ética,
   três anos de discussão. Está registrado na p. 17 do PDF.

3. OUVIDOS OS CONSELHOS REGIONAIS. Não é aprovação dos Regionais, é oitiva. A
   competência decisória continua sendo do Federal.

Se a turma perguntar se há revisão em curso: não há processo de revisão anunciado
na página de legislação do CFP. Não afirme mais do que isso.
-->

---
layout: default
---
# Art. 24 na prática · o que cresceu ao lado do Código

<Grade :cols="3">
<Cartao rotulo="2009 e 2019" titulo="Registro e documentos">

Res. 001/2009, do registro documental. Res. 06/2019, dos documentos escritos.

</Cartao>
<Cartao rotulo="2010 e 2018" titulo="Perícia e testes">

Res. 008/2010, da perícia. Res. 009/2018, dos testes.

</Cartao>
<Cartao rotulo="2018 e 2019" titulo="Tecnologia e processo">

Res. 011/2018, dos serviços por tecnologia. Res. 011/2019, do processo disciplinar.

</Cartao>
</Grade>

Ler o Código não basta: as regras estão nele **e** nas resoluções.

<Fonte>Nenhuma dessas resoluções alterou o texto do Código: todas correm ao lado dele.</Fonte>

<!--
O que não pode passar: nenhuma dessas resoluções mudou uma vírgula do Código. Elas
o complementam. Por isso a guarda de cinco anos está na Res. 001/2009, e não no
Art. 15.

Uma pergunta boa: por que o CFP escolheu resolução em vez de
alterar o Código? Hipótese honesta, e diga que é hipótese: resolução se muda mais
rápido, e assunto técnico envelhece rápido. O Código, sendo mais estável, sustenta
os princípios.
-->

---
layout: documento
artigo: Art. 25
norma: Código de Ética Profissional do Psicólogo · Res. CFP 010/2005
title: A vigência
fonte: CFP, 2005, p. 16
---
Este Código entra em vigor em **27 de agosto de 2005**.

<!--
Sete palavras e um artigo inteiro. Ele fecha o Código e fecha a leitura de hoje.

Vale reativar: a Resolução 010/05 foi assinada em 21 de julho de 2005 e o Código
entrou em vigor em 27 de agosto. Cinco semanas entre aprovar e valer — é a vacatio
legis, o intervalo para que a categoria tome conhecimento.

A consequência prática: conduta praticada antes de 27/8/2005 se julga pelo Código
de 1987, ainda que a representação venha depois. A norma nova não retroage para
prejudicar.
-->

---
layout: default
---
# Art. 25 na prática · quando a regra passa a valer

<LinhaDoTempo :itens="[
  { quando: '21/7/2005', o_que: 'O Plenário aprova', desc: 'Res. CFP 010/05' },
  { quando: '27/8/2005', o_que: 'O Código entra em vigor', desc: 'cinco semanas depois' },
  { quando: 'hoje', o_que: 'Ainda é o texto de 2005', desc: 'sem nova redação de artigo' },
]" />

Conduta anterior a 27/8/2005 se julga pelo Código de 1987. <Norma>Art. 25 · CEPP 2005</Norma>

<Fonte>A Res. 010/05 revogou expressamente a <Norma>Res. CFP 002/87</Norma>.</Fonte>

<!--
Retomada do caso "a conduta de julho, a denúncia de setembro", agora com o artigo
na mão.

O terceiro item da linha do tempo: vinte e um anos depois, é o mesmo texto — o que
é principiológico ficou estável, e o que é técnico se moveu por resolução.
-->

---
layout: default
---

Um CRP julga procedente representação por laudo sem fundamentação técnica. É a primeira infração em doze anos de exercício.

<Grade :cols="2">
<Cartao rotulo="a">

Cabe cassação: documento sem fundamentação é infração grave.

</Cartao>
<Cartao rotulo="b">

A penalidade obedece à gradação, e os doze anos sem infração são atenuante.

</Cartao>
<Cartao rotulo="c">

Só o CFP aplica penalidade; o CRP apenas instrui.

</Cartao>
<Cartao rotulo="d">

Não cabe penalidade: o caso é omisso e vai ao CFP.

</Cartao>
</Grade>

<Nota v-click tipo="ok" titulo="Resposta: b">

A gradação é regra, salvo gravidade manifesta (CPD, Art. 139, parágrafo único), e
mais de cinco anos sem infração é atenuante escrita (Art. 140, § 1º, I).

</Nota>

<!--
Último item, e o que exige juntar os dois blocos: a conduta é do Art. 2º, "g", e a
consequência é do Art. 21.

- (a) é o distrator forte: pula a gradação. O parágrafo único do Art. 139 do CPD só
  admite ir direto à penalidade mais séria em caso de gravidade manifesta, e uma
  primeira infração em doze anos não é isso.
- (c) é meio-verdadeiro e por isso instrutivo: o CFP homologa apenas suspensão e
  cassação (Art. 21, "d" e "e"). Advertência, multa e censura pública são do CRP.
- (d) é o distrator de controle: não há omissão nenhuma — o Art. 2º, "g" alcança o
  fato com precisão.

E a penalidade provável? Não há resposta certa, e é esse o ponto: advertência ou censura, conforme a dosimetria do Art. 140. O Código dá o
critério, não o resultado.
-->

---
layout: secao
numero: "03"
title: O Código de Processamento Disciplinar
note: Res. CFP 011/2019 — o rito que o Art. 21 apenas menciona.
---

---
layout: documento
artigo: Res. CFP 011/2019
norma: Código de Processamento Disciplinar
title: A gradação é regra, e não costume
fonte: CFP, Res. CFP nº 11, de 14/6/2019, Art. 139, parágrafo único
---

Salvo nos casos de **gravidade manifesta**, que exijam aplicação imediata da
penalidade mais séria, a imposição das sanções **obedecerá à gradação** do artigo
anterior.

<!--
Uma frase, e ela resolve a dúvida que a turma sempre traz: "então o Conselho pode
cassar de primeira?".

Pode, mas só em gravidade manifesta — e o ônus de demonstrar que é esse o caso
está em quem julga, fundamentadamente.

O que isso significa na prática: numa primeira infração sem dano grave, a
gradação aponta para o começo da escala. Ir direto à suspensão exigiria
fundamentar por que a gradação não se aplica.

"Do artigo anterior" é a redação literal do CPD, mas a escala está no caput do
próprio Art. 139 — o Art. 138 trata de revisão. Se a turma notar, é remissão
imprecisa do texto, não outra gradação.

O CPD de 2019 revogou a Res. CFP 006/2007. Ele trata dos processos ético, ordinário
e funcional, e prevê também mediação — nem todo caso termina em penalidade.
-->

---
layout: default
---

# O que a multa é, e o que pesa na dosimetria

<Grade :cols="2">
<Cartao rotulo="a multa" titulo="1 a 5 anuidades">

Para pessoa natural; de 1 a 10 para pessoa jurídica, no valor da anuidade do CRP
no exercício em que a multa for imposta.

</Cartao>
<Cartao rotulo="a dosimetria" titulo="Sete critérios" destaque>

Grau de culpa, antecedentes, circunstâncias, gravidade, consequências, atenuantes
e agravantes — sempre **fundamentadamente**.

</Cartao>
</Grade>

<Nota tipo="info" titulo="Quatro atenuantes escritas">

Mais de cinco anos de exercício sem infração · reparação espontânea do mal ou
prejuízo causado · confissão espontânea da infração · atuação impelida por
relevante valor social ou moral.
<Norma>Res. CFP 011/2019, Art. 140, § 1º</Norma>

</Nota>

<!--
Este slide é o que a turma leva para a prova e para a vida.

Sobre a multa: a faixa está no Art. 139, "b" do CPD. Repare que a referência é a
anuidade do REGIONAL, no exercício da imposição — o valor não é fixo em reais.

Sobre a dosimetria: o Art. 140 lista os critérios e manda que sejam considerados
"em cada caso, fundamentadamente". É a mesma lógica do direito penal, e vale
nomear isso para a turma que faz Psicologia Jurídica.

As quatro atenuantes do § 1º estão na nota. A quarta — "atuação impelida por relevante valor social ou moral" — porque ela alcança
exatamente o tipo de caso que a série discutiu: quem descumpriu tentando proteger
alguém.

E a cassação, no Art. 139, "e", é do REGISTRO para o exercício profissional.
-->

---
layout: secao
numero: "04"
title: Estudo de caso
note: Desta vez a pergunta tem uma parte a mais — o que seria proporcional?
---

---
layout: caso
numero: "02"
title: A psicóloga que quebrou o sigilo
perguntas:
  - Houve falta ética? Se houve, qual é a falta e qual artigo e qual alínea a
    caracterizam?
  - A mulher ter se afastado em segurança retira a falta ética?
  - Que penalidade seria proporcional — e por quê?
tempo: 18 min
fonte: caso construído para a aula, sem correspondência com situação real
---

Uma psicóloga com onze anos de exercício e nenhuma infração atende um homem que
relata violência contra a companheira. Sem consultar ninguém, telefona à
companheira, conta o que ouviu em sessão e recomenda que ela saia de casa.

A mulher se afasta em segurança. O homem representa contra a psicóloga no CRP.

<!--
É o caso mais difícil da série: exige o Art. 10 e o Art. 21 ao mesmo tempo.

O desfecho não resolve. O fato de a mulher ter se afastado em
segurança é relevante para a DOSIMETRIA, não para a existência da falta.

Três eixos que a discussão precisa percorrer:
1. havia conflito com princípio fundamental? (sim — integridade, Princípio I)
2. a quebra foi decidida pelo critério do menor prejuízo? (não há registro de que
   se tenha buscado via menos gravosa)
3. o parágrafo único do Art. 10 foi observado? (não — contou o que ouviu em
   sessão, além do necessário para o alerta)
-->

---
layout: confronto
kicker: As duas leituras
title: O telefonema
esquerda: O argumento que pode surgir
direita: A falta é o Art. 10, parágrafo único
pergunta: Onde termina o que protege e começa o que é apenas mais informação?
---

Havia risco concreto à integridade de uma pessoa identificada. O Art. 10 autoriza
decidir pela quebra quando o Art. 9º conflita com os princípios fundamentais, e o
critério é o **menor prejuízo** — que aqui era o risco à vida dela.

::direita::

Autorizada, sim. **Executada** como manda o parágrafo único, não: ela contou **o
que ouviu em sessão**, quando bastava o alerta sobre o risco.

E não há registro de que se tenha buscado a via menos gravosa antes.

<!--
A leitura da esquerda está certa sobre a decisão de quebrar, e é essa a lição.

O que a turma precisa separar, e quase nunca separa de primeira: a DECISÃO de
quebrar e a EXECUÇÃO da quebra são dois juízos, com fundamentos distintos. A
primeira se afere pelo caput do Art. 10; a segunda, pelo parágrafo único.

O que teria sido a via menos gravosa: trabalhar clinicamente o encaminhamento com o
próprio homem; acionar a rede de proteção; e, no alerta, restringir-se ao risco.
-->

---
layout: default
---

# O veredito · e a dosimetria

<Nota tipo="erro" titulo="Houve falta ética">

**Art. 10, parágrafo único** — a quebra podia ser decidida, mas as informações
deviam ter se restringido ao **estritamente necessário**.

</Nota>

<Grade :cols="2">
<Cartao rotulo="a favor" titulo="Atenuantes">

Onze anos sem infração; atuação impelida por **relevante valor social ou moral**.
<Norma>CPD, Art. 140, § 1º</Norma>

</Cartao>
<Cartao rotulo="contra" titulo="O que pesa">

Decidiu sozinha, sem consulta, e não há registro de que tenha buscado via menos
gravosa. <Norma>Art. 10, caput · CEPP 2005</Norma>

</Cartao>
</Grade>

<!--
O veredito e o exercício de dosimetria, que é o que esta aula acrescenta à série.

Sobre a penalidade proporcional: não há resposta certa, e é isso que se ensina.
Com duas atenuantes escritas, primeira infração em onze anos e ausência de dano —
ao contrário, houve proteção —, a gradação do Art. 139, parágrafo único, aponta
para ADVERTÊNCIA. Cassação seria manifestamente desproporcional, e censura pública
exigiria fundamentar por quê.

O objetivo não é acertar a penalidade, é usar os critérios do Art. 140.

Três coisas para fechar a AULA e a SÉRIE:

1. Registrar é o que separa uma decisão difícil de uma decisão indefensável. A
   mesma conduta, com a razão registrada na hora, se sustenta muito melhor.

2. Calar também seria uma decisão, e também responderia. A turma tende a achar que
   a omissão é segura. Não é.

3. O Código não diz o que fazer. Diz como decidir, o que registrar e quem responde.
   Foi assim nas sete aulas — e é isso que a Apresentação de 2005 chamava de
   instrumento de reflexão.
-->

---
layout: fecho
kicker: Aula 13
title: O que fica da série
pontos:
  - 'Transgride-se <span class="ds-em">preceito</span> — artigo e alínea; o princípio fundamenta'
  - 'A gradação é <span class="ds-em">regra</span>, e a dosimetria tem critérios escritos'
  - 'O Código <span class="ds-em">não basta</span>: as resoluções correm ao lado dele'
---

Leitura de fechamento: os Arts. 21 a 25 e os Arts. 139 e 140 do Código de
Processamento Disciplinar.

---
layout: default
---

# Referências

**Normas**

- CFP. **Res. CFP nº 010/05** — o **CEPP**, Arts. 21 a 25 (p. 16).
- CFP. **Res. CFP nº 011/2019** — Código de Processamento Disciplinar, Arts. 139 e 140.
- CFP. **Res. CFP nº 001/2009**, Art. 2º, III — o registro da evolução do trabalho.
- BRASIL. **Lei nº 5.766/1971**, Art. 6º, “e” · **Decreto nº 79.822/1977**, Art. 6º, VII.

<!--
Referências completas:

- CFP. Resolução CFP nº 010/05, de 21 de julho de 2005. Aprova o Código de Ética
  Profissional do Psicólogo. Brasília: CFP, 2005. Arts. 21 a 25, p. 16.
- CFP. Resolução CFP nº 11, de 14 de junho de 2019. Institui o Código de
  Processamento Disciplinar; revoga a Res. CFP nº 006/2007. Art. 139 (penalidades
  e faixa da multa), Art. 139, parágrafo único (gradação, salvo gravidade
  manifesta) e Art. 140 e § 1º (dosimetria e as quatro atenuantes). O CPD trata dos
  processos ético, ordinário e funcional e prevê mediação.
- CFP. Resolução CFP nº 001/2009, de 30 de março de 2009. Art. 2º, III — registro
  da evolução do trabalho e dos procedimentos adotados.
- BRASIL. Lei nº 5.766, de 20 de dezembro de 1971, Art. 6º, "e"; Decreto nº 79.822,
  de 17 de junho de 1977, Art. 6º, VII — a competência do CFP para elaborar e
  aprovar o Código, invocada no Art. 24.

Vigência: a afirmação de que o texto em vigor continua sendo o de 2005 foi
conferida na página de legislação do CFP
(site.cfp.org.br/legislacao/codigo-de-etica/), acesso em setembro de 2026, que
publica a edição de 2005 e não registra nova redação nem processo de revisão em
curso.

Vídeo: nenhum verificado sobre os Arts. 21 a 25. Nenhum conteúdo desta aula depende
de vídeo.
-->
