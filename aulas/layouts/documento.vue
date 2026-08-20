<!--
  documento — o texto da norma em tela cheia, com espaço para o comentário na
  margem. O slide em que a turma lê junto, devagar.

  ---
  layout: documento
  artigo: Art. 9º
  norma: Código de Ética Profissional do Psicólogo · Resolução CFP 010/2005
  title: O dever que tem exceção
  fonte: CFP, 2005, p. 12
  ---

  É dever do psicólogo respeitar o sigilo profissional a fim de proteger,
  por meio da confidencialidade, a intimidade das pessoas.

  ::margem::

  **"por meio da"** — o sigilo é o meio, não o fim.

  O fim é a intimidade. Guarde isso: é daqui que sai toda exceção do Art. 10.

  ---

  A marginália é o ponto do layout. Comentar a norma no meio do próprio texto
  transforma a norma no comentário; comentar na margem mantém as duas vozes
  separadas, do jeito que uma edição anotada faz há uns quinhentos anos. Sem o
  bloco `::margem::` o documento simplesmente ocupa a largura inteira.

  `artigo`, `norma`, `title` e `fonte` aceitam HTML. O documento sai em serifa,
  como <Artigo> e <Citacao>: a serifa é a voz de quem não é você.

  Um slide, um artigo. Se o texto não couber com folga, corte com "[…]" e diga
  de onde veio — a íntegra é o PDF, não o slide.
-->
<script setup lang="ts">
// `title` é campo reservado do Slidev: ele o usa para o índice e NÃO o repassa como prop.
// O jeito de lê-lo é pelo objeto `frontmatter` — ver docs/design-system.md.
const props = defineProps<{
  artigo?: string
  norma?: string
  fonte?: string
  frontmatter?: Record<string, any>
}>()

const title = props.frontmatter?.title
</script>

<template>
  <div class="slidev-layout ds-documento">
    <header v-if="artigo || norma || title" class="cabecalho">
      <p v-if="artigo || norma" class="identificacao">
        <span v-if="artigo" class="artigo" v-html="artigo" />
        <span v-if="norma" class="norma" v-html="norma" />
      </p>
      <h1 v-if="title" v-html="title" />
    </header>

    <div class="folha" :class="{ 'com-margem': !!$slots.margem }">
      <div class="texto"><slot /></div>
      <aside v-if="$slots.margem" class="margem">
        <slot name="margem" />
      </aside>
    </div>

    <p v-if="fonte" class="ds-small fonte" v-html="fonte" />
  </div>
</template>

<style scoped>
.ds-documento {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.cabecalho {
  flex: none;
  padding-bottom: var(--ds-space-3);
  border-bottom: 2px solid var(--ds-rule);
}

/* A linha de identificação se comporta como o carimbo do alto de um documento:
   número à esquerda, origem em seguida, os dois na monoespaçada. */
.identificacao {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--ds-space-2) var(--ds-space-4);
  margin: 0;
  max-width: none;
  font-family: var(--ds-font-mono);
}

.artigo {
  color: var(--ds-accent);
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

.cabecalho :deep(h1) {
  margin: var(--ds-space-3) 0 0;
  font-size: var(--ds-text-xl);
}

/* `min-height: 0` num filho de flex é o que permite ao painel rolar em vez de
   empurrar o rodapé para fora do slide. Sem ele, o conteúdo estoura por baixo. */
.folha {
  flex: 1;
  min-height: 0;
  display: grid;
  gap: var(--ds-space-6);
  /* `stretch` de propósito: a folha ocupa a altura toda mesmo com pouco texto.
     Um painel branco do tamanho exato do parágrafo pareceria um cartão; do
     tamanho do slide, parece a página que ele quer imitar. */
  align-items: stretch;
  padding-top: var(--ds-space-5);
}

.folha.com-margem {
  grid-template-columns: minmax(0, 1.8fr) minmax(0, 1fr);
}

.texto {
  max-height: 100%;
  overflow: auto;
  padding: var(--ds-space-5) var(--ds-space-6);
  border: var(--ds-border) solid var(--ds-rule);
  border-radius: var(--ds-radius);
  background: var(--ds-surface);
  font-family: var(--ds-font-serif);
  font-size: var(--ds-text-lg);
  line-height: var(--ds-leading-loose);
}

.texto :deep(> :first-child) {
  margin-top: 0;
}

.texto :deep(> :last-child) {
  margin-bottom: 0;
}

.texto :deep(p) {
  max-width: none;
}

/* A margem é a sua voz: sans, menor, e recuada por um fio — nunca compete com
   o documento, mas também não se confunde com ele. */
.margem {
  align-self: stretch;
  padding-left: var(--ds-space-4);
  border-left: 2px solid var(--ds-accent);
  color: var(--ds-muted);
  font-size: var(--ds-text-sm);
  line-height: var(--ds-leading-normal);
}

.margem :deep(> :first-child) {
  margin-top: 0;
}

.margem :deep(p) {
  margin: var(--ds-space-3) 0;
  max-width: none;
  line-height: var(--ds-leading-normal);
}

.fonte {
  flex: none;
  margin: var(--ds-space-4) 0 0;
  max-width: none;
}
</style>
