<!--
  <Norma> — a etiqueta que diz de onde a regra saiu.

  O sigilo tem exceção previstas em <Norma>Art. 10 · CEPP 2005</Norma>.

  É a menor peça do design system e a mais usada numa aula de ética: toda
  afirmação normativa precisa de endereço. Serve solta no meio da frase, numa
  linha de rótulos, ou dentro do cabeçalho de <Artigo>.

  Não é link e não é botão — é carimbo. Se a norma merece ser lida na íntegra,
  o lugar dela é o <Artigo> ou o layout `documento`.
-->
<template>
  <span class="ds-norma"><slot /></span>
</template>

<style scoped>
/* `inline-block` com `white-space: nowrap` evita o pior defeito de uma etiqueta
   dentro de texto corrido: quebrar "Res. CFP" numa linha e "09/2018" na outra. */
.ds-norma {
  display: inline-block;
  padding: 0.1em 0.45em;
  border: var(--ds-border) solid var(--ds-rule);
  border-radius: var(--ds-radius-sm);
  background: var(--ds-accent-wash);
  color: var(--ds-accent);
  font-family: var(--ds-font-mono);
  font-size: 0.78em;
  font-variant-numeric: tabular-nums;
  line-height: 1.5;
  white-space: nowrap;
  vertical-align: baseline;
}
</style>
