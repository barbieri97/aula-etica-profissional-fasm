# Aulas de Ética Profissional em Slidev

Decks [Slidev](https://sli.dev/) da disciplina **Ética Profissional** (FASM). **Uma aula por
arquivo `.md`** em `aulas/`, publicadas no GitHub Pages, cada uma na sua própria URL.

Não há tema npm (`theme: none`): o visual vem de um design system local, escrito em
`aulas/styles`, `aulas/layouts` e `aulas/components`. Trocar por um tema pronto, ou gerar
outro DS, é decisão de quem usa o repositório — os scripts não sabem qual é o visual.

## Antes de escrever ou editar qualquer deck

Leia **[`docs/design-system.md`](docs/design-system.md)** — a identidade, os layouts, os
componentes, os tokens e, principalmente, [as armadilhas do
Slidev](docs/design-system.md#as-armadilhas-do-slidev) que fazem um slide sumir sem erro.

Para ver renderizado em vez de lido: `npm run ref` abre `aulas/_design-system.md`, um slide
por layout e por componente. O `_` no nome mantém esse deck fora do site.

Se a aula for usar outro visual, o roteiro dos dois caminhos (tema npm ou DS gerado) está em
**[`docs/temas.md`](docs/temas.md)**.

## A identidade visual, em uma tela

O tema se chama **"pedra & grafite"** e foi feito para o registro de uma disciplina de
documento — código, resolução, parecer, prontuário. Institucional e sóbrio, não chamativo.

- **Fundo de pedra (`--ds-bg`), nunca branco puro.** O branco (`--ds-surface`) é reservado ao
  que é "papel sobre a mesa": cartão, ficha de caso, artigo de código.
- **Verde-musgo escuro é a única cor de voz.** O ocre (`--ds-accent-2`) só entra quando há
  **dois lados a comparar** (`confronto`, `<Balanca>`) — fora disso, não deveria estar na tela.
- **IBM Plex, três cortes com três trabalhos.** Sans carrega o deck; **serifa é a voz de quem
  não é você** (citação, artigo, documento); mono é o que tem número de registro (rótulo,
  artigo, numeral, rodapé). Serifa no slide é sinal, não decoração.
- **Canto duro, sombra quase invisível.** A hierarquia vem de fio, peso de letra e espaço em
  branco — não de cartão flutuando.
- **Todo slide tem rodapé** com a disciplina e o número, exceto `capa` e `fecho`.

Três regras de manutenção que vêm junto: todo par texto/fundo passa em **WCAG AA** nos dois
temas; só existem **três pesos** (400/600/700 — escrever `500` ou `650` não faz nada, o
navegador arredonda); e a **escala de tipo é fechada** em sete tamanhos.

As fontes são **servidas pelo próprio site** (`aulas/public/fonts/` + `aulas/styles/fontes.css`),
não pelo Google: deck no projetor da faculdade não pode depender da rede da sala.

## As armadilhas que mais quebram deck

- **`src:` no frontmatter apaga o slide.** É o campo com que o Slidev importa outro `.md`. Um
  `src: /foto.png` faz o slide desaparecer sem mensagem nenhuma — por isso o layout `figura`
  chama o campo de `imagem`. O mesmo vale para os outros campos reservados (`title`, `layout`,
  `zoom`, `level`…): eles nunca chegam como prop. `title` se lê pelo objeto `frontmatter`.
- **Caminho de imagem que chega por prop precisa passar por `asset()`** (`aulas/lib/asset.ts`).
  Sem isso a imagem some quando o site é publicado em subdiretório — e continua funcionando
  localmente, então o erro só aparece depois do deploy.
- **Todo frontmatter é cercado por `---` em cima e embaixo.** Entre dois slides sem corpo você
  vê duas linhas `---` seguidas: está certo. Compartilhar um `---` entre dois blocos quebra o
  parse do arquivo inteiro.
- **Markdown dentro de componente só funciona com linha em branco** depois da tag de abertura
  e antes da de fechamento. Sem elas, `**negrito**` aparece com os asteriscos na tela.
- **Camada global não enxerga `$nav`.** Em `global-top.vue` / `global-bottom.vue` ele é
  `undefined` e derruba o deck inteiro. Use `useNav()` e `configs` do `@slidev/client`.
- **`global-bottom` fica atrás do fundo do slide** e some. Rodapé e numeração vão em
  `global-top`, com `pointer-events: none`.

`npm run lint` pega as três primeiras. Rode antes de commitar.

## Nada de CSS solto no slide

Escolha o `layout:` que casa com a forma do conteúdo e preencha o frontmatter dele; para o que
vai dentro do slide, use os componentes. `<style>` num slide é sinal de que falta um layout ou
um componente — a exceção honesta é o desenho que só existe naquele slide.

Pela mesma razão: **nada de hex, de peso de letra avulso ou de medida chumbada** dentro de um
`.vue`. Tudo sai de `var(--ds-*)`; um valor literal é um lugar que a próxima troca de
identidade vai esquecer.

### As peças que se confundem

| você quer… | use | e **não** |
|---|---|---|
| o texto da lei, para aplicar | `<Artigo>` | `<Citacao>`, que é palavra de autor |
| um artigo lido junto com a turma | layout `documento` | `<Artigo>`, que é bloco dentro de um slide |
| definir uma palavra | `<Termo>` | `<Principio>`, que é princípio numerado da norma |
| ordem de execução, no futuro | `<Passos>` | `<LinhaDoTempo>` (passado) / `roteiro` (índice) |
| dois lados em uma linha cada | `<Balanca>` | layout `confronto` |
| dois lados com parágrafos próprios | layout `confronto` | `<Balanca>` |
| a pergunta sozinha na tela | layout `destaque` | `<Pergunta>` |
| a pergunta no meio de um slide | `<Pergunta>` | layout `destaque` |

## Convenções

| | |
|---|---|
| Decks | `aulas/aula-NN-slug-descritivo.md` |
| URL | o nome do arquivo (sem `.md`) vira o caminho: `/<repo>/aula-NN-slug-descritivo/` |
| Deck de bancada | prefixo `_` (`aulas/_design-system.md`) — o site não publica |
| Tema | `theme: none` + design system local; ou um pacote npm, ver `docs/temas.md` |
| Idioma | conteúdo em português |
| Imagens | `aulas/public/` — **não** na raiz do repo (veja "Por que `aulas/public/`" abaixo) |
| Headmatter | além de `theme`/`title`, cada aula traz `info:` (ementa de uma linha) e `date:` (`YYYY-MM-DD`, entre aspas) — os dois alimentam a landing page |
| Rodapé | `themeConfig: { rodape: ... }` no headmatter — é o texto que `aulas/global-top.vue` mostra em todo slide |
| Identidade do curso | `site.config.json` na raiz (`title`, `institution`, `description`, `intro`) — o único lugar com o nome da disciplina |

O bloco de abertura de um deck é headmatter **e** frontmatter do primeiro slide ao mesmo
tempo. O `title:` dele é o título do deck e o que a `capa` mostra — não repita o campo.

## Layouts e componentes

Nove layouts locais: `capa` · `secao` · `destaque` · `roteiro` · `figura` · `documento` ·
`caso` · `confronto` · `fecho`. Os do Slidev (`default`, `two-cols`, `center`…) continuam
valendo.

Quatorze componentes, auto-importados: `<Nota>` · `<Grade>` · `<Cartao>` · `<Termo>` ·
`<Citacao>` · `<Artigo>` · `<Norma>` · `<Principio>` · `<Pergunta>` · `<Passos>` ·
`<Balanca>` · `<Pessoa>` · `<LinhaDoTempo>` · `<Fonte>`.

Os três layouts e as seis peças específicos da disciplina existem porque uma aula de ética faz
três coisas que uma aula expositiva comum não faz: **lê a norma** (`documento`, `<Artigo>`,
`<Norma>`, `<Principio>`), **discute um caso** (`caso`, `<Pergunta>`, `<Passos>`) e
**sustenta duas posições ao mesmo tempo** (`confronto`, `<Balanca>`).

Cada `.vue` abre com um comentário que traz o exemplo de uso e o "quando **não** usar". É a
documentação de primeira mão — leia o arquivo antes de inventar um componente novo.

**Layout ou componente novo ganha um slide em `aulas/_design-system.md`.** É o que mantém o
catálogo confiável.

## Comandos

```bash
npm run dev                                  # abre a primeira aula de aulas/ com hot reload
npm run dev -- 03                            # abre a aula cujo nome contém "03"
npm run ref                                  # abre o catálogo de layouts/componentes
npm run lint                                 # valida todos os decks
npm run build                                # builda tudo em dist/ (roda o lint antes)
```

`npm run dev` serve **uma aula por vez**, na raiz (`/`). O conjunto das aulas mais a página
inicial só existe depois do `npm run build` — é o build que dá a cada deck o seu `--base`.

Para adicionar uma aula nova: crie o `.md` em `aulas/`, commit, push. O workflow builda e
publica — nenhuma config precisa ser tocada.

O dev server expõe um **servidor MCP** em `http://localhost:<porta>/__mcp/` (listar, ler,
editar e navegar slides) — útil para conferir um slide renderizado sem sair do editor.

## Por que `aulas/public/`

O Slidev define `userRoot = dirname(<arquivo do deck>)` e roda o Vite com `root: userRoot` e
`publicDir: <userRoot>/public`. Ou seja: `public/`, `components/`, `layouts/`, `setup/`,
`styles/` e `global-top.vue` **seus** são procurados dentro da pasta do deck, não na raiz do
repo. Os mesmos nomes na raiz são ignorados em silêncio.

O tema npm é a exceção — ele é resolvido por resolução de pacote Node a partir do arquivo
`.md`, que sobe os diretórios pai até achar o `node_modules/` da raiz. Por isso deck em
subpasta funciona com tema npm, mas não funcionaria com layouts locais colocados na raiz.

## Build e deploy

`scripts/build-site.mjs` roda um `slidev build` **por aula** (cada uma precisa do seu próprio
`--base`, que é único por invocação do CLI), com `--router-mode hash` — o modo que o Slidev
documenta para deploy em subdiretório como o GitHub Pages. Depois gera a landing
`dist/index.html` lendo o headmatter de cada deck; o CSS dela é pintado com os tokens de
`aulas/styles/tokens.css` e os `@font-face` de `aulas/styles/fontes.css`, então a página
inicial acompanha o visual e a letra das aulas.

As fontes exigem um cuidado a mais na landing, que não passa pelo Vite: `fontesCss()` copia
`aulas/public/fonts/` para `dist/fonts/` e reescreve o `url("/fonts/…")` para
`url("<base>fonts/…")`. Dentro de um deck quem faz as duas coisas é o Slidev/Vite.

A publicação é pelo **artefato do Actions**: o job `build` empacota o `dist/` com
`upload-pages-artifact` e o job `deploy` o entrega ao Pages com `deploy-pages` (OIDC — daí
`pages: write` + `id-token: write` e o `environment: github-pages`). Exige **Settings → Pages
→ Source: `GitHub Actions`**; com a fonte em `Deploy from a branch` o `configure-pages` falha.
Detalhes no README.

`scripts/lint.mjs` é o lint do repositório, e é agnóstico de tema: a lista de layouts e
componentes válidos é montada na hora, a partir do Slidev, do tema declarado (se houver) e das
pastas locais de `aulas/`.

`scripts/lib.mjs` concentra o que os scripts compartilham: onde ficam as aulas (`deckFiles()`
ignora os `_`; `allDeckFiles()` inclui), como achar binários de `node_modules` sem npx
(`binOf()`), como ler o `site.config.json` (`siteConfig()`) e o que existe de layout e
componente (`knownNames()`). Nenhum script tem nome de arquivo de aula fixo.

O `--base` vem da env `SITE_BASE` (`/` local; no CI, o output `base_path` do
`configure-pages`, que é o caminho da URL real do site). **O nome do repositório no GitHub faz
parte das URLs** — renomear o repo muda todos os links e exige rodar o workflow de novo.

## As aulas de exemplo

`aula-01` (tipografia), `aula-02` (bicicleta) e `aula-03` (fermentação) são decks de bancada
herdados do template: o assunto é aleatório de propósito, e eles existem para exercitar o
design system num deck de verdade. Apague-os quando as aulas reais da disciplina entrarem.
