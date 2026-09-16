# O design system das aulas

O que este repositório traz: um design system **local**, escrito em `aulas/`, sem tema npm
nenhum (`theme: none`). Trocar por um tema pronto, ou gerar outro DS do zero, é assunto de
[`temas.md`](temas.md).

Este arquivo é o contrato: o que existe, quando usar cada coisa e as armadilhas do Slidev que
já custaram um slide.

---

## A identidade: "pedra & grafite"

Ética Profissional é uma disciplina de **documento**. O que se lê em aula é código, resolução,
parecer, prontuário — texto que tem número de artigo e data de publicação. O visual foi
construído para esse registro: institucional, sóbrio, do tipo que se apresenta numa sala de
aula, não numa timeline.

Quatro decisões carregam a personalidade. Elas não são preferência de gosto — são o que
diferencia este deck de um template genérico, e mexer numa delas muda o tom da disciplina:

**1. Fundo de pedra, tinta de grafite.** O fundo do slide (`--ds-bg`) é levemente cinza, nunca
branco puro. O branco chapado fica reservado ao que é "papel sobre a mesa": cartão, ficha de
caso, artigo de código (`--ds-surface`). O contraste entre os dois é o que faz um documento
parecer documento em vez de mais um bloco de texto.

**2. Um verde-musgo escuro como única cor de voz.** É dessaturado de propósito: marca o que
importa sem gritar, e continua legível num projetor ruim de sala de aula. O ocre acinzentado
(`--ds-accent-2`) é o contraponto, e **só** aparece quando há dois lados a comparar — em
`confronto` e em `<Balanca>`. Fora de uma comparação, ele não deveria estar na tela.

**3. Três letras, uma família, cada uma com um trabalho.** IBM Plex Sans carrega o deck; IBM
Plex Serif é a voz de quem não é você (citação, artigo de norma, documento); IBM Plex Mono é
o que tem número de registro (rótulo, artigo, numeral, rodapé). A serifa aparecendo no slide é
**sinal**, não decoração: quer dizer "este texto não é meu".

**4. Canto duro e sombra quase invisível.** Cartão flutuante é linguagem de aplicativo. Aqui a
hierarquia vem de fio, peso de letra e espaço em branco — a sombra existe só para descolar o
branco do `surface` do cinza do `bg` quando os dois se encostam.

