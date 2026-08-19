<!--
  <Principio> — um princípio fundamental, com o numeral que ele tem na norma.

  <Principio numeral="II" titulo="Responsabilidade">

  O psicólogo trabalhará visando promover a saúde e a qualidade de vida.

  </Principio>

  Os Princípios Fundamentais do Código de Ética são numerados em romanos, e o
  numeral faz parte do nome deles — "o Princípio V" é como a turma vai citar na
  prova e no estágio. Por isso o numeral vem em caixa própria, do tamanho de um
  título: ele é identificador, não enfeite.

  Empilhe vários dentro de <Grade :cols="2"> ou de uma <div class="ds-stack">.
  Para a definição de uma palavra (e não de um princípio), use <Termo>.
-->
<script setup lang="ts">
defineProps<{
  numeral?: string
  titulo?: string
}>()
</script>

<template>
  <section class="ds-principio">
    <span v-if="numeral" class="numeral">{{ numeral }}</span>
    <div class="texto">
      <p v-if="titulo" class="titulo">{{ titulo }}</p>
      <div class="corpo"><slot /></div>
    </div>
  </section>
</template>

<style scoped>
.ds-principio {
  display: flex;
  align-items: flex-start;
  gap: var(--ds-space-4);
  margin: var(--ds-space-4) 0;
}

/* Caixa de largura fixa: numeral romano varia muito de largura (I contra VIII),
   e sem a caixa os títulos de uma lista de princípios saem desalinhados. */
.numeral {
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.6rem;
  height: 2.6rem;
  border: var(--ds-border) solid var(--ds-rule);
  border-top: var(--ds-border-thick) solid var(--ds-accent);
  border-radius: var(--ds-radius-sm);
  background: var(--ds-surface);
  color: var(--ds-accent);
  font-family: var(--ds-font-mono);
  font-size: var(--ds-text-base);
  font-weight: var(--ds-weight-medium);
  letter-spacing: 0.02em;
}

.texto {
  min-width: 0;
}

.titulo {
  margin: 0 0 var(--ds-space-1);
  font-size: var(--ds-text-lg);
  font-weight: var(--ds-weight-medium);
  line-height: var(--ds-leading-tight);
  max-width: none;
}

.corpo {
  color: var(--ds-muted);
  font-size: var(--ds-text-sm);
  line-height: var(--ds-leading-normal);
}

.corpo :deep(> :first-child) {
  margin-top: 0;
}

.corpo :deep(> :last-child) {
  margin-bottom: 0;
}

.corpo :deep(p) {
  max-width: none;
}
</style>
