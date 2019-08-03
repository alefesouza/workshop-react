# Componentes

Componentes são uma forma de declarar interfaces baseadas em HTML, CSS e JavaScript em partes pequenas, dessa forma você pode reutilizá-las em diversas partes da sua aplicação.

Componentes também são um dos principais pilares de qualquer framework front-end moderno, React, Angular e Vue.js se baseiam principalmente nisso se diferenciando apenas na forma de declaração.

* No React é comum se utilizar o JSX e muito JavaScript.
* No Angular é comum utilizar classes em TypeScript, com templates HTML em um arquivo separado e CSS em outro arquivo.
* No Vue.js é comum utilizar objetos JavaScript e templates HTML e CSS em um único arquivo .vue.

No React temos dois tipos de componentes, os _stateless_, que se baseiam em apenas uma função comum que retorna um JSX, ideal para componentes simples, e os _stateful_, que se baseiam em uma classe comum e retornam o JSX no método render, nas classes você pode usar funcionalidades a mais como o gerenciamento de estado e método de lifecycle.

Na versão mais recente do React (16.8) os componentes _stateless_ também suportam isso através do [React Hooks](https://reactjs.org/docs/hooks-intro.html), que não abordaremos no workshop.
