<!--
  confronto — duas posições que não se resolvem uma na outra, cada uma com meia
  tela e o mesmo direito de fala.

  ---
  layout: confronto
  title: O sigilo é absoluto?
  esquerda: O dever de calar
  direita: O dever de proteger
  pergunta: Onde exatamente está a fronteira — e quem a define?
  ---

  O Código trata o sigilo como regra, não como preferência. Quebrá-lo por
  conveniência é falta ética, mesmo com boa intenção.

  ::direita::

  A regra tem exceção escrita: risco de vida muda o dever. Calar diante de um
  dano iminente também é uma escolha, e também responde por ela.

  ---

  Cuidado com a peça errada. Este layout dá o slide inteiro para dois
  ARGUMENTOS — cada lado com parágrafos próprios. Quando os dois lados cabem em
  uma linha cada, o que você quer é <Balanca> dentro de um slide comum; quando
  são coisas do mesmo tipo comparadas em três ou mais colunas, é <Grade> com
  <Cartao>.

  · O conteúdo do lado esquerdo é o corpo do slide; o do direito vem depois do
    marcador `::direita::` (a sintaxe de slot nomeado do Slidev).
  · `esquerda` e `direita` são os RÓTULOS das duas colunas — não o conteúdo.
  · `pergunta` é a faixa embaixo: o que fica em aberto depois dos dois lados.
    É opcional, e vale deixar de fora quando a aula já vai responder no slide
    seguinte.
  · Os dois lados usam as duas cores da identidade. Nenhuma das duas é a cor
    do "certo": o accent está à esquerda porque alguma coisa tinha que estar.
-->
<script setup lang="ts">
// `title` chega pelo objeto `frontmatter`, não como prop — ver docs/design-system.md.
const props = defineProps<{
  kicker?: string
  esquerda?: string
  direita?: string
  pergunta?: string
  frontmatter?: Record<string, any>
}>()

const title = props.frontmatter?.title
</script>

<template>
  <div class="slidev-layout ds-confronto">
    <header v-if="kicker || title" class="cabecalho">
      <p v-if="kicker" class="ds-kicker" v-html="kicker" />
      <h1 v-if="title" v-html="title" />
    </header>

    <div class="lados">
      <section class="lado a">
        <p v-if="esquerda" class="rotulo" v-html="esquerda" />
        <div class="texto"><slot /></div>
      </section>

      <section class="lado b">
        <p v-if="direita" class="rotulo" v-html="direita" />
        <div class="texto"><slot name="direita" /></div>
      </section>
    </div>

    <p v-if="pergunta" class="pergunta" v-html="pergunta" />
  </div>
</template>

<style scoped>
.ds-confronto {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.cabecalho {
  flex: none;
}

.cabecalho :deep(h1) {
  margin: 0;
  font-size: var(--ds-text-xl);
}

.lados {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--ds-space-6);
  padding-top: var(--ds-space-5);
}

/* Cada lado é uma coluna com um fio no topo na sua cor. Fio, e não fundo
   chapado: dois blocos coloridos de meia tela cada brigariam entre si e com
   tudo o que estivesse dentro deles. */
.lado {
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding-top: var(--ds-space-3);
  border-top: var(--ds-border-thick) solid var(--cor);
}

.lado.a {
  --cor: var(--ds-accent);
}

.lado.b {
  --cor: var(--ds-accent-2);
}

.rotulo {
  margin: 0 0 var(--ds-space-3);
  max-width: none;
  color: var(--cor);
  font-family: var(--ds-font-mono);
  font-size: var(--ds-text-xs);
  font-weight: var(--ds-weight-medium);
  letter-spacing: var(--ds-tracking-kicker);
  text-transform: uppercase;
}

.texto {
  min-height: 0;
  overflow: auto;
}

.texto :deep(> :first-child) {
  margin-top: 0;
}

.texto :deep(p) {
  max-width: none;
}

/* O `strong` dentro de um lado herda a cor daquele lado: um negrito no accent
   dentro da coluna do contraponto trocaria os times no meio do argumento. */
.texto :deep(strong) {
  color: var(--cor);
}

/* O marcador de lista também: é o detalhe que mantém as duas colunas coerentes. */
.texto :deep(ul > li::before) {
  background: var(--cor);
}

/* A pergunta que sobra não é de nenhum dos dois lados — atravessa a tela
   inteira, centrada, abaixo de um fio. */
.pergunta {
  flex: none;
  margin: var(--ds-space-5) 0 0;
  padding-top: var(--ds-space-4);
  max-width: none;
  border-top: var(--ds-border) solid var(--ds-rule);
  font-size: var(--ds-text-lg);
  line-height: var(--ds-leading-normal);
  text-align: center;
  text-wrap: balance;
}
</style>
