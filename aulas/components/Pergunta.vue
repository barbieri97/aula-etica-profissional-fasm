<!--
  <Pergunta> — o slide para de expor e passa a palavra para a turma.

  <Pergunta tempo="5 min">

  O sigilo protege quem: a pessoa atendida, ou o psicólogo?

  </Pergunta>

  Numa aula de ética, a pergunta não é retórica: é o método. Este bloco existe
  para que ela seja visivelmente OUTRA coisa no slide — não mais um parágrafo
  em negrito que a turma lê e segue adiante. A faixa entre dois fios e o rótulo
  em caixa alta são o sinal combinado de "agora é com vocês".

  · `rotulo` troca o "para discutir" (ex.: "em duplas", "responda por escrito").
  · `tempo` aparece à direita do rótulo. Vale mais para você que para a turma:
    é o que impede a discussão de comer o resto da aula.
  · Várias perguntas? Escreva uma lista markdown dentro — a primeira ganha o
    corpo grande, o resto vira desdobramento.

  Para a pergunta que abre a aula inteira, sozinha na tela, o layout `destaque`
  serve melhor. Este é para a pergunta no meio de um slide que tem mais coisas.
-->
<script setup lang="ts">
withDefaults(defineProps<{
  rotulo?: string
  tempo?: string
}>(), { rotulo: 'para discutir' })
</script>

<template>
  <section class="ds-pergunta">
    <p class="rotulo">
      <span>{{ rotulo }}</span>
      <span v-if="tempo" class="tempo">{{ tempo }}</span>
    </p>
    <div class="corpo"><slot /></div>
  </section>
</template>

<style scoped>
/* Faixa, e não caixa: dois fios horizontais atravessando a coluna de texto
   marcam uma pausa na leitura melhor do que mais um retângulo com fundo — que
   é o que o slide já usa para cartão, artigo e nota. */
.ds-pergunta {
  margin: var(--ds-space-5) 0;
  padding: var(--ds-space-3) 0 var(--ds-space-4);
  border-top: 2px solid var(--ds-accent);
  border-bottom: var(--ds-border) solid var(--ds-rule);
}

.rotulo {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--ds-space-4);
  margin: 0 0 var(--ds-space-3);
  max-width: none;
  color: var(--ds-accent);
  font-family: var(--ds-font-mono);
  font-size: var(--ds-text-xs);
  font-weight: var(--ds-weight-medium);
  letter-spacing: var(--ds-tracking-kicker);
  text-transform: uppercase;
}

.tempo {
  flex: none;
  color: var(--ds-muted);
  font-variant-numeric: tabular-nums;
}

.corpo {
  font-size: var(--ds-text-lg);
  line-height: var(--ds-leading-normal);
}

.corpo :deep(> :first-child) {
  margin-top: 0;
}

.corpo :deep(> :last-child) {
  margin-bottom: 0;
}

.corpo :deep(p) {
  max-width: 52ch;
}

/* Perguntas desdobradas: menores que a principal, para a hierarquia não sumir. */
.corpo :deep(:is(ul, ol)) {
  margin-top: var(--ds-space-3);
  font-size: var(--ds-text-base);
  color: var(--ds-muted);
}
</style>
