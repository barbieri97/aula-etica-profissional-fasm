import { onBeforeUnmount, onMounted, type Ref } from 'vue'

/**
 * Faz o texto de um painel caber no slide descendo a escala de tipo, em vez de rolar.
 *
 * POR QUE ISSO EXISTE:
 *
 * Slide projetado não rola. Um painel com `overflow: auto` esconde a metade do argumento
 * atrás de uma barra que ninguém na sala vai arrastar — e que nem aparece no PDF. Os
 * layouts com painel de texto (`confronto`, `caso`, `documento`) usam isto no lugar da
 * rolagem: quando o texto não cabe, a fonte do painel desce UM degrau da escala de tipo
 * por vez, até caber ou até acabarem os degraus permitidos.
 *
 * Os degraus são nomes de token (`--ds-text-sm`…), nunca medida: a escala continua fechada.
 * Se nem o último degrau resolve, o painel corta o excesso (`overflow: hidden` no layout)
 * e o console avisa — é o sinal de que o texto precisa ser reduzido, ou o layout trocado.
 *
 *   const lados = ref<HTMLElement[]>([])
 *   useCaber(raiz, lados, ['--ds-text-base', '--ds-text-sm'])
 *
 * `raiz` recebe a fonte; `paineis` são os elementos que precisam caber. Com mais de um
 * painel (os dois lados do `confronto`), todos descem juntos: um lado em letra menor que
 * o outro pareceria ter menos direito de fala.
 */
export function useCaber (
  raiz: Ref<HTMLElement | undefined>,
  paineis: Readonly<Ref<HTMLElement | HTMLElement[] | undefined>>,
  degraus: string[],
) {
  const lista = () => {
    const p = paineis.value
    return p ? (Array.isArray(p) ? p : [p]) : []
  }

  // Folga de 1px: arredondamento de sub-pixel não é estouro.
  const estoura = () => lista().some((el) => el.scrollHeight > el.clientHeight + 1)

  function ajustar () {
    const el = raiz.value
    // Slide fora da tela não tem altura (display: none) — mede quando ele aparecer.
    if (!el || !el.offsetHeight) return
    let i = 0
    for (; i < degraus.length; i++) {
      el.style.fontSize = `var(${degraus[i]})`
      el.dataset.caber = String(i)
      if (!estoura()) return
    }
    if (import.meta.env.DEV) {
      const titulo = el.querySelector('h1')?.textContent?.trim()
      console.warn(`[caber] o texto não cabe nem em ${degraus.at(-1)} — reduza o texto ou troque o layout:`, titulo ?? el)
    }
  }

  let observador: ResizeObserver | undefined
  onMounted(() => {
    // O tamanho do painel muda quando o slide aparece, quando a janela muda e quando a
    // fonte termina de carregar; o observador cobre os três.
    observador = new ResizeObserver(() => ajustar())
    if (raiz.value) observador.observe(raiz.value)
    document.fonts?.ready.then(ajustar)
    ajustar()
  })
  onBeforeUnmount(() => observador?.disconnect())
}
