<!--
  O rodapé que acompanha a aula inteira: identificação da disciplina à
  esquerda, número do slide à direita.

  É o que faz o deck parecer material de aula e não apresentação avulsa — a
  mesma função do cabeçalho de uma apostila. Some na capa e no fecho, que são
  páginas de rosto e não têm por que ser numeradas.

  O texto da esquerda vem do headmatter da aula:

  ---
  themeConfig:
    rodape: FASM · Ética Profissional
  ---

  `themeConfig` é o campo que o Slidev reserva para configuração livre do tema,
  e chega inteiro em `$slidev.themeConfigs`. Sem o campo, aparece só o número —
  nenhuma aula quebra por não ter declarado.

  Duas armadilhas resolvidas aqui:

  · Por que `global-top` e não `global-bottom`. O `.slidev-layout` pinta o fundo
    do slide, e a camada `global-bottom` fica ATRÁS dele: um rodapé lá some por
    completo. Ficando por cima, precisa devolver o clique para o slide — daí o
    `pointer-events: none`.

  · De onde vêm os dados. `useNav()` e `configs` são as APIs públicas do
    `@slidev/client` (o arquivo `index.ts` do pacote diz exatamente isso). Numa
    camada global NÃO existe o `$nav` do template — ele só é injetado dentro do
    slide; tentar lê-lo aqui derruba o deck inteiro com "Cannot read properties
    of undefined". `$slidev` existiria, mas ler pelo `configs` mantém as duas
    fontes de dado no mesmo registro.
-->
<script setup lang="ts">
import { computed } from 'vue'
import { configs, useNav } from '@slidev/client'

const { currentPage, currentLayout, total } = useNav()

/** Páginas de rosto: sem rodapé, sem número. */
const LAYOUTS_SEM_RODAPE = ['capa', 'fecho']

const visivel = computed(() => !LAYOUTS_SEM_RODAPE.includes(String(currentLayout.value)))
const rodape = computed(() => configs.themeConfig?.rodape ?? '')
const numero = computed(() => String(currentPage.value).padStart(2, '0'))
</script>

<template>
  <footer v-if="visivel" class="ds-rodape">
    <span class="curso" v-html="rodape" />
    <span class="pagina">{{ numero }}<span class="de"> / {{ total }}</span></span>
  </footer>
</template>

<style scoped>
.ds-rodape {
  position: absolute;
  left: var(--ds-pad-x);
  right: var(--ds-pad-x);
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ds-space-4);
  height: var(--ds-footer-h);
  /* A camada fica por cima do slide: sem isto, ela engoliria os cliques
     (links, <Toc>, código no Monaco) da faixa inteira. */
  pointer-events: none;
  color: var(--ds-muted);
  font-family: var(--ds-font-mono);
  font-size: var(--ds-text-xs);
  letter-spacing: 0.04em;
}

.curso {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pagina {
  flex: none;
  color: var(--ds-ink);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

/* O total é contexto, não informação: fica um degrau abaixo do número da vez. */
.de {
  color: var(--ds-muted);
}
</style>
