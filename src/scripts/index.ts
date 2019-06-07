import * as Redom from 'redom'

declare const redom: typeof Redom

const { el, mount } = redom

const hello = el('h1', 'Hello!')

mount(document.querySelector('#app')!, hello)
