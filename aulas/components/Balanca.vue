<!--
  <Balanca> — dois deveres que não cabem os dois, lado a lado.

  <Balanca
    :lados="[
      { titulo: 'Sigilo', razao: 'proteger a intimidade de quem confiou' },
      { titulo: 'Proteção da vida', razao: 'impedir um dano grave e iminente' },
    ]"
    saida="Nenhum vence por regra. O caso decide — e a decisão se registra."
  />

  O conflito entre dois princípios é o coração da disciplina, e ele não se
  resolve com uma lista de tópicos: a lista sugere que um item é mais
  importante porque veio antes. Aqui os dois pratos são simétricos de
  propósito, cada um com sua cor, e a linha de baixo é o único lugar onde
  alguma coisa se decide.

  · `lados` recebe exatamente dois itens; `razao` é opcional e aceita HTML.
  · `saida` é a linha do desempate. Deixe vazia quando a aula quiser que a
    turma discuta antes de você responder.
  · Se cada lado precisa de um parágrafo inteiro, não é aqui: o layout
    `confronto` dá o slide inteiro para os dois argumentos.
-->
<script setup lang="ts">
defineProps<{
  lados?: { titulo?: string, razao?: string }[]
  saida?: string
}>()
</script>

<template>
  <div class="ds-balanca">
    <div class="pratos">
      <div
        v-for="(lado, i) in (lados ?? []).slice(0, 2)"
        :key="i"
        class="prato"
        :class="i === 0 ? 'a' : 'b'"
      >
        <p class="titulo" v-html="lado.titulo" />
        <p v-if="lado.razao" class="razao" v-html="lado.razao" />
      </div>
    </div>

    <p v-if="saida" class="saida" v-html="saida" />
  </div>
</template>

<style scoped>
.ds-balanca {
  margin: var(--ds-space-5) 0;
}

.pratos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--ds-space-4);
  align-items: stretch;
}

.prato {
  padding: var(--ds-space-4) var(--ds-space-5);
  border-radius: var(--ds-radius);
  border-top: var(--ds-border-thick) solid var(--cor);
  background: var(--fundo);
}

/* As duas cores da identidade servem exatamente para isto: um lado é o accent
   da disciplina, o outro é o contraponto. Fora de uma comparação, o accent-2
   não deveria aparecer. */
.prato.a {
  --cor: var(--ds-accent);
  --fundo: var(--ds-accent-wash);
}

.prato.b {
  --cor: var(--ds-accent-2);
  --fundo: var(--ds-accent-2-wash);
}

.titulo {
  margin: 0;
  max-width: none;
  color: var(--cor);
  font-size: var(--ds-text-lg);
  font-weight: var(--ds-weight-medium);
  line-height: var(--ds-leading-tight);
}

.razao {
  margin: var(--ds-space-2) 0 0;
  max-width: none;
  color: var(--ds-muted);
  font-size: var(--ds-text-sm);
  line-height: var(--ds-leading-normal);
}

/* O desempate fica embaixo e centrado, sem cor de lado nenhum: é a linha que
   não pertence a nenhum dos dois pratos. */
.saida {
  margin: var(--ds-space-4) 0 0;
  padding-top: var(--ds-space-3);
  max-width: none;
  border-top: var(--ds-border) solid var(--ds-rule);
  color: var(--ds-ink);
  font-size: var(--ds-text-sm);
  line-height: var(--ds-leading-normal);
  text-align: center;
}
</style>
