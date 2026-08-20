<!--
  <Artigo> — o texto da norma como ele é, sem paráfrase.

  <Artigo numero="Art. 9º" norma="Código de Ética Profissional do Psicólogo, 2005" trecho>

  É dever do psicólogo respeitar o sigilo profissional a fim de proteger,
  por meio da confidencialidade, a intimidade das pessoas.

  </Artigo>

  A diferença entre este componente e <Citacao> é de gênero, não de forma: a
  citação é a palavra de um autor, que se discute; o artigo é a palavra da
  norma, que se aplica. Por isso o artigo vem em bloco de papel branco, com
  número e origem no alto — do jeito que a turma vai reencontrar no PDF do
  Código.

  · `trecho` (booleano) põe "[…]" antes e depois: sinaliza que o artigo foi
    cortado, que é o honesto quando só um pedaço cabe no slide.
  · Para grifar dentro do artigo, use `**negrito**` — sai no accent, e é o
    grifo do professor sobre um texto que não é dele.
  · Para o artigo inteiro ocupando o slide, com espaço de comentário na
    margem, o layout `documento` serve melhor.

  Precisa de linha em branco depois da tag de abertura, senão o markdown de
  dentro não é interpretado.
-->
<script setup lang="ts">
defineProps<{
  numero?: string
  norma?: string
  trecho?: boolean
}>()
</script>

<template>
  <article class="ds-artigo">
    <header v-if="numero || norma" class="cabecalho">
      <span v-if="numero" class="numero">{{ numero }}</span>
      <span v-if="norma" class="norma">{{ norma }}</span>
    </header>

    <div class="corpo">
      <span v-if="trecho" class="corte" aria-hidden="true">[…]</span>
      <slot />
      <span v-if="trecho" class="corte" aria-hidden="true">[…]</span>
    </div>
  </article>
</template>

<style scoped>
.ds-artigo {
  margin: var(--ds-space-5) 0;
  padding: var(--ds-space-4) var(--ds-space-5);
  border: var(--ds-border) solid var(--ds-rule);
  border-left: var(--ds-border-thick) solid var(--ds-accent);
  border-radius: 0 var(--ds-radius) var(--ds-radius) 0;
  background: var(--ds-surface);
}

.cabecalho {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--ds-space-2) var(--ds-space-3);
  margin-bottom: var(--ds-space-3);
  padding-bottom: var(--ds-space-2);
  border-bottom: var(--ds-border) solid var(--ds-rule);
}

.numero {
  color: var(--ds-accent);
  font-family: var(--ds-font-mono);
  font-size: var(--ds-text-sm);
  font-weight: var(--ds-weight-bold);
  font-variant-numeric: tabular-nums;
  letter-spacing: var(--ds-tracking-kicker);
  text-transform: uppercase;
}

.norma {
  color: var(--ds-muted);
  font-size: var(--ds-text-xs);
}

/* Serifa: o corpo é palavra de outro — do legislador, neste caso. É a mesma
   regra que vale para <Citacao> e para o blockquote do markdown. */
.corpo {
  font-family: var(--ds-font-serif);
  font-size: var(--ds-text-base);
  line-height: var(--ds-leading-loose);
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

.corte {
  color: var(--ds-muted);
  font-family: var(--ds-font-mono);
  font-size: 0.85em;
}
</style>
