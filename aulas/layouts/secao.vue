<!--
  secao — divisor: avisa que a aula virou de assunto.

  ---
  layout: secao
  numero: "02"
  title: Como o fermento trabalha
  note: O que acontece dentro da massa enquanto ela descansa.
  ---

  `title` e `note` aceitam HTML. Sem `numero`, o bloco grande some.
-->
<script setup lang="ts">
// `title` chega pelo objeto `frontmatter`, não como prop — ver o comentário em capa.vue.
const props = defineProps<{
  numero?: string | number
  kicker?: string
  note?: string
  frontmatter?: Record<string, any>
}>()

const title = props.frontmatter?.title
</script>

<template>
  <div class="slidev-layout ds-secao">
    <span v-if="numero !== undefined" class="numero">{{ numero }}</span>
    <div class="texto">
      <p v-if="kicker" class="ds-kicker" v-html="kicker" />
      <h1 v-if="title" v-html="title" />
      <p v-if="note" class="ds-lead" v-html="note" />
      <slot />
    </div>
  </div>
</template>

<style scoped>
.ds-secao {
  display: flex;
  align-items: center;
  gap: var(--ds-space-7);
  height: 100%;
  background: var(--ds-accent-wash);
}

/* Número em marca-d'água: grande, mas atrás do texto na hierarquia de leitura.
   Sai na monoespaçada, como a numeração de uma parte de documento — e com
   largura de algarismo travada, para "01" e "11" ocuparem a mesma caixa. */
.numero {
  flex: none;
  color: var(--ds-accent);
  font-family: var(--ds-font-mono);
  font-size: 8rem;
  font-weight: var(--ds-weight-bold);
  line-height: 0.8;
  letter-spacing: -0.04em;
  opacity: 0.5;
  font-variant-numeric: tabular-nums;
}

.texto {
  flex: 1;
  min-width: 0;
}

.texto :deep(h1) {
  margin-bottom: var(--ds-space-3);
}
</style>
