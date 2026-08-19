<!--
  <Passos> — um procedimento, na ordem em que se faz.

  <Passos :atual="2" :itens="[
    { titulo: 'Descrever o fato', desc: 'o que aconteceu, sem adjetivo' },
    { titulo: 'Localizar a norma', desc: 'qual artigo alcança o caso' },
    { titulo: 'Ouvir a pessoa', desc: 'o que ela quer e o que ela teme' },
    { titulo: 'Decidir e registrar', desc: 'a razão vale mais que a escolha' },
  ]" />

  Três peças parecidas, três usos diferentes — não troque uma pela outra:

  · `roteiro` (layout) é o índice DA AULA: o que vem hoje.
  · <LinhaDoTempo> é cronologia: aconteceu nesta ordem, no passado.
  · <Passos> é protocolo: FAÇA nesta ordem, no futuro. Por isso corre na
    horizontal e não tem data — o eixo aqui é a decisão, não o tempo.

  `atual` (1-based) acende um passo: serve para repetir a mesma <Passos> em
  slides seguidos, avançando um de cada vez. `desc` é opcional e aceita HTML.
  Acima de cinco passos a linha fica apertada — aí é caso de quebrar em dois
  slides, ou de admitir que o protocolo tem etapas demais.
-->
<script setup lang="ts">
defineProps<{
  itens?: { titulo?: string, desc?: string }[]
  atual?: number
}>()
</script>

<template>
  <ol class="ds-passos">
    <li
      v-for="(item, i) in itens"
      :key="i"
      :class="{ atual: atual === i + 1 }"
    >
      <span class="num">{{ String(i + 1).padStart(2, '0') }}</span>
      <span class="titulo" v-html="item.titulo" />
      <span v-if="item.desc" class="desc" v-html="item.desc" />
    </li>
  </ol>
</template>

<style scoped>
/* Colunas de largura igual: `grid-auto-columns: 1fr` com fluxo em coluna faz o
   número de passos não importar para o CSS — dois ou cinco, o cálculo é o
   mesmo. O `minmax(0, 1fr)` é o que impede uma descrição longa de esticar a
   própria coluna e desequilibrar as outras. */
.ds-passos {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(0, 1fr);
  gap: var(--ds-space-5);
  margin: var(--ds-space-5) 0;
  padding: 0;
  list-style: none;
}

/* O fio no topo de cada coluna é o que amarra os passos numa sequência: a
   interrupção no vão entre colunas já lê como "e depois". Não precisa de seta. */
.ds-passos li {
  margin: 0;
  padding: var(--ds-space-3) 0 0;
  border-top: 2px solid var(--ds-rule);
}

.ds-passos li.atual {
  border-top-color: var(--ds-accent);
}

.num {
  display: block;
  margin-bottom: var(--ds-space-2);
  color: var(--ds-muted);
  font-family: var(--ds-font-mono);
  font-size: var(--ds-text-xs);
  font-variant-numeric: tabular-nums;
  letter-spacing: var(--ds-tracking-kicker);
}

.ds-passos li.atual .num {
  color: var(--ds-accent);
  font-weight: var(--ds-weight-medium);
}

.titulo {
  display: block;
  font-size: var(--ds-text-base);
  font-weight: var(--ds-weight-medium);
  line-height: var(--ds-leading-tight);
  text-wrap: balance;
}

.desc {
  display: block;
  margin-top: var(--ds-space-2);
  color: var(--ds-muted);
  font-size: var(--ds-text-sm);
  line-height: var(--ds-leading-normal);
}
</style>
