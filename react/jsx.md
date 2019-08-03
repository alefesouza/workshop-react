# JSX

O JSX é um dos principais diferenciais do React, embora possa ser implementado em outros frameworks como o [Vue.js](https://vuejs.org), observe o códigos do seu `App.js`.

```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

Tags HTML no seu JavaScript??? Por incrível que pareça inicialmente, isso é completamente normal no mundo React, esse é o JSX.

Ele aproveita dos recursos de transpilação explicados anteriormente para adicionar funcionalidades que não são suportadas no JavaScript para algo que o navegador entenda, quando esse JSX para pelo sistema de transpição, ele se transforma em algo assim:

```js
function App() {
  return React.createElement(
    "div",
    { className: "App" },
    React.createElement(
      "header",
      { className: "App-header" },
      React.createElement("img", { src: logo, className: "App-logo", alt: "logo" }),
      React.createElement(
        "p",
        null,
        "Edit ",
        React.createElement(
          "code",
          null,
          "src/App.js"
        ),
        " and save to reload."
      ),
      React.createElement(
        "a",
        {
          className: "App-link",
          href: "https://reactjs.org",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        "Learn React"
      )
    )
  );
}
```

Qual dos dois você prefere escrever? hahaha, no fundo todo componente que escrevemos em React se transforma em um código como o último através do sistema de transpilação, assim podendo ser executado como um JavaScript comum no navegador, e nós ganhamos em produtividade usando a sintaxe do JSX, embora você possa escrever códigos na sintaxe padrão do React normalmente, mesmo isso não sendo nada comum.

Por causa disso, mesmo que as tags `<div>` e `<p>` do nosso componente pareçam ser tags HTML comuns, todo o JSX na verdade são códigos em JavaScript, para saber mais sobre o mesmo, [clique aqui](https://pt-br.reactjs.org/docs/introducing-jsx.html) para ver a documentação oficial.
