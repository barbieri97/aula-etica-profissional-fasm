<!--
  <Nota> — a caixa de aviso. O que não é o fio da aula, mas não pode passar batido.

  <Nota tipo="alerta" titulo="Cuidado">
  Fermento químico e fermento biológico não são a mesma coisa.
  </Nota>

  tipo: info (padrão) · ok · alerta · erro
-->
<script setup lang="ts">
withDefaults(defineProps<{
  tipo?: 'info' | 'ok' | 'alerta' | 'erro'
  titulo?: string
}>(), { tipo: 'info' })
</script>

<template>
  <aside class="ds-nota" :class="tipo">
    <p v-if="titulo" class="titulo">{{ titulo }}</p>
    <div class="corpo"><slot /></div>
  </aside>
</template>

<style scoped>
/* `--cor` e `--fundo` são os dois únicos pontos de variação entre os quatro
   tipos: borda, título e fundo saem deles. O fundo é tingido do mesmo tom da
   borda (e não de um cinza único) porque no projetor, de longe, a barra de 3px
   sozinha não diferencia um aviso de um alerta — a mancha de cor diferencia. */
.ds-nota {
  --cor: var(--ds-accent);
  --fundo: var(--ds-accent-wash);
  margin: var(--ds-space-4) 0;
  padding: var(--ds-space-4) var(--ds-space-5);
  border-left: var(--ds-border-thick) solid var(--cor);
  border-radius: 0 var(--ds-radius) var(--ds-radius) 0;
  background: var(--fundo);
}

.ds-nota.ok {
  --cor: var(--ds-ok);
  --fundo: var(--ds-ok-wash);
}

.ds-nota.alerta {
  --cor: var(--ds-warn);
  --fundo: var(--ds-warn-wash);
}

.ds-nota.erro {
  --cor: var(--ds-danger);
  --fundo: var(--ds-danger-wash);
}

.titulo {
  margin: 0 0 var(--ds-space-2);
  color: var(--cor);
  font-family: var(--ds-font-mono);
  font-size: var(--ds-text-xs);
  font-weight: var(--ds-weight-medium);
  letter-spacing: var(--ds-tracking-kicker);
  text-transform: uppercase;
}

.corpo :deep(> :first-child) {
  margin-top: 0;
}

.corpo :deep(> :last-child) {
  margin-bottom: 0;
}
</style>
