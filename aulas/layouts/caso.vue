<!--
  caso — a vinheta e as perguntas que ela abre. O slide de trabalho da turma.

  ---
  layout: caso
  numero: "03"
  title: A adolescente que pede sigilo
  perguntas:
    - Que artigo alcança o caso — e qual deles alcança primeiro?
    - O que muda se ela tiver 13 anos em vez de 17?
    - Quem mais tem direito a saber, e por quê?
  tempo: 10 min
  fonte: caso adaptado de situação real, com dados alterados
  ---

  Uma adolescente de 17 anos relata, em atendimento, uso de substância. Pede
  que os pais não sejam informados. A escola encaminhou o caso e cobra retorno.

  ---

  Ética não se ensina por definição, se ensina por caso: a definição a turma lê
  em casa. Este layout separa fisicamente as duas coisas que o caso tem — o
  relato, que é para ler; e as perguntas, que são para responder. Enquanto a
  turma discute, as perguntas continuam na tela.

  · O relato vai no corpo do slide (markdown normal), curto: se ele não cabe em
    dois parágrafos, vira folha impressa, não slide.
  · `perguntas` é uma lista; cada item aceita HTML. Três é um bom número —
    acima de quatro, a turma responde a primeira e ignora o resto.
  · `tempo` aparece junto do rótulo, e serve para você controlar o relógio.
  · `numero`, `title` e `fonte` aceitam HTML. `fonte` é o lugar de dizer que o
    caso foi adaptado — o que, num caso clínico, não é detalhe: é o Art. 9º.
-->
<script setup lang="ts">
// `title` chega pelo objeto `frontmatter`, não como prop — ver docs/design-system.md.
const props = withDefaults(defineProps<{
  numero?: string | number
  kicker?: string
  perguntas?: string[]
  tempo?: string
  fonte?: string
  frontmatter?: Record<string, any>
}>(), {
  kicker: 'caso',
})

const title = props.frontmatter?.title
</script>

<template>
  <div class="slidev-layout ds-caso">
    <header class="cabecalho">
      <p class="ds-kicker rotulo">
        <span v-html="kicker" />
        <span v-if="numero !== undefined" class="numero">{{ numero }}</span>
      </p>
      <h1 v-if="title" v-html="title" />
    </header>

    <div class="corpo">
      <div class="vinheta"><slot /></div>

      <aside v-if="perguntas?.length" class="perguntas">
        <p class="ds-kicker rotulo">
          <span>para discutir</span>
          <span v-if="tempo" class="tempo">{{ tempo }}</span>
        </p>
        <ol>
          <li v-for="(p, i) in perguntas" :key="i" v-html="p" />
        </ol>
      </aside>
    </div>

    <p v-if="fonte" class="ds-small fonte" v-html="fonte" />
  </div>
</template>

<style scoped>
.ds-caso {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.cabecalho {
  flex: none;
}

.rotulo {
  display: flex;
  align-items: baseline;
  gap: var(--ds-space-3);
  max-width: none;
}

.numero {
  color: var(--ds-ink);
  font-variant-numeric: tabular-nums;
}

.cabecalho :deep(h1) {
  margin: 0;
  font-size: var(--ds-text-xl);
}

/* `min-height: 0` deixa a vinheta rolar em vez de empurrar o rodapé para fora. */
.corpo {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
  gap: var(--ds-space-6);
  align-items: start;
  padding-top: var(--ds-space-5);
}

/* A vinheta é papel sobre a mesa — a ficha do caso. */
.vinheta {
  max-height: 100%;
  overflow: auto;
  padding: var(--ds-space-5);
  border: var(--ds-border) solid var(--ds-rule);
  border-left: var(--ds-border-thick) solid var(--ds-accent);
  border-radius: 0 var(--ds-radius) var(--ds-radius) 0;
  background: var(--ds-surface);
  line-height: var(--ds-leading-loose);
}

.vinheta :deep(> :first-child) {
  margin-top: 0;
}

.vinheta :deep(> :last-child) {
  margin-bottom: 0;
}

.vinheta :deep(p) {
  max-width: none;
}

.tempo {
  margin-left: auto;
  color: var(--ds-muted);
  font-variant-numeric: tabular-nums;
}

.perguntas ol {
  margin: var(--ds-space-3) 0 0;
  padding-left: 1.6em;
}

.perguntas li {
  margin: 0 0 var(--ds-space-4);
  padding-left: var(--ds-space-1);
  font-size: var(--ds-text-base);
  line-height: var(--ds-leading-normal);
  text-wrap: pretty;
}

.perguntas li::marker {
  color: var(--ds-accent);
  font-family: var(--ds-font-mono);
  font-size: 0.85em;
  font-variant-numeric: tabular-nums;
}

.fonte {
  flex: none;
  margin: var(--ds-space-3) 0 0;
  max-width: none;
}
</style>
