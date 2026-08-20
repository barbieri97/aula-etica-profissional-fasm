<!--
  esquema — o diagrama ocupa o slide inteiro. Para quando o desenho **é** o
  argumento, e não a ilustração de um texto ao lado.

  ---
  layout: esquema
  title: A cadeia que dá legalidade ao Código
  imagem: /cadeia-de-legalidade.svg
  legenda: Quem escreve a regra também julga a sua violação.
  fonte: BRASIL. Lei nº 5.766, de 20/12/1971
  ---

  Uma frase de abertura, opcional — o markdown do slide.

  ---

  Por que existir, se já há o `figura`: num `figura` a imagem divide o slide com
  o texto e sobra-lhe **412px de largura**, 42% da tela. Um diagrama reduzido a
  0,7× tem o seu texto reduzido junto, e nenhum token de CSS alcança o interior
  de um SVG (ver docs/design-system.md). Aqui o desenho recebe os 872px
  inteiros: o mesmo arquivo fica 2,1× maior em área, e o rótulo de 20px do
  `viewBox` chega à tela com 20px de verdade.

  A contrapartida é a forma: o espaço que sobra é **largo e baixo** (~872×370).
  Diagrama para este layout se desenha na horizontal — sequência da esquerda
  para a direita, ou colunas lado a lado. Um desenho em pé é encolhido pela
  altura e desperdiça a largura toda.

  Quando **não** usar: imagem que ilustra (foto, capa, retrato) — isso é
  `figura`, com o texto ao lado. E se o desenho precisa de três parágrafos de
  explicação na mesma tela, também é `figura`: aqui só cabe uma frase.

  O campo se chama `imagem` e não `src` de propósito: `src` é reservado pelo
  Slidev (importa outro .md) e o slide sumiria do deck, sem erro nenhum.
-->
<script setup lang="ts">
// `asset()` é obrigatório em caminho que chega por prop — sem ele a imagem some quando o
// site é publicado em subdiretório. O porquê está em aulas/lib/asset.ts.
import { asset } from '../lib/asset'

// `title` é campo reservado do Slidev: ele o usa para o índice e NÃO o repassa como prop.
// O jeito de lê-lo é pelo objeto `frontmatter` — ver docs/design-system.md.
const props = defineProps<{
  imagem?: string
  kicker?: string
  legenda?: string
  fonte?: string
  frontmatter?: Record<string, any>
}>()

const title = props.frontmatter?.title
const arquivo = asset(props.imagem)
</script>

<template>
  <div class="slidev-layout ds-esquema">
    <header v-if="kicker || title" class="cabecalho">
      <p v-if="kicker" class="ds-kicker" v-html="kicker" />
      <h1 v-if="title" v-html="title" />
    </header>

    <div class="lead"><slot /></div>

    <figure v-if="arquivo" class="desenho">
      <img :src="arquivo" alt="">
    </figure>

    <p v-if="legenda" class="ds-small legenda" v-html="legenda" />
    <p v-if="fonte" class="ds-small fonte" v-html="fonte" />
  </div>
</template>

<style scoped>
.ds-esquema {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.cabecalho {
  flex: none;
}

/* Um degrau abaixo do h1 de um slide comum: aqui o título anuncia o desenho,
   não compete com ele pela tela. */
.cabecalho :deep(h1) {
  margin: 0;
  font-size: var(--ds-text-xl);
}

/* O slot é uma frase, não um parágrafo: se estiver vazio, não abre espaço. */
.lead {
  flex: none;
}

.lead:not(:empty) {
  margin-top: var(--ds-space-3);
}

/* Mais largo que a medida de leitura corrida: é uma frase só, no topo de um
   slide inteiro, e cada linha a mais que ela ocupa sai da altura do desenho. */
.lead :deep(p) {
  margin: 0;
  max-width: 72ch;
}

/* `min-height: 0` é o que permite ao desenho encolher para caber em vez de
   empurrar a legenda para fora do slide. */
.desenho {
  flex: 1;
  min-height: 0;
  margin: var(--ds-space-4) 0 0;
  display: flex;
}

/* `contain` mantém a proporção do arquivo e centraliza o que sobra: o desenho
   cresce até o primeiro dos dois limites — a largura do slide ou a altura que
   restou. */
.desenho img {
  width: 100%;
  height: 100%;
  min-height: 0;
  object-fit: contain;
  object-position: center;
}

.legenda {
  flex: none;
  margin: var(--ds-space-3) 0 0;
  padding-left: var(--ds-space-3);
  border-left: 2px solid var(--ds-rule);
  max-width: none;
}

.fonte {
  flex: none;
  margin: var(--ds-space-2) 0 0;
  max-width: none;
}
</style>