E uma quinta, que não é cor nem letra: **todo slide tem rodapé**, com a disciplina à esquerda
e o número à direita. É o que faz o conjunto parecer material de aula, e não uma apresentação
avulsa. Ver [O rodapé global](#o-rodapé-global).

---

## Onde mora cada coisa

O Slidev define a raiz do projeto como **a pasta do arquivo `.md`**. As aulas estão em
`aulas/`, então é lá dentro que ele procura tudo:

```
aulas/
├── styles/index.css     ← o único CSS que o Slidev importa (os outros entram por @import)
│   ├── fontes.css       ← os @font-face da IBM Plex
│   ├── tokens.css       ← cor, tipo, espaço, forma — a identidade visual inteira
│   ├── base.css         ← como o markdown puro se parece
│   └── utilities.css    ← as classes `ds-*` que um slide pode usar
├── global-top.vue       ← o rodapé que acompanha a aula inteira
├── layouts/*.vue        ← a forma do slide (campo `layout:` do frontmatter)
├── components/*.vue     ← peças usadas dentro do slide (auto-importadas, sem `import`)
├── lib/asset.ts         ← resolve caminho de imagem contra a base do site
└── public/              ← imagens; `/foto.png` no markdown = `aulas/public/foto.png`
    └── fonts/           ← os .woff2 da IBM Plex, servidos pelo próprio site
```

Uma `public/` ou uma `components/` na **raiz do repositório** não seria vista por ninguém.

---

## Tokens

Toda decisão visual está em `aulas/styles/tokens.css`. Layouts e componentes só consomem
`var(--ds-*)`; nenhum escreve um hex na mão. **Mudar a identidade visual das aulas é editar
esse arquivo, e só ele** — inclusive a página inicial do site, que lê os mesmos tokens.

| grupo | tokens |
|---|---|
| cor | `--ds-bg` `--ds-surface` `--ds-surface-sunk` `--ds-ink` `--ds-muted` `--ds-rule` `--ds-accent` `--ds-accent-2` `--ds-ok` `--ds-warn` `--ds-danger` |
| cor translúcida | `--ds-accent-wash` `--ds-accent-2-wash` `--ds-ink-wash` `--ds-ok-wash` `--ds-warn-wash` `--ds-danger-wash` |
| letra | `--ds-font-sans` `--ds-font-serif` `--ds-font-mono`; pesos `--ds-weight-regular` `--ds-weight-medium` `--ds-weight-bold` |
| tamanho | escala `--ds-text-xs` … `--ds-text-3xl`, `--ds-leading-*`, `--ds-tracking-title`, `--ds-tracking-kicker`, `--ds-measure` |
| espaço | `--ds-space-1` … `--ds-space-8`; margem do slide `--ds-pad-x` `--ds-pad-y` `--ds-pad-bottom` `--ds-pad-slide`; faixa do rodapé `--ds-footer-h` |
| forma | `--ds-radius-sm` `--ds-radius` `--ds-radius-lg` `--ds-border` `--ds-border-thick` `--ds-shadow` |

O tema claro vive em `:root`, o escuro em `.dark` — a classe que o Slidev põe no `<html>`
conforme o `colorSchema` do headmatter. Nenhuma cor pode existir **só** no bloco `.dark`.

Três regras que não são estilo, são manutenção:

- **Contraste.** Todo par texto/fundo passa em WCAG AA (≥ 4.5:1) sobre `--ds-bg` **e** sobre
  `--ds-surface`, nos dois temas. Ao mexer numa cor, refaça a conta: metade da turma vê o
  slide de longe e a outra metade vê o PDF impresso.
- **Só três pesos existem, e cada um tem um trabalho.** `--ds-weight-regular` (400) é o corpo,
  `--ds-weight-medium` (600) é ênfase dentro do texto (`strong`, autor de citação, o passo da
  vez) e `--ds-weight-bold` (700) é **título** — de slide, de cartão, de princípio, de qualquer
  bloco. Título em `medium` é o que achata a hierarquia: junto com o degrau da escala, o peso é
  o que faz um título ser visto antes de ser lido. Escrever `font-weight: 500` ou `650` não
  deixa a letra mais fina nem mais grossa — o navegador arredonda para o arquivo mais próximo,
  e você perde a coerência sem ganhar nada.
- **A escala de tipo é fechada:** sete tamanhos. Quando um slide parece precisar de um tamanho
  fora dela, quase sempre o problema é conteúdo demais no slide. Do `base` para cima os degraus
  crescem ~1.3× cada — largos de propósito, para que o título de um cartão não fique um fio
  acima do corpo dele.
- **O corpo é 1.2rem, e a régua é a última fileira.** O palco do Slidev tem 980×552px e vai
  para um projetor: `--ds-text-base` em 1rem dá ~31px numa tela de 1080p, tamanho de texto que
  se lê a 40cm, não a dez metros. 1.2rem dá ~38px. A consequência é dura e proposital — com
  este corpo cabe muito menos texto num slide. **Quando não couber, corte o texto ou parta o
  slide em dois; não devolva a escala para trás.**

### Texto dentro de SVG não obedece à escala

Um diagrama em `figura` ocupa meia tela: o Slidev reduz o SVG para cerca de **0,7×** da largura
do `viewBox`. Um `font-size="11"` lá dentro chega à tela com 8px, e nenhum token de CSS o
corrige — o `viewBox` é um mundo à parte.

A regra do repositório, para `viewBox` de ~560 de largura: **corpo ≥ 20px, título ~26px,
rótulo ~15px**. Nesses tamanhos cada caixa do desenho comporta uma linha curta, e é esse o
teste: **o que não couber em corpo de 20px não entra no desenho** — vai para o texto do slide
ou para a nota do apresentador. Diagrama não é lugar de reproduzir o artigo inteiro; é lugar de
mostrar a forma dele.

Vale ainda: mantenha o desenho perto de **quadrado** (a coluna do `figura` é ~412×430) e cuide
que atributo de apresentação (`text-anchor="start"`) **perde** para a regra de mesma
propriedade no `<style>` do SVG — nesse caso use `style="…"` no próprio elemento.

### `ok` não é o accent

Com um accent verde, um estado "ok" da mesma família não sinalizaria nada. Por isso `--ds-ok`
é um verde deliberadamente mais azulado que `--ds-accent`: são discriminíveis lado a lado.
Se você trocar o accent por uma cor de outra família, revisite essa escolha.

### Fontes

A IBM Plex é **servida pelo próprio site**: os `.woff2` estão em `aulas/public/fonts/` e os
`@font-face` em `aulas/styles/fontes.css`. Nada de Google Fonts em tempo de exibição — um deck
no projetor da faculdade não pode depender da rede da sala, e assim o site publicado e o PDF
exportado usam exatamente a mesma letra.

São 16 arquivos (~390 KB): Sans 400/600/700 + itálico, Serif 400 + itálico, Mono 400/600, cada
um nos subsets `latin` e `latin-ext`. O navegador só baixa o que a página usa — o
`unicode-range` de cada `@font-face` cuida disso.

O `url()` dentro de `fontes.css` é um dos poucos lugares em que caminho absoluto é seguro sem
`asset()`: o Vite enxerga `url()` de um CSS em tempo de build e reescreve a base sozinho.
A landing do site não passa pelo Vite, então `scripts/build-site.mjs` faz a mesma reescrita na
mão (`fontesCss()`) e copia as fontes para `dist/fonts/`.

**Para trocar de família**, são dois arquivos: os nomes em `tokens.css` e os `@font-face` em
`fontes.css` — mais os `.woff2` em `public/fonts/`. O caminho mais curto é pedir o CSS ao
Google Fonts com um User-Agent de navegador moderno, baixar os `.woff2` que ele apontar e
regravar o `fontes.css` a partir dele, mantendo os `unicode-range` originais.

Se preferir depender da rede em troca de não versionar fonte nenhuma, o campo do Slidev
continua valendo — mas aí apague `fontes.css`, ou as duas coisas brigam:

```yaml
fonts:
  sans: IBM Plex Sans
  serif: IBM Plex Serif
  mono: IBM Plex Mono
```

---

## Layouts

Vão no campo `layout:` do frontmatter do slide. Os campos de cada um viram props.

| layout | quando usar | campos |
|---|---|---|
| `capa` | o primeiro slide da aula | `kicker` `title` `subtitle` `meta` |
| `secao` | avisar que a aula virou de assunto | `numero` `kicker` `title` `note` |
| `destaque` | uma frase sozinha na tela: a pergunta que abre a discussão, a tese, o número | `kicker` `title` `fonte` |
| `roteiro` | o índice da aula, ou lista de tópico + explicação | `kicker` `title` `itens[]` `atual` |
| `figura` | quando a imagem **é** o argumento e o texto comenta | `imagem` `legenda` `lado` `ajuste` |
| `esquema` | o diagrama que é o argumento, no slide inteiro (~872×370, desenho na horizontal) | `imagem` `kicker` `title` `legenda` `fonte` |
| `documento` | o texto da norma em tela cheia | `artigo` `norma` `title` `fonte` + slot `::margem::` |
| `caso` | a vinheta e as perguntas que ela abre | `numero` `kicker` `title` `perguntas[]` `tempo` `fonte` |
| `confronto` | duas posições em oposição, meia tela cada | `kicker` `title` `esquerda` `direita` `pergunta` + slot `::direita::` |
| `fecho` | o último slide: o que fica | `kicker` `title` `pontos[]` `proximo` |

Os layouts do próprio Slidev continuam valendo: `default`, `center`, `two-cols`,
`two-cols-header`, `image-left`, `image-right`, `iframe`, `full`, `none`. Para imagem
decorativa, `image-right` dá menos trabalho que o `figura`.

**`figura` × `esquema`.** No `figura` o desenho divide o slide com o texto e fica com ~412px
de largura, e o SVG encolhe junto com o texto dele. O `esquema` dá ao desenho a largura
inteira: o mesmo arquivo sai 2,1× maior em área. Use `esquema` quando o diagrama precisa ser
lido de longe, e desenhe-o **largo e baixo** — um desenho em pé é encolhido pela altura.

Dois campos existem no DS e **não se usam nas aulas**, por decisão do professor (ver
"Como o professor quer as aulas" no `CLAUDE.md`): o slot `::margem::` do `documento` — a
norma fica sozinha, e o comentário vai para as notas — e o `proximo` do `fecho`, porque
prometer a aula seguinte por número envelhece mal.

Campos marcados como "aceita HTML" nos comentários de cada `.vue` são renderizados com
`v-html` — dá para escrever `<span class="ds-em">assim</span>` dentro de um título.

### Os três layouts da disciplina

`documento`, `caso` e `confronto` existem porque uma aula de ética faz três coisas que uma
aula expositiva comum não faz: **lê a norma**, **discute um caso** e **sustenta duas posições
ao mesmo tempo**.

**`documento`** põe o artigo em tela cheia, em serifa, num painel branco do tamanho da página.
O layout reserva uma coluna de margem para glosa, mas nas aulas ela fica vazia: a norma vai
sozinha na tela e o comentário vai para as notas do apresentador. Um slide, um artigo; se o
texto não couber com folga, corte com "[…]" e diga de onde veio — **nunca** corte sem marcar.

**`caso`** separa fisicamente o relato (à esquerda, para ler) das perguntas (à direita, para
responder) — as perguntas continuam na tela enquanto a turma discute. Três perguntas é um bom
número: acima de quatro, a turma responde a primeira e ignora o resto. O campo `fonte` é o
lugar de dizer que o caso foi adaptado, o que num caso clínico não é detalhe.

**`confronto`** dá meia tela para cada argumento, com o slot `::direita::` para o segundo.
Os `**negritos**` e os marcadores de lista de cada coluna herdam a cor daquele lado, para não
trocar os times no meio do parágrafo. Nenhuma das duas cores é a cor do "certo" — mas, quando
o caso tem resposta, os **rótulos** dizem qual lado é o argumento e qual é a falta (ver
`CLAUDE.md`).

## Componentes

Ficam em `aulas/components/` e são **auto-importados**: basta escrever a tag no markdown.

| componente | quando usar |
|---|---|
| `<Nota>` | o aparte: `tipo` = `info` (padrão), `ok`, `alerta`, `erro` |
| `<Grade>` + `<Cartao>` | comparar coisas do mesmo tipo, 2 ou 3 colunas |
| `<Termo>` | a definição formal de uma palavra — o bloco que a turma copia |
| `<Citacao>` | a palavra de um autor, dentro de um slide com mais coisas |
| `<Artigo>` | a palavra da **norma**, ipsis litteris, com número e origem |
| `<Norma>` | a etiqueta de onde a regra saiu, solta no meio da frase |
| `<Principio>` | um princípio fundamental, com o numeral romano que ele tem no Código |
| `<Pergunta>` | o slide para de expor e passa a palavra para a turma |
| `<Passos>` | um protocolo: faça nesta ordem |
| `<Balanca>` | dois deveres que não cabem os dois, resumidos |
| `<Pessoa>` | quem é essa gente que a aula cita |
| `<LinhaDoTempo>` | cronologia: aconteceu nesta ordem |
| `<Fonte>` | o crédito no pé do slide |

### As peças que se confundem

Meia dúzia de componentes daqui se parecem de longe e resolvem coisas diferentes. Errar a
escolha não quebra nada — só faz o slide dizer a coisa errada:

| você quer… | use | e **não** |
|---|---|---|
| o texto da lei, para aplicar | `<Artigo>` | `<Citacao>`, que é palavra de autor, para discutir |
| um artigo inteiro, lido junto com a turma | layout `documento` | `<Artigo>`, que é um bloco dentro de um slide |
| definir uma palavra | `<Termo>` | `<Principio>`, que é um princípio numerado da norma |
| ordem de execução, no futuro | `<Passos>` | `<LinhaDoTempo>` (passado) ou `roteiro` (índice da aula) |
| dois lados em uma linha cada | `<Balanca>` | layout `confronto`, que é para dois argumentos |
| dois lados com parágrafos próprios | layout `confronto` | `<Balanca>`, que é resumo |
| a pergunta que abre a aula, sozinha na tela | layout `destaque` | `<Pergunta>`, que é para o meio de um slide |
| a pergunta no meio de um slide com mais coisas | `<Pergunta>` | layout `destaque` |

## Utilitários

`ds-kicker` `ds-lead` `ds-muted` `ds-em` `ds-em-2` `ds-small` `ds-num` `ds-grid` `ds-stack`
`ds-rule`. O UnoCSS do Slidev também está ligado (`text-sm`, `mt-4`, `grid`…) — use-o para
ajuste pontual, e as classes `ds-*` para o que tem significado editorial.

`ds-kicker` é a marca mais visível da identidade: rótulo em monoespaçada, caixa alta e
espacejado, que se comporta como carimbo de documento. `ds-num` é o irmão inline dele, para um
número de registro no meio da frase.

Para ver tudo renderizado em vez de lido: **`npm run ref`** abre `aulas/_design-system.md`,
que tem um slide por layout e por componente, com a situação de uso nas notas. O nome começa
com `_`, então o site não o publica.

---

## O rodapé global

`aulas/global-top.vue` desenha, em todo slide, a disciplina à esquerda e o número à direita.
O texto da esquerda vem do headmatter da aula:

```yaml
themeConfig:
  rodape: FASM · Ética Profissional
```

`themeConfig` é o campo que o Slidev reserva para configuração livre do tema, e chega inteiro
em `configs.themeConfig`. Sem o campo, aparece só o número — nenhuma aula quebra por não ter
declarado.

O rodapé some em `capa` e `fecho`, que são páginas de rosto. Para mudar essa lista, edite
`LAYOUTS_SEM_RODAPE` no próprio arquivo.

Duas coisas nesse arquivo são armadilha, e estão explicadas lá dentro: por que ele é
`global-top` e não `global-bottom`, e por que lê `useNav()` em vez de `$nav`. As duas
reaparecem abaixo.

---

## As armadilhas do Slidev

As quatro primeiras não são opinião de estilo: são comportamentos do Slidev que fazem um slide
sumir ou uma imagem quebrar **só depois de publicado**. `npm run lint` pega as três primeiras.

### 1. `src:` no frontmatter apaga o slide

`src` é o campo com que o Slidev importa **outro arquivo `.md`** no lugar do slide. Um
`src: /foto.png` faz o Slidev tentar importar `/foto.png` como markdown: o slide desaparece do
deck, sem mensagem de erro nenhuma. Por isso o layout `figura` chama o campo de `imagem`.

### 2. Os campos que o Slidev não entrega ao layout

Estes nomes são consumidos pelo Slidev e **nunca chegam como prop**:

```
clicks · clicksStart · disabled · hide · hideInToc · layout · level · preload
routeAlias · src · title · transition · zoom · dragPos · lang · clickAnimation
```

`title` é o caso que mais aparece, porque é natural querer escrever o título do slide no
frontmatter. Ele chega pelo objeto `frontmatter`, que todo layout recebe inteiro:

```vue
const props = defineProps<{ frontmatter?: Record<string, any> }>()
const title = props.frontmatter?.title
```

Todos os layouts daqui fazem assim. O lint reclama de qualquer layout que declare uma prop com
nome reservado.

### 3. Caminho de imagem que chega por prop precisa de `asset()`

O Vite reescreve caminhos que consegue ver no build — `![](/foto.png)` no markdown,
`<img src="/foto.png">` escrito literalmente no template, ou `url(/fonts/x.woff2)` num CSS.
Um caminho que chega por prop é só uma string em tempo de execução: o Vite não a enxerga, e no
GitHub Pages (onde o site vive em `/<repo>/<slug>/`) o navegador pede a imagem na raiz do
domínio e leva 404.

Localmente a base é `/` e tudo funciona — **o erro só aparece depois do deploy.** Por isso
`aulas/lib/asset.ts`, e por isso `figura.vue` e `Pessoa.vue` passam o caminho por ele.

### 4. Markdown dentro de componente precisa de linha em branco

Sem linha em branco, o conteúdo entre as tags é tratado como HTML puro e o `**negrito**`
aparece literal na tela:

```md
<Nota titulo="Assim não">
Isto sai com os **asteriscos** à mostra.
</Nota>

<Nota titulo="Assim sim">

Isto sai com o **negrito** certo.

</Nota>
```

Vale em qualquer nível de aninhamento — `<Cartao>` dentro de `<Grade>` também precisa, e
`<Artigo>`, `<Principio>` e `<Pergunta>` idem.

### 5. Camada global não enxerga `$nav`

`$nav` só é injetado dentro do slide. Numa camada global (`global-top.vue`, `global-bottom.vue`)
ele é `undefined`, e o `$nav.currentLayout` do exemplo mais óbvio derruba o **deck inteiro**
com `Cannot read properties of undefined` — tela em branco, sem slide nenhum.

Numa camada global, use os composables públicos do pacote:

```ts
import { configs, useNav } from '@slidev/client'
const { currentPage, currentLayout, total } = useNav()   // refs
const rodape = configs.themeConfig?.rodape               // headmatter
```

### 6. `global-bottom` fica atrás do fundo do slide

A ordem das camadas é `global-top` → `slide-top` → slide → `slide-bottom` → `global-bottom`.
Como `.slidev-layout` pinta o fundo do slide, **qualquer coisa em `global-bottom` fica
invisível**. Rodapé, marca d'água e numeração vão em `global-top` — e aí precisam de
`pointer-events: none`, senão a faixa engole os cliques do slide.

### 7. O reset do UnoCSS apaga o numeral da lista ordenada

O preflight do UnoCSS zera `list-style` de toda lista. Uma lista `1. 2. 3.` do markdown sai
**sem numeral nenhum** — o texto fica lá, indentado, e a ordem desaparece. `base.css` devolve
o numeral com `.slidev-layout ol { list-style: decimal }`. Se você reescrever esse arquivo,
não perca essa linha.

---

## As regras de sempre

- **Todo frontmatter é cercado por `---` em cima e embaixo.** Entre dois slides sem corpo
  aparecem duas linhas `---` seguidas — está certo. Compartilhar um `---` entre dois blocos
  quebra o parse do arquivo inteiro.
- **O bloco de abertura é headmatter e frontmatter do primeiro slide ao mesmo tempo.** O
  `title:` dele é o título do deck **e** o título que a `capa` mostra: não repita o campo.
- **CSS solto num slide é sinal de que falta um layout ou um componente.** A exceção honesta
  é o desenho que só existe naquele slide (o catálogo de cores em `_design-system.md` é um
  exemplo). Se você escreveria o mesmo `<style>` duas vezes, vire componente.
- **Nada de hex, nada de peso avulso, nada de `3.2rem` chumbado.** Tudo sai de `var(--ds-*)`.
  Um valor literal num `.vue` é um lugar que a próxima troca de identidade vai esquecer.
- Um layout ou componente novo **ganha um slide em `aulas/_design-system.md`**. É o que
  mantém o catálogo confiável.
